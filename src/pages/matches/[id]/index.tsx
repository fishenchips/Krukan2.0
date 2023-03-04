import { useAddPlayerToRoster } from "@/queries/matches/hooks/useAddPlayerToRoster";
import { Player } from "@/utils/types/playerInfo";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import { useQueryClient } from "@tanstack/react-query";
import {
  matchKey,
  useGetMatchById,
} from "@/queries/matches/hooks/useGetMatchById";
import { Loading } from "@/components/layout/Loading";

const MatchPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const { data: session } = useSession();

  const queryClient = useQueryClient();

  const { data: match, isLoading } = useGetMatchById(id as string);

  const { data: loggedInUser } = useGetLoggedInUser(
    session?.user?.email as string
  );

  const { mutate } = useAddPlayerToRoster(
    loggedInUser as Player,
    match?._id as string,
    {
      onSuccess: () => queryClient.invalidateQueries([matchKey, id]),
    }
  );

  const handleAttendMatch = () => {
    mutate();
    console.log({ loggedInUser }, match?._id);
  };

  if (isLoading || !isReady) return <Loading />;

  if (!match) {
    return <p>Match not found</p>;
  }

  return (
    <div>
      <h4>
        {match.home
          ? `FC Krukan - ${match.opposition} (H)`
          : `${match.opposition} - FC Krukan (A)`}
      </h4>
      <p>
        {match.gameType} match at {match.arena}
      </p>
      <p>{match.date}</p>

      <div>
        <button onClick={handleAttendMatch}>I can play!</button>
      </div>

      {match.roster ? (
        <div>
          <p>Players:</p>
          {match.roster.map((player: Player) => (
            <span key={player._id}>
              {player.info.firstName} {player.info.lastName}
            </span>
          ))}
        </div>
      ) : (
        <p>No players yet attending this match.</p>
      )}
    </div>
  );
};

export default MatchPage;

/* export const getStaticProps: GetStaticProps<{ match: Match }> = async (
  context
) => {
  const matchId = context?.params?._id;

  const { data } = useGetMatchById(matchId);
};
 */

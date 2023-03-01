import { useAddPlayerToRoster } from "@/queries/matches/hooks/useAddPlayerToRoster";
import { Player } from "@/utils/types/playerInfo";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import { useQueryClient } from "@tanstack/react-query";
import { matchesKey } from "@/queries/matches/hooks/useGetMatches";

/* Error when reloading page, test getStaticProps / staticPaths */

const MatchPage = () => {
  const { query } = useRouter();
  const { data: session } = useSession();

  const queryClient = useQueryClient();

  const { data: loggedInUser } = useGetLoggedInUser(
    session?.user?.email as string
  );

  const { _id, home, arena, date, gameType, opposition, roster } = JSON.parse(
    query.match as string
  );

  const { mutate } = useAddPlayerToRoster(loggedInUser as Player, _id, {
    onSuccess: () => queryClient.invalidateQueries([matchesKey]),
  });

  const handleAttendMatch = () => {
    mutate();
    console.log({ loggedInUser }, { _id });
  };

  return (
    <div>
      <h4>
        {home
          ? `FC Krukan - ${opposition} (H)`
          : `${opposition} - FC Krukan (A)`}
      </h4>
      <p>
        {gameType} match at {arena}
      </p>
      <p>{date}</p>

      <div>
        <button onClick={handleAttendMatch}>I can play!</button>
      </div>

      {roster ? (
        <div>
          <p>Players:</p>
          {roster.map((player: Player) => (
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

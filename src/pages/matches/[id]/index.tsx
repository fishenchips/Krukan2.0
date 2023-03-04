import { Player } from "@/utils/types/playerInfo";
import { useRouter } from "next/router";
import { useGetMatchById } from "@/queries/matches/hooks/useGetMatchById";
import { Loading } from "@/components/layout/Loading";
import { AttendMatch } from "@/components/match/AttendMatch";

const MatchPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const { data: match, isLoading } = useGetMatchById(id as string);

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

      <AttendMatch matchId={id as string} roster={match.roster} />

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

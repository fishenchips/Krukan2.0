import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import { useRouter } from "next/router";
import { Loading } from "../layout/Loading";

/* Todo 
  fix filtering
*/

export const MatchSchedule = () => {
  const { push } = useRouter();

  const { data: matches, isLoading } = useGetMatches();

  if (isLoading) return <Loading />;

  if (matches?.length === 0) return <p>No matches available.</p>;

  return (
    <div>
      {matches?.map((match) => (
        <div key={match._id}>
          <h4 onClick={() => push(`/matches/${match._id}`)}>
            {match.home
              ? `FC Krukan - ${match.opposition} (H)`
              : `${match.opposition} - FC Krukan (A)`}
          </h4>
          <p>
            {match.date} <time>{match.time}</time>, {match.arena}
          </p>
        </div>
      ))}
    </div>
  );
};

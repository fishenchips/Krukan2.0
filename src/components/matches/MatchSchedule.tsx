import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import { useRouter } from "next/router";
import { Loading } from "../layout/Loading";

/* Todo 
  fix filtering
  fix attending
  mobile
*/

export const MatchSchedule = () => {
  const { push } = useRouter();

  const { data: matches, isLoading } = useGetMatches();

  console.log(matches);

  if (isLoading) return <Loading />;

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

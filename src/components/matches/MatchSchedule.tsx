import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import { useRouter } from "next/router";

export const MatchSchedule = () => {
  const { push } = useRouter();

  const { data: matches } = useGetMatches();

  console.log(matches);

  return (
    <div>
      {matches?.map((match) => (
        <div key={match._id}>
          <h4
            onClick={() =>
              push(
                {
                  pathname: `/matches/${match._id}`,
                  query: { match: JSON.stringify(match) },
                },
                `/matches/${match._id}`
              )
            }
          >
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

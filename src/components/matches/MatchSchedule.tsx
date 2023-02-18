import { useRouter } from "next/router";

export const MatchSchedule = () => {
  const { push } = useRouter();

  return (
    <div>
      {DUMMY_MATCHES.map((match) => (
        <div key={match.id}>
          <h4
            onClick={() =>
              push(
                {
                  pathname: `/matches/${match.id}`,
                  query: { match: JSON.stringify(match) },
                },
                `/matches/${match.id}`
              )
            }
          >
            {match.home
              ? `FC Krukan - ${match.opposition} (H)`
              : `${match.opposition} - FC Krukan (A)`}
          </h4>
          <p>Date: {match.date}</p>
          <p>At {match.arena}</p>
        </div>
      ))}
    </div>
  );
};

const DUMMY_MATCHES = [
  {
    id: 1,
    home: false,
    arena: "zinken",
    date: "23-03-16, 16:00",
    gameType: "friendly",
    opposition: "Stureby",
  },
  {
    id: 2,
    home: true,
    arena: "zinken",
    date: "23-03-16, 16:00",
    gameType: "friendly",
    opposition: "Stureby",
  },

  {
    id: 3,
    home: true,
    arena: "zinken",
    date: "23-03-16, 16:00",
    gameType: "friendly",
    opposition: "Stureby",
  },
  {
    id: 4,
    home: true,
    arena: "zinken",
    date: "23-03-16, 16:00",
    gameType: "friendly",
    opposition: "Stureby",
  },
];

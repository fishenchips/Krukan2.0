import { useRouter } from "next/router";

const MatchPage = () => {
  const { query } = useRouter();

  const { home, arena, date, gameType, opposition } = JSON.parse(
    query.match as string
  );

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
    </div>
  );
};

export default MatchPage;

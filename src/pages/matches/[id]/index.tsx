import { Player } from "@/utils/types/playerInfo";
import { useRouter } from "next/router";

const MatchPage = () => {
  const { query } = useRouter();

  const { home, arena, date, gameType, opposition, roster } = JSON.parse(
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

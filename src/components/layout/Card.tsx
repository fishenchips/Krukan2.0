import { useRouter } from "next/router";
import styles from "./Card.module.css";
import { FaUserEdit } from "react-icons/fa";

export const CardComponent = () => {
  const { push } = useRouter();

  const sortedArray = testLeaderboard.players.sort((a, b) => b.score - a.score);

  return (
    <div className={styles.card}>
      <h4>
        {testLeaderboard.name}{" "}
        <FaUserEdit
          onClick={() => push(`leaderboards/edit/${testLeaderboard.type}`)}
        />
      </h4>

      <div>
        <div className={styles.list}>
          {sortedArray.map((player, i) => (
            <span key={player.player}>
              {i + 1} {player.player}: {player.score}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const testLeaderboard = {
  type: "player",
  name: "Pläääyerr",
  players: [
    { player: "Philip", score: 8 },
    { player: "Erik", score: 2 },
    { player: "Gabriel", score: 18 },
  ],
};

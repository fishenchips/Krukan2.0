import { useRouter } from "next/router";
import styles from "./Card.module.css";
import { FaUserEdit } from "react-icons/fa";

export const CardComponent = () => {
  const { push } = useRouter();

  const sortedArray = testLeaderboard.players.sort((a, b) => b.score - a.score);

  // Function to determine the className based on rank
  const scoreClass = (rank: number) => {
    switch (rank) {
      case 1:
        return styles.gold;
      case 2:
        return styles.silver;
      case 3:
        return styles.bronze;
      default:
        return styles.score;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>
          {testLeaderboard.name}
          <FaUserEdit
            className={styles.editIcon}
            onClick={() => push(`leaderboards/edit/${testLeaderboard.type}`)}
          />
        </h4>
      </div>
      <ul className={styles.list}>
        {sortedArray.map((player, i) => (
          <li key={player.player} className={styles.listItem}>
            <span className={styles.rank}>{i + 1}</span>
            <span className={styles.playerName}>{player.player}</span>
            <span className={scoreClass(i + 1)}>{player.score}</span>
          </li>
        ))}
      </ul>
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

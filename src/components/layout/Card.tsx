import { useRouter } from "next/router";
import styles from "./Card.module.css";
import { FaUserEdit } from "react-icons/fa";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";

interface Props {
  leaderboard: Array<LeaderBoardPlayer>;
}

export const CardComponent: React.FC<Props> = ({ leaderboard }) => {
  const { push } = useRouter();

  if (!leaderboard) {
    return <p>No leaderboard active</p>;
  }

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
          Pläääyerr
          <FaUserEdit
            className={styles.editIcon}
            onClick={() => push(`leaderboards/edit/player`)}
          />
        </h4>
      </div>
      <ul className={styles.list}>
        {leaderboard.map((player, i) => (
          <li key={player._id} className={styles.listItem}>
            <span className={styles.rank}>{i + 1}</span>
            <span className={styles.playerName}>
              {player.info.firstName} {player.info.lastName}
            </span>
            <span className={scoreClass(i + 1)}>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

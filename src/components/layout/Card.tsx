import { useRouter } from "next/router";
import styles from "./Card.module.css";
import { FaUserEdit } from "react-icons/fa";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";
import { Loading } from "./Loading";
import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io";

interface Props {
  leaderboard: Array<LeaderBoardPlayer>;
  isLoading: boolean;
  title: string;
  route: string;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export const CardComponent: React.FC<Props> = ({
  leaderboard,
  isLoading,
  title,
  route,
  isExpanded,
  setIsExpanded,
}) => {
  const { push } = useRouter();

  if (isLoading) return <Loading />;

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
          {title}
          <FaUserEdit className={styles.editIcon} onClick={() => push(route)} />
        </h4>
        <div>
          <div
            className={styles.showMoreLess}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? (
              <IoIosArrowDropdown size={25} />
            ) : (
              <IoIosArrowDropright size={25} />
            )}
          </div>
        </div>
      </div>
      <ul className={styles.list}>
        {(isExpanded ? leaderboard : leaderboard.slice(0, 10)).map(
          (player, i) => (
            <li key={player._id} className={styles.listItem}>
              <span className={styles.rank}>{i + 1}</span>
              <span className={styles.playerName}>
                {player.info.firstName} {player.info.lastName}
              </span>
              <span className={scoreClass(i + 1)}>{player.score}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

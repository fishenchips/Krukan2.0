import { Match } from "@/utils/types/match";
import Link from "next/link";
import dayjs from "dayjs";

import styles from "./MatchInfo.module.css";

interface Props {
  match: Match;
}

export const MatchInfo: React.FC<Props> = ({ match }) => {
  return (
    <div>
      <Link href="/matches" className={styles.link}>
        See all matches
      </Link>
      <div>
        <h4 className={styles.title}>
          {match.home
            ? `FC Krukan - ${match.opposition} (H)`
            : `${match.opposition} - FC Krukan (A)`}
        </h4>
        <p className={styles.textSecond}>
          {match.gameType.charAt(0).toUpperCase() + match.gameType.slice(1)}{" "}
          match at {match.arena}
        </p>
        <p className={styles.textSecond}>
          {dayjs(match.date).format("dddd, D/M HH:mm")}
        </p>
      </div>
    </div>
  );
};

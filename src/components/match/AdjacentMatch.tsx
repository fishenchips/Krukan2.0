import { useRouter } from "next/router";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import type { AdjacentMatchType } from "@/utils/types/match";
import styles from "./MatchInfo.module.css";

interface Props {
  prevMatch?: AdjacentMatchType;
  nextMatch?: AdjacentMatchType;
}

export const AdjacentMatch: React.FC<Props> = ({ prevMatch, nextMatch }) => {
  const { push } = useRouter();

  const onNavigatePrev = () => push(`/matches/${prevMatch?.id}`);

  const onNavigateNext = () => push(`/matches/${nextMatch?.id}`);

  return (
    <div className={styles.adjacentMatchDiv}>
      <button disabled={!prevMatch?.id} onClick={() => onNavigatePrev()}>
        <div>
          <BsArrowLeftCircle />
          <span>{prevMatch?.opposition}</span>
        </div>
      </button>
      <div>
        <button disabled={!nextMatch} onClick={onNavigateNext}>
          <div>
            <span>{nextMatch?.opposition}</span>
            <BsArrowRightCircle />
          </div>
        </button>
      </div>
    </div>
  );
};

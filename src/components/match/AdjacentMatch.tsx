import { useRouter } from "next/router";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import type { AdjacentMatchType } from "@/utils/types/match";
import styles from "./MatchInfo.module.css";

interface Props {
  prevMatch: AdjacentMatchType | undefined;
  nextMatch: AdjacentMatchType | undefined;
}

export const AdjacentMatch: React.FC<Props> = ({ prevMatch, nextMatch }) => {
  const { push } = useRouter();

  const onNavigatePrev = () => push(`/matches/${prevMatch?.id}`);

  const onNavigateNext = () => push(`/matches/${nextMatch?.id}`);

  console.log(nextMatch);

  return (
    <div className={styles.adjacentMatchDiv}>
      {prevMatch?.id && (
        <button
          className={styles.adjacentMatchBtn}
          disabled={!prevMatch?.id}
          onClick={() => onNavigatePrev()}
        >
          <div>
            <AiOutlineArrowLeft />
            <span>{prevMatch?.opposition}</span>
          </div>
        </button>
      )}
      <div>
        <button
          className={styles.adjacentMatchBtn}
          disabled={!nextMatch?.id}
          onClick={onNavigateNext}
        >
          <div>
            <span>{nextMatch?.opposition}</span>
            <AiOutlineArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

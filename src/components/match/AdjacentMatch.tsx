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

  return (
    <div className={styles.adjacentMatchDiv}>
      {prevMatch && (
        <button
          className={styles.adjacentMatchBtn}
          onClick={() => onNavigatePrev()}
        >
          <div>
            <AiOutlineArrowLeft />
            <span>
              {prevMatch.opposition} {prevMatch.home ? "(H)" : "(A)"}
            </span>
          </div>
        </button>
      )}
      <div>
        {nextMatch && (
          <button className={styles.adjacentMatchBtn} onClick={onNavigateNext}>
            <div>
              <span>
                {nextMatch.opposition} {nextMatch.home ? "(H)" : "(A)"}
              </span>
              <AiOutlineArrowRight />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

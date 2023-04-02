import { Match } from "@/utils/types/match";
import Link from "next/link";

interface Props {
  match: Match;
}

export const MatchInfo: React.FC<Props> = ({ match }) => {
  return (
    <div>
      <Link href="/matches">See all matches</Link>
      <div>
        <h4>
          {match.home
            ? `FC Krukan - ${match.opposition} (H)`
            : `${match.opposition} - FC Krukan (A)`}
        </h4>
        <p>
          {match.gameType} match at {match.arena}
        </p>
        <p>{match.date}</p>
      </div>
    </div>
  );
};

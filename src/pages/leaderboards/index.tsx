import { useState } from "react";
import styles from "@/components/layout/Card.module.css";
import { CardComponent } from "@/components/layout/Card";
import { useGetPlayerLeaderboard } from "@/queries/leaderboards/hooks/player/useGetPlayerLeaderboard";
import { useGetGoalsLeaderboard } from "@/queries/leaderboards/hooks/goals/useGetGoalsLeaderboard";
import {
  CardsLeaderBoardPlayer,
  LeaderBoardPlayer,
} from "@/utils/types/playerInfo";
import { useGetAssistLeaderboard } from "@/queries/leaderboards/hooks/assists/useGetAssistsLeaderboard";
import { useGetCardsLeaderboard } from "@/queries/leaderboards/hooks/cards/useGetCardsLeaderboard";
import { WarningsComponent } from "@/components/layout/WarningsCard";
import { player, assists, cards, goals } from "@/utils/leaderboardRoutes";

const LeaderBoardsPage = () => {
  const [expandPlayer, setExpandPlayer] = useState(false);
  const [expandGoals, setExpandGoals] = useState(false);
  const [expandAssists, setExpandAssists] = useState(false);
  const [expandCards, setExpandCards] = useState(false);

  const { data: playerLeaderboard, isLoading: playerLeaderboardLoading } =
    useGetPlayerLeaderboard();

  const { data: goalsLeaderboard, isLoading: goalsLeaderboardLoading } =
    useGetGoalsLeaderboard();

  const { data: assistsLeaderboard, isLoading: assistsLeaderboardLoading } =
    useGetAssistLeaderboard();

  const { data: cardsLeaderboard, isLoading: cardsLeaderboardLoading } =
    useGetCardsLeaderboard();

  return (
    <div className={styles.cards}>
      <CardComponent
        leaderboard={playerLeaderboard as LeaderBoardPlayer[]}
        isLoading={playerLeaderboardLoading}
        title={player.title}
        route={player.route}
        isExpanded={expandPlayer}
        setIsExpanded={setExpandPlayer}
      />
      <CardComponent
        leaderboard={goalsLeaderboard as LeaderBoardPlayer[]}
        isLoading={goalsLeaderboardLoading}
        title={goals.title}
        route={goals.route}
        isExpanded={expandGoals}
        setIsExpanded={setExpandGoals}
      />
      <CardComponent
        leaderboard={assistsLeaderboard as LeaderBoardPlayer[]}
        isLoading={assistsLeaderboardLoading}
        title={assists.title}
        route={assists.route}
        isExpanded={expandAssists}
        setIsExpanded={setExpandAssists}
      />
      <WarningsComponent
        leaderboard={cardsLeaderboard as CardsLeaderBoardPlayer[]}
        isLoading={cardsLeaderboardLoading}
        title={cards.title}
        route={cards.route}
        isExpanded={expandCards}
        setIsExpanded={setExpandCards}
      />
    </div>
  );
};

export default LeaderBoardsPage;

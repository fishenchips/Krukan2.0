import { CardComponent } from "@/components/layout/Card";
import { Loading } from "@/components/layout/Loading";
import { useGetPlayerLeaderboard } from "@/queries/leaderboards/player-leaderboard/hooks/useGetPlayerLeaderboard";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";

const LeaderBoardsPage = () => {
  const { data: playerLeaderboard, isLoading: playerLeaderboardLoading } =
    useGetPlayerLeaderboard();

  if (playerLeaderboardLoading) return <Loading />;

  return (
    <CardComponent leaderboard={playerLeaderboard as LeaderBoardPlayer[]} />
  );
};

export default LeaderBoardsPage;

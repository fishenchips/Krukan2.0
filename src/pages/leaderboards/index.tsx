import { CardComponent } from "@/components/layout/Card";
import { Loading } from "@/components/layout/Loading";
import { useGetPlayerLeaderboard } from "@/queries/leaderboards/hooks/player/useGetPlayerLeaderboard";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";

const LeaderBoardsPage = () => {
  const { data: playerLeaderboard, isLoading: playerLeaderboardLoading } =
    useGetPlayerLeaderboard();

  return (
    <>
      <CardComponent
        leaderboard={playerLeaderboard as LeaderBoardPlayer[]}
        isLoading={playerLeaderboardLoading}
        title={player.title}
        route={player.route}
      />
    </>
  );
};

export default LeaderBoardsPage;

const player = {
  title: "Pläääyerr",
  route: `leaderboards/edit/player`,
};

import { LeaderBoardPlayer } from "@/utils/types/playerInfo";

export const updatePlayerLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch("/api/leaderboards/player", {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

import { LeaderBoardPlayer } from "@/utils/types/playerInfo";

export const getPlayerLeaderboard = async () =>
  (await fetch("/api/leaderboards/player")).json();

export const updatePlayerLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch("/api/leaderboards/player/update", {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

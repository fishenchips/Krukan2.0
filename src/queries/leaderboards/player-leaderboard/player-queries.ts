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

export const getGoalsLeaderboard = async () =>
  (await fetch("/api/leaderboards/goals")).json();

export const updateGoalsLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch("/api/leaderboards/goals/update", {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

export const getAssistsLeaderboard = async () =>
  (await fetch("/api/leaderboards/assists")).json();

export const updateAssistsLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch("/api/leaderboards/assists/update", {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

export const getCardsLeaderboard = async () =>
  (await fetch("/api/leaderboards/cards")).json();

export const updateCardsLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch("/api/leaderboards/cards/update", {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

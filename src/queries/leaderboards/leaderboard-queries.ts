import {
  CardsLeaderBoardPlayer,
  LeaderBoardPlayer,
} from "@/utils/types/playerInfo";

const leaderboardUrl = "/api/leaderboards";

export const getPlayerLeaderboard = async () =>
  (await fetch(`${leaderboardUrl}/player`)).json();

export const updatePlayerLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch(`${leaderboardUrl}/player/update`, {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

export const getGoalsLeaderboard = async () =>
  (await fetch(`${leaderboardUrl}/goals`)).json();

export const updateGoalsLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch(`${leaderboardUrl}/goals/update`, {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

export const getAssistsLeaderboard = async () =>
  (await fetch(`${leaderboardUrl}/assists`)).json();

export const updateAssistsLeaderboard = async (
  players: Array<LeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch(`${leaderboardUrl}/assists/update`, {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

export const getCardsLeaderboard = async () =>
  (await fetch(`${leaderboardUrl}/cards`)).json();

export const updateCardsLeaderboard = async (
  players: Array<CardsLeaderBoardPlayer>
): Promise<void> => {
  const request = await fetch(`${leaderboardUrl}/cards/update`, {
    method: "PATCH",
    body: JSON.stringify(players),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

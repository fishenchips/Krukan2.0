import {
  Match,
  ScheduledMatch,
  SquadPlayer,
  UpdatedMatch,
} from "@/utils/types/match";

export const createMatch = async (enteredMatchData: Match): Promise<void> => {
  const response = await fetch("/api/admin/post-match", {
    method: "POST",
    body: JSON.stringify(enteredMatchData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const attendMatchById = async (
  playerData: SquadPlayer,
  matchId: string
): Promise<void> => {
  const response = await fetch(`/api/matches/attend-match/${matchId}`, {
    method: "PATCH",
    body: JSON.stringify({ playerData, matchId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const unattendMatchById = async (
  playerData: SquadPlayer,
  matchId: string
): Promise<void> => {
  const response = await fetch(`/api/matches/unattend-match/${matchId}`, {
    method: "PATCH",
    body: JSON.stringify({ playerData, matchId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getMatches = async (): Promise<Array<ScheduledMatch>> => {
  const response = await fetch("/api/matches/get-matches");

  return response.json();
};

export const getMatchById = async (id: string): Promise<ScheduledMatch> => {
  const response = await fetch(`/api/matches/get-match/${id}`);

  return response.json();
};

export const updateMatch = async (matchData: UpdatedMatch): Promise<void> => {
  await fetch(`/api/matches/edit-match/${matchData._id}`, {
    method: "PATCH",
    body: JSON.stringify(matchData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getNextMatch = async (): Promise<ScheduledMatch> => {
  const response = await fetch("/api/matches/next-match");

  return response.json();
};

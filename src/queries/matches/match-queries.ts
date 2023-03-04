import { Match, ScheduledMatch } from "@/utils/types/match";
import { Player } from "@/utils/types/playerInfo";

export const createMatch = async (enteredMatchData: Match) => {
  const response = await fetch("/api/admin/post-match", {
    method: "POST",
    body: JSON.stringify(enteredMatchData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const attendMatchById = async (playerData: Player, matchId: string) => {
  const response = await fetch(`/api/matches/attend-match/${matchId}`, {
    method: "PATCH",
    body: JSON.stringify({ playerData, matchId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const getMatches = async (): Promise<Array<ScheduledMatch>> => {
  const response = await fetch("/api/matches/get-matches");

  return response.json();
};

export const getMatchById = async (id: string): Promise<ScheduledMatch> => {
  const response = await fetch(`/api/matches/get-match/${id}`);

  return response.json();
};

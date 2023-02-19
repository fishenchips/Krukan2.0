import { Player } from "@/utils/types/playerInfo";
import type { Match } from "./types";

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

export const attendMatchById = async (player: Player, match: Match) => {
  const response = await fetch(`/api/matches/attend-match/${match._id}`, {
    method: "PATCH",
    body: JSON.stringify(player),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

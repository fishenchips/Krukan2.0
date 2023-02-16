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

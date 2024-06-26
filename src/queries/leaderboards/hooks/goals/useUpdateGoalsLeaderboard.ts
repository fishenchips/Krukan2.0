import { LeaderBoardPlayer } from "@/utils/types/playerInfo";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { updateGoalsLeaderboard } from "../../leaderboard-queries";

export const useUpdateGoalsLeaderboard = (
  players: Array<LeaderBoardPlayer>,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => updateGoalsLeaderboard(players),
    ...options,
  });

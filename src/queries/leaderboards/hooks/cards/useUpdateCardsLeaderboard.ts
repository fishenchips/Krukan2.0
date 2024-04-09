import { LeaderBoardPlayer } from "@/utils/types/playerInfo";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { updateCardsLeaderboard } from "../../leaderboard-queries";

export const useUpdatePlayerLeaderboard = (
  players: Array<LeaderBoardPlayer>,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => updateCardsLeaderboard(players),
    ...options,
  });

import { LeaderBoardPlayer } from "@/utils/types/playerInfo";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { updateAssistsLeaderboard } from "../../leaderboard-queries";

export const useUpdatePlayerLeaderboard = (
  players: Array<LeaderBoardPlayer>,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => updateAssistsLeaderboard(players),
    ...options,
  });

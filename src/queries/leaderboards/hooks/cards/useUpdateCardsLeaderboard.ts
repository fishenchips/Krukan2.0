import {
  CardsLeaderBoardPlayer,
  LeaderBoardPlayer,
} from "@/utils/types/playerInfo";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { updateCardsLeaderboard } from "../../leaderboard-queries";

export const useUpdateCardsLeaderboard = (
  players: Array<CardsLeaderBoardPlayer>,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => updateCardsLeaderboard(players),
    ...options,
  });

import { Player } from "@/utils/types/playerInfo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { attendMatchById } from "../match-queries";

export const useAddPlayerToRoster = (
  player: Player,
  matchId: string,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => attendMatchById(player, matchId),
    ...options,
  });

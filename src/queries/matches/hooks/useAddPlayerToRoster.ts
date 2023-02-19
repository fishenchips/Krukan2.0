import { Player } from "@/utils/types/playerInfo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { attendMatchById } from "../match-queries";
import { Match } from "../types";

export const useAddPlayerToRoster = (
  player: Player,
  match: Match,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => attendMatchById(player, match),
    ...options,
  });

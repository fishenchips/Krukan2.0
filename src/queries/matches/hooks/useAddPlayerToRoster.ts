import { SquadPlayer } from "@/utils/types/match";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { attendMatchById } from "../match-queries";

export const useAddPlayerToRoster = (
  player: SquadPlayer,
  matchId: string,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => attendMatchById(player, matchId),
    ...options,
  });

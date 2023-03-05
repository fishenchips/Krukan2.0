import { SquadPlayer } from "@/utils/types/match";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { unattendMatchById } from "../match-queries";

export const useRemovePlayerFromRoster = (
  player: SquadPlayer,
  matchId: string,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => unattendMatchById(player, matchId),
    ...options,
  });

import { Match } from "@/utils/types/match";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { updateMatch } from "../match-queries";

export const useUpdateMatchById = (
  match: Match,
  matchId: string,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => updateMatch(matchId, match),
    ...options,
  });

import { UpdatedMatch } from "@/utils/types/match";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { updateMatch } from "../match-queries";

export const useUpdateMatchById = (
  matchData: UpdatedMatch,
  options?: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => updateMatch(matchData),
    ...options,
  });

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { Match } from "@/utils/types/match";
import { createMatch } from "../match-queries";

export const useCreateMatch = (match: Match, options?: UseMutationOptions) =>
  useMutation({
    mutationFn: () => createMatch(match),
    ...options,
  });

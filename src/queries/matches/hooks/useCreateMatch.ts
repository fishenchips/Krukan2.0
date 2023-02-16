import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { Match } from "../types";
import { createMatch } from "../match-queries";

export const useCheckCreateBrawlExpression = (
  match: Match,
  options: UseMutationOptions
) =>
  useMutation({
    mutationFn: () => createMatch(match),
    ...options,
  });

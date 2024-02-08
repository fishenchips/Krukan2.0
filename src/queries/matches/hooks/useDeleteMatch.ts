import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { deleteMatch } from "../match-queries";

export const useDeleteMatch = (id: string, options?: UseMutationOptions) =>
  useMutation({
    mutationFn: () => deleteMatch(id),
    ...options,
  });

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getMatches } from "../match-queries";

export const matchesKey = "get-matches";

export const useGetMatches = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: [matchesKey],
    queryFn: () => getMatches(),
    ...options,
  });

import { ApiError } from "@/utils/types/error";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getMatches } from "../match-queries";
import { Match } from "../types";

export const matchesKey = "get-matches";

export const useGetMatches = (
  options?: UseQueryOptions<unknown, ApiError, Array<Match>>
) =>
  useQuery({
    queryKey: [matchesKey],
    queryFn: () => getMatches(),
    ...options,
  });

import { ApiError } from "@/utils/types/error";
import { ScheduledMatch } from "@/utils/types/match";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getMatches } from "../match-queries";

export const matchesKey = "get-matches";

export const useGetMatches = (
  options?: UseQueryOptions<unknown, ApiError, Array<ScheduledMatch>>
) =>
  useQuery({
    queryKey: [matchesKey],
    queryFn: () => getMatches(),
    ...options,
  });

import { ApiError } from "@/utils/types/error";
import { ScheduledMatch } from "@/utils/types/match";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getAllMatches } from "../match-queries";

export const allMatchesKey = "get-all-matches";

export const useGetAllMatches = (
  options?: UseQueryOptions<unknown, ApiError, Array<ScheduledMatch>>
) =>
  useQuery({
    queryKey: [allMatchesKey],
    queryFn: () => getAllMatches(),
    ...options,
  });

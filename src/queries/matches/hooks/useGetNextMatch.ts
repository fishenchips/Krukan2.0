import { ApiError } from "@/utils/types/error";
import { ScheduledMatch } from "@/utils/types/match";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getNextMatch } from "../match-queries";

const nextMatchKey = "next-match";

export const useGetNextMatch = (
  options?: UseQueryOptions<unknown, ApiError, ScheduledMatch>
) =>
  useQuery({
    queryKey: [nextMatchKey],
    queryFn: () => getNextMatch(),
    ...options,
  });

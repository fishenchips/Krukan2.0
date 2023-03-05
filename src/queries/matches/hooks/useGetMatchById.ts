import { ApiError } from "@/utils/types/error";
import { ScheduledMatch } from "@/utils/types/match";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getMatchById } from "../match-queries";

export const matchKey = "single-match";

export const useGetMatchById = (
  id: string,
  options?: UseQueryOptions<unknown, ApiError, ScheduledMatch>
) =>
  useQuery({
    queryKey: [matchKey, id],
    queryFn: () => getMatchById(id),
    ...options,
  });

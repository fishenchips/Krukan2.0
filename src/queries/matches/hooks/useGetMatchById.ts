import { ApiError } from "@/utils/types/error";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getMatchById } from "../match-queries";
import { Match } from "../types";

export const matchKey = "single-match";

export const useGetMatchById = (
  _id: string,
  options?: UseQueryOptions<unknown, ApiError, Match>
) =>
  useQuery({
    queryKey: [matchKey, _id],
    queryFn: () => getMatchById(_id),
    ...options,
  });

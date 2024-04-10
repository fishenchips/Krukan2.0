import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getGoalsLeaderboard } from "../../leaderboard-queries";

export const goalsLeaderboardKey = "goals-leaderboard";

export const useGetGoalsLeaderboard = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: [goalsLeaderboardKey],
    queryFn: () => getGoalsLeaderboard(),
    ...options,
  });

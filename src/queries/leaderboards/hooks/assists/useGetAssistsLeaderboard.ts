import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getAssistsLeaderboard } from "../../leaderboard-queries";

export const assistLeaderboardKey = "assist-leaderboard";

export const useGetPlayerLeaderboard = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: [assistLeaderboardKey],
    queryFn: () => getAssistsLeaderboard(),
    ...options,
  });

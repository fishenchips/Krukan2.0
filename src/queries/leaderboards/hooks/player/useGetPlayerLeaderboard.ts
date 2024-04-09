import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getPlayerLeaderboard } from "../../leaderboard-queries";

export const playerLeaderboardKey = "player-leaderboard";

export const useGetPlayerLeaderboard = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: [playerLeaderboardKey],
    queryFn: () => getPlayerLeaderboard(),
    ...options,
  });

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getPlayerLeaderboard } from "../player-queries";

export const playerLeaderboardKey = "player-leaderboard";

export const useGetPlayerLeaderboard = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: [playerLeaderboardKey],
    queryFn: () => getPlayerLeaderboard(),
    ...options,
  });

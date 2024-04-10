import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getCardsLeaderboard } from "../../leaderboard-queries";

export const cardsLeaderboardKey = "cards-leaderboard";

export const useGetCardsLeaderboard = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: [cardsLeaderboardKey],
    queryFn: () => getCardsLeaderboard(),
    ...options,
  });

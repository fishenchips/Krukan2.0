import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getPlayers } from "../user-queries";
import { LeaderBoardPlayers, Player } from "@/utils/types/playerInfo";
import { ApiError } from "next/dist/server/api-utils";

export const playersKey = "players";

export const useGetAllPlayers = (
  options?: UseQueryOptions<unknown, ApiError, LeaderBoardPlayers>
) =>
  useQuery({
    queryKey: [playersKey],
    queryFn: () => getPlayers(),
    ...options,
  });

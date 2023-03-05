import { ApiError } from "@/utils/types/error";
import { Player } from "@/utils/types/playerInfo";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getLoggedInUser } from "../user-queries";

export const loggedInUserKey = "logged-in-user";

export const useGetLoggedInUser = (
  email: string,
  options?: UseQueryOptions<unknown, ApiError, Player>
) =>
  useQuery({
    queryKey: [loggedInUserKey, email],
    queryFn: () => getLoggedInUser(email),
    ...options,
  });

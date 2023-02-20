import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getLoggedInUser } from "../user-queries";

export const loggedInUserKey = "logged-in-user";

export const useGetLoggedInUser = (email: string, options?: UseQueryOptions) =>
  useQuery({
    queryKey: [loggedInUserKey],
    queryFn: () => getLoggedInUser(email),
    ...options,
  });

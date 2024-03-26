import { useAddPlayerToRoster } from "@/queries/matches/hooks/useAddPlayerToRoster";
import { matchKey } from "@/queries/matches/hooks/useGetMatchById";
import { useRemovePlayerFromRoster } from "@/queries/matches/hooks/useRemovePlayerFromRoster";
import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import { Roster, ScheduledMatch } from "@/utils/types/match";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQueryClient,
} from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import { Loading } from "../layout/Loading";
import { ApiError } from "@/utils/types/error";

interface Props {
  matchId: string;
  roster?: Roster;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ScheduledMatch, ApiError>>;
}

export const AttendMatch: React.FC<Props> = ({ matchId, roster, refetch }) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { data: loggedInUser, isLoading } = useGetLoggedInUser(
    session?.user?.email as string
  );

  const { mutate: attendGame } = useAddPlayerToRoster(
    {
      _id: loggedInUser?._id as string,
      email: loggedInUser?.email as string,
      info: {
        firstName: ((loggedInUser?.info.firstName
          ?.charAt(0)
          .toUpperCase() as string) +
          loggedInUser?.info.firstName?.slice(1)) as string,
        lastName: ((loggedInUser?.info.lastName
          ?.charAt(0)
          .toUpperCase() as string) +
          loggedInUser?.info.lastName?.slice(1)) as string,
        position: loggedInUser?.info.position,
      },
    },
    matchId,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([matchKey, matchId]);
        refetch();
      },
    }
  );

  const { mutate: removeFromGame } = useRemovePlayerFromRoster(
    {
      _id: loggedInUser?._id as string,
      email: loggedInUser?.email as string,
      info: {
        firstName: loggedInUser?.info.firstName,
        lastName: loggedInUser?.info.lastName,
        position: loggedInUser?.info.position,
      },
    },
    matchId,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([matchKey, matchId]);
        refetch();
      },
    }
  );

  const handleAttendMatch = () => {
    attendGame();
  };

  const handleUnattendMatch = () => {
    removeFromGame();
  };

  const alreadyAttending = roster?.some(
    (player) => player._id === loggedInUser?._id
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {alreadyAttending ? (
        <Button onClick={handleUnattendMatch}>Unattend match</Button>
      ) : (
        <Button onClick={handleAttendMatch}>I can play!</Button>
      )}
    </div>
  );
};

export const Button = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: #80051b;
  border-radius: 2rem;
  border: none;
`;

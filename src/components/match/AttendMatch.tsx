import { useAddPlayerToRoster } from "@/queries/matches/hooks/useAddPlayerToRoster";
import { matchKey } from "@/queries/matches/hooks/useGetMatchById";
import { useRemovePlayerFromRoster } from "@/queries/matches/hooks/useRemovePlayerFromRoster";
import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import { Roster } from "@/utils/types/match";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Loading } from "../layout/Loading";
import { Button } from "../layout/Button";

interface Props {
  matchId: string;
  roster?: Roster;
}

export const AttendMatch: React.FC<Props> = ({ matchId, roster }) => {
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
      onSuccess: () => queryClient.invalidateQueries([matchKey, matchId]),
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
      onSuccess: () => queryClient.invalidateQueries([matchKey, matchId]),
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
        <Button handleClick={handleUnattendMatch} text="Unattend match" />
      ) : (
        <Button handleClick={handleAttendMatch} text="I can play!" />
      )}
    </div>
  );
};

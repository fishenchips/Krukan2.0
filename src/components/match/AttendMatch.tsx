import { useAddPlayerToRoster } from "@/queries/matches/hooks/useAddPlayerToRoster";
import { matchKey } from "@/queries/matches/hooks/useGetMatchById";
import { useRemovePlayerFromRoster } from "@/queries/matches/hooks/useRemovePlayerFromRoster";
import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import { Roster } from "@/utils/types/match";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface Props {
  matchId: string;
  roster: Roster;
}

export const AttendMatch: React.FC<Props> = ({ matchId, roster }) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { data: loggedInUser } = useGetLoggedInUser(
    session?.user?.email as string
  );

  const { mutate: attendGame } = useAddPlayerToRoster(
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

  if (!loggedInUser) {
    return <p>Log in to attend match!</p>;
  }

  const handleAttendMatch = () => {
    attendGame();
  };

  const handleUnattendMatch = () => {
    removeFromGame();
  };

  const alreadyAttending = roster?.some(
    (player) => player._id === loggedInUser._id
  );

  return (
    <div>
      {alreadyAttending ? (
        <button onClick={handleUnattendMatch}>Unattend match</button>
      ) : (
        <button onClick={handleAttendMatch}>I can play!</button>
      )}
    </div>
  );
};

import { useAddPlayerToRoster } from "@/queries/matches/hooks/useAddPlayerToRoster";
import { matchKey } from "@/queries/matches/hooks/useGetMatchById";
import { Player } from "@/utils/types/playerInfo";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  matchId: string;
  loggedInUser: Player;
}

export const AttendMatch: React.FC<Props> = ({ matchId, loggedInUser }) => {
  const queryClient = useQueryClient();

  const { mutate } = useAddPlayerToRoster(loggedInUser, matchId, {
    onSuccess: () => queryClient.invalidateQueries([matchKey, matchId]),
  });

  const handleAttendMatch = () => {
    mutate();
    console.log({ loggedInUser }, matchId);
  };
  return (
    <div>
      <button onClick={handleAttendMatch}>I can play!</button>
    </div>
  );
};

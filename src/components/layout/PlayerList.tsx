import { useState } from "react";
import styles from "./PlayerList.module.css";

import { useGetAllPlayers } from "@/queries/users/hooks/useGetAllPlayers";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";
import { useUpdatePlayerLeaderboard } from "@/queries/leaderboards/hooks/player/useUpdatePlayerLeaderboard";
import { Button } from "../match/AttendMatch";
import {
  MdOutlineRemoveCircleOutline,
  MdOutlineAddCircleOutline,
} from "react-icons/md";
import {
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { playerLeaderboardKey } from "@/queries/leaderboards/hooks/player/useGetPlayerLeaderboard";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  mutation: (
    players: LeaderBoardPlayer[],
    options?: UseMutationOptions<unknown, unknown, void, unknown> | undefined
  ) => UseMutationResult<unknown, unknown, void, unknown>;
  key: string;
}

export const PlayerList: React.FC<Props> = ({ mutation, key }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { push } = useRouter();

  const [playersToAdd, setPlayersToAdd] = useState<Array<LeaderBoardPlayer>>(
    []
  );
  const { data: players, isLoading } = useGetAllPlayers();

  const { mutate } = mutation(playersToAdd, {
    onSuccess: () => {
      queryClient.invalidateQueries([key]);
      setPlayersToAdd([]);
      toast({
        title: "Players added",
        status: "success",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        status: "error",
      });
    },
  });

  if (isLoading) return <></>;

  const filteredPlayerList = players?.filter(
    (player: LeaderBoardPlayer) => player.info
  );

  const handleAddPlayer = (player: LeaderBoardPlayer) => {
    const existingPlayer = playersToAdd.find(({ _id }) => player._id === _id);
    if (existingPlayer) {
      existingPlayer.score++;
      setPlayersToAdd([...playersToAdd]);
      return;
    }
    setPlayersToAdd((prev) => [...prev, { ...player, score: +1 }]);
  };

  const handleRemovePlayer = (player: LeaderBoardPlayer) => {
    const existingPlayer = playersToAdd.find(({ _id }) => player._id === _id);
    if (existingPlayer?.score === 1) {
      setPlayersToAdd((prev) => prev.filter(({ _id }) => _id !== player._id));
      return;
    }
    if (existingPlayer && existingPlayer?.score > 1) {
      existingPlayer.score--;
      setPlayersToAdd([...playersToAdd]);
    }
  };

  const handleSubmitPlayers = (): void => {
    mutate();
    push("/leaderboards");
  };

  return (
    <div>
      <div className={styles.playerList}>
        {filteredPlayerList?.map((player) => (
          <div key={player._id} className={styles.player}>
            {player.score && (
              <div
                className={styles.button}
                onClick={() => handleRemovePlayer(player)}
              >
                <MdOutlineRemoveCircleOutline />
              </div>
            )}
            <div>
              {player.info.firstName} {player.info.lastName}
            </div>
            <div
              className={styles.button}
              onClick={() => handleAddPlayer(player)}
            >
              <MdOutlineAddCircleOutline />
            </div>
          </div>
        ))}
      </div>
      {playersToAdd.length > 0 && (
        <div>
          You are about to add these players (how many times):
          {playersToAdd.map((player) => (
            <div key={player._id} className={styles.playerToAdd}>
              <span
                className={styles.button}
                onClick={() => handleRemovePlayer(player)}
              >
                <MdOutlineRemoveCircleOutline />
              </span>
              <span>
                {player.info.firstName} {player.info.lastName} {player.score}
              </span>
              <span
                className={styles.button}
                onClick={() => handleAddPlayer(player)}
              >
                <MdOutlineAddCircleOutline />
              </span>
            </div>
          ))}
          <Button className={styles.button} onClick={handleSubmitPlayers}>
            Send
          </Button>
        </div>
      )}
    </div>
  );
};

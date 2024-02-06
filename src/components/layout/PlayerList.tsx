import { useState } from "react";
import styles from "./PlayerList.module.css";

import { useGetAllPlayers } from "@/queries/users/hooks/useGetAllPlayers";
import { LeaderBoardPlayer } from "@/utils/types/playerInfo";
import { useUpdatePlayerLeaderboard } from "@/queries/leaderboards/player-leaderboard/hooks/useUpdatePlayerLeaderboard";
import { updatePlayerLeaderboard } from "@/queries/leaderboards/player-leaderboard/player-queries";

export const PlayerList = () => {
  const [playersToAdd, setPlayersToAdd] = useState<Array<LeaderBoardPlayer>>(
    []
  );
  const { data: players, isLoading } = useGetAllPlayers();

  const { mutate } = useUpdatePlayerLeaderboard(playersToAdd);

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
  };

  return (
    <div>
      {filteredPlayerList?.map((player) => (
        <div key={player._id} className={styles.player}>
          <div onClick={() => handleRemovePlayer(player)}>-</div>
          <div>
            {player.info.firstName} {player.info.lastName}
          </div>
          <div onClick={() => handleAddPlayer(player)}>+</div>
        </div>
      ))}
      {playersToAdd.length > 0 && (
        <div>
          You are about to add these players:
          {playersToAdd.map((player) => (
            <p key={player._id}>
              {player.info.firstName} {player.score}
            </p>
          ))}
          <button onClick={handleSubmitPlayers}>Send</button>
        </div>
      )}
    </div>
  );
};

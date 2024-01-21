import {
  LeaderBoardPlayers,
  Player,
  PlayerInfo,
} from "@/utils/types/playerInfo";

export const getLoggedInUser = async (email: string): Promise<Player> => {
  const response = await fetch(`/api/user/get-user/${email}`);

  return response.json();
};

export const addUserInfo = async (enteredUserData: PlayerInfo) => {
  const response = await fetch("/api/user/add-user-info", {
    method: "PATCH",
    body: JSON.stringify(enteredUserData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const getPlayers = async (): Promise<LeaderBoardPlayers> =>
  (await fetch(`/api/players`)).json();

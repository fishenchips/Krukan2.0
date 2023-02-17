import { PlayerInfo } from "@/utils/types/playerInfo";

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

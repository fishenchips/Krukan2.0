import { PlayerInfo } from "@/utils/types/playerInfo";

export const getLoggedInUser = async (email: string) => {
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

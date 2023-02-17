import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { addUserInfo } from "../user-queries";
import { PlayerInfo } from "@/utils/types/playerInfo";

export const useAddUserInfo = (
  enteredPlayerInfo: PlayerInfo,
  options?: UseMutationOptions
) => {
  useMutation({
    mutationFn: () => addUserInfo(enteredPlayerInfo),
    ...options,
  });
};

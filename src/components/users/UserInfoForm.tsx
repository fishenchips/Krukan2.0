import { useAddUserInfo } from "@/queries/users/hooks/useAddUserInfo";
import { positions } from "@/utils/positions";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { loggedInUserKey } from "@/queries/users/hooks/useGetLoggedInUser";
import { useForm, SubmitHandler } from "react-hook-form";
import { PlayerInfo } from "@/utils/types/playerInfo";
import { useToast } from "@chakra-ui/react";

export const UserInfoForm = () => {
  const session = useSession();
  const queryClient = useQueryClient();
  const toast = useToast();

  const { register, handleSubmit, watch } = useForm<PlayerInfo>();

  const userData = {
    firstName: watch("firstName"),
    lastName: watch("lastName"),
    position: watch("position"),
  };

  const { mutate } = useAddUserInfo(userData, {
    onError: () => {
      toast({
        status: "error",
        title: "Error updating user info.",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        loggedInUserKey,
        session.data?.user?.email,
      ]);
      toast({
        status: "success",
        title: "User info updated.",
      });
    },
  });

  const onSubmit: SubmitHandler<PlayerInfo> = () => {
    mutate();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input type="text" {...register("firstName", { required: true })} />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input type="text" {...register("lastName", { required: true })} />
      </div>
      <div>
        <label htmlFor="position">Preferred position</label>
        <select defaultValue="" {...register("position", { required: true })}>
          <option value="" disabled>
            --select your position--
          </option>
          {positions.map((position) => (
            <option value={position} key={position}>
              {position}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

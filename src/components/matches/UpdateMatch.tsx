import { Switch, useToast } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { matchesKey } from "@/queries/matches/hooks/useGetMatches";
import { UpdatedMatch } from "@/utils/types/match";
import { useUpdateMatchById } from "@/queries/matches/hooks/useUpdateMatchById";
import { useRouter } from "next/router";

interface Props {
  _id: string;
  home: boolean;
  arena: string;
  date: string;
  gameType: string;
  opposition: string;
}

export const UpdateMatch: React.FC<Props> = ({
  _id,
  home,
  arena,
  date,
  gameType,
  opposition,
}) => {
  const { register, handleSubmit, watch } = useForm<UpdatedMatch>({
    defaultValues: {
      _id,
      home,
      arena,
      opposition,
      date,
      gameType,
    },
  });

  const queryClient = useQueryClient();

  const toast = useToast();

  const { push } = useRouter();

  const { mutate } = useUpdateMatchById(
    {
      _id,
      home: watch("home"),
      arena: watch("arena"),
      opposition: watch("opposition"),
      date: watch("date"),
      gameType: watch("gameType"),
    },
    {
      onError: () => {
        toast({
          status: "error",
          title: "Error",
          description: "Couldn't update match. Please try again.",
          isClosable: true,
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries([matchesKey]);
        toast({
          status: "success",
          title: "Match updated",
          isClosable: true,
        });
        push("/admin");
      },
    }
  );

  const onSubmit: SubmitHandler<UpdatedMatch> = () => {
    mutate();
  };

  return (
    <>
      <h2>For now you need to fill in date again no matter what!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="isHomeMatch">Home match (true/false)</label>
          <Switch
            id="isHomeMatch"
            size="lg"
            colorScheme="red"
            defaultChecked
            {...register("home")}
          />
        </div>
        <div>
          <label htmlFor="arena">Arena</label>
          <input
            id="arena"
            type="text"
            {...register("arena", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="opposition">Opposition</label>
          <input
            id="opposition"
            type="text"
            {...register("opposition", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="datetime-local"
            {...register("date", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="type">Game type</label>
          <select
            defaultValue={""}
            id="type"
            {...register("gameType", { required: true })}
          >
            <option disabled value="">
              --choose game type--
            </option>
            <option value="friendly">friendly</option>
            <option value="league">league</option>
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

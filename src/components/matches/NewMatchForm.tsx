import { Switch, useToast } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { useCreateMatch } from "@/queries/matches/hooks/useCreateMatch";
import { matchesKey } from "@/queries/matches/hooks/useGetMatches";
import { Match } from "@/utils/types/match";

export const NewMatchForm = () => {
  const { register, handleSubmit, watch, reset } = useForm<Match>({
    defaultValues: {
      home: true,
      arena: "",
      opposition: "",
      date: "",
      gameType: "",
    },
  });

  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutate } = useCreateMatch(
    {
      home: watch("home"),
      arena: watch("arena"),
      opposition: watch("opposition"),
      date: dayjs(watch("date")).format("dddd, D/M HH:mm"),
      gameType: watch("gameType"),
    },
    {
      onError: () => {
        toast({
          status: "error",
          title: "Error",
          description: "Couldn't create match. Please try again.",
          isClosable: true,
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries([matchesKey]);
        toast({
          status: "success",
          title: "Match created",
          isClosable: true,
        });
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<Match> = () => {
    mutate();
  };

  return (
    <>
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
        <button type="submit">Create match</button>
      </form>
    </>
  );
};

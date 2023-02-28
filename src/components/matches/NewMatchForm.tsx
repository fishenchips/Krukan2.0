import { Switch, useToast } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useCreateMatch } from "@/queries/matches/hooks/useCreateMatch";
import { Match } from "@/queries/matches/types";

export const NewMatchForm = () => {
  const { register, handleSubmit, watch, reset } = useForm<Match>({
    defaultValues: {
      home: false,
      arena: "",
      opposition: "",
      date: "",
      time: "",
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
      date: watch("date"),
      time: watch("time"),
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
        // queryClient.invalidateQueries([get-matches]);   INVALIDATE GET ALL MATCHES QUERY
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
            isRequired
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
            type="date"
            {...register("date", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            {...register("time", { required: true })}
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

import { Switch } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCreateMatch } from "@/queries/matches/hooks/useCreateMatch";
import { Match } from "@/queries/matches/types";

export const NewMatchForm = () => {
  const { register, handleSubmit, watch } = useForm<Match>();

  const { mutate } = useCreateMatch({
    home: watch("home"),
    arena: watch("arena"),
    opposition: watch("opposition"),
    date: watch("date"),
    time: watch("time"),
    gameType: watch("gameType"),
  });

  const onSubmit: SubmitHandler<Match> = () => mutate();

  /*  const handleCreateMatch = () => {
    mutate();
  }; */

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
          <input id="arena" type="text" {...register("arena")} />
        </div>
        <div>
          <label htmlFor="opposition">Opposition</label>
          <input id="opposition" type="text" {...register("opposition")} />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" {...register("date")} />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input id="time" type="time" {...register("time")} />
        </div>
        <div>
          <label htmlFor="type">Game type</label>
          <select defaultValue={""} id="type" {...register("gameType")}>
            <option disabled value="">
              --choose game type--
            </option>
            <option value="friendly">friendly</option>
            <option value="league">league</option>
          </select>
        </div>
        <button type="submit">POST</button>
      </form>
    </>
  );
};

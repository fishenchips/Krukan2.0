import { Switch } from "@chakra-ui/react";

import { useCreateMatch } from "@/queries/matches/hooks/useCreateMatch";

export const NewMatchForm = () => {
  const { mutate } = useCreateMatch({
    home: true,
    arena: "zinken",
    date: "23-03-16",
    time: "16:00",
    gameType: "friendly",
    opposition: "Stureby",
  });

  const handleCreateMatch = () => {
    mutate();
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="isHomeMatch">Home match (true/false)</label>
          <Switch id="isHomeMatch" size="lg" colorScheme="red" isRequired />
        </div>
        <div>
          <label htmlFor="arena">Arena</label>
          <input id="arena" type="text" />
        </div>
        <div>
          <label htmlFor="opposition">Opposition</label>
          <input id="opposition" type="text" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input id="time" type="time" />
        </div>
        <div>
          <label htmlFor="type">Game type</label>
          <select defaultValue={""} id="type">
            <option disabled value="">
              --choose game type--
            </option>
            <option value="friendly">friendly</option>
            <option value="league match">league</option>
          </select>
        </div>
      </form>

      <button onClick={handleCreateMatch}>POST</button>
    </>
  );
};

import { useCreateMatch } from "@/queries/matches/hooks/useCreateMatch";

const CreateMatch = () => {
  const { mutate } = useCreateMatch({
    home: true,
    arena: "zinken",
    date: "23-03-16, 16:00",
    gameType: "friendly",
    opposition: "Stureby",
  });

  const handleCreateMatch = () => {
    mutate();
  };

  return <button onClick={handleCreateMatch}>POST</button>;
};

export default CreateMatch;

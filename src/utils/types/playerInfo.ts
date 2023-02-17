export type PlayerInfo = {
  firstName: string;
  lastName: string;
  position: Position;
};

type Position = "goal-keeper" | "defender" | "midfielder" | "striker";

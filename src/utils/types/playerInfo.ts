export type PlayerInfo = {
  firstName?: string;
  lastName?: string;
  position?: Position | string;
};

type Position = "goal-keeper" | "defender" | "midfielder" | "striker";

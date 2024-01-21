export type Player = {
  _id: string;
  email: string;
  emailVerified: string;
  info: PlayerInfo;
};

export type PlayerInfo = {
  firstName?: string;
  lastName?: string;
  position?: Position | string;
};

type Position = "goal-keeper" | "defender" | "midfielder" | "striker";

export interface LeaderBoardPlayer
  extends Omit<Player, "email" | "emailVerified"> {
  score: number;
}

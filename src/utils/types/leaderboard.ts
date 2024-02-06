import { Player } from "./playerInfo";

export type Leaderboard = {
  type: string;
  name: string;
  players: Array<LeaderBoardPlayer>;
};

type LeaderBoardPlayer = {
  player: Player;
  score: number;
};

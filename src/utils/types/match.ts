import { Player } from "./playerInfo";

export type Match = {
  home: boolean;
  arena: string;
  date: string;
  time: string;
  gameType: string;
  opposition: string;
};

export interface SquadPlayer extends Omit<Player, "emailVerified"> {
  attending: boolean;
}

export interface ScheduledMatch extends Match {
  _id: string;
  roster: Array<SquadPlayer>;
}

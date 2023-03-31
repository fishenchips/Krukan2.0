import { Player } from "./playerInfo";

export type Match = {
  home: boolean;
  arena: string;
  date: string;
  gameType: string;
  opposition: string;
};

export interface SquadPlayer extends Omit<Player, "emailVerified"> {}

export interface ScheduledMatch extends Match {
  _id: string;
  roster?: Roster;
}

export type Roster = Array<SquadPlayer>;

import { Player } from "./playerInfo";

export type Match = {
  _id?: string;
  home: boolean;
  arena: string;
  date: string;
  gameType: string;
  opposition: string;
  roster?: Array<SquadPlayer>;
};

export interface SquadPlayer extends Player {
  attending: boolean;
}

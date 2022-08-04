import { IChampionInMatch } from "./match";

interface IFellowPlayer {
  champion: IChampionInMatch;
  summonerId: string;
  summonerName: string;
}

interface ITeam {
  players: Array<IFellowPlayer>;
  teamId: number;
}

export interface IMatchDetail {
  gameId: string;
  teams: Array<ITeam>;
}

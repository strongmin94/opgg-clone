export interface IMostChampion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface IChampionWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface IMostInfoResponse {
  champions: Array<IMostChampion>;
  recentWinRate: Array<IChampionWinRate>;
}

export const emptyMostInfoResponse: IMostInfoResponse = {
  champions: [],
  recentWinRate: [],
};

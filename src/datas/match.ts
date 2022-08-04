import { IMatchDetail } from "./matchDetail";

export const enum MATCH_TYPE {
  ALL = "전체",
  NORMAL = "일반",
  SOLORANKED = "솔랭",
  FLEXRANKED = "자유 5:5 랭크",
  ARAM = "무작위 총력전",
  BOT = "AI 상대 대전",
  CLASH = "격전",
  EVENT = "이벤트 게임",
}

export const enum POSITION_TYPE {
  TOP = "TOP",
  JNG = "JNG",
  MID = "MID",
  ADC = "ADC",
  SUP = "SUP",
}

export interface IChampion {
  imageUrl: string;
  assists: number;
  deaths: number;
  games: number;
  id: number;
  key: string;
  kills: number;
  losses: number;
  name: string;
  wins: number;
}

export interface IChampionInMatch {
  imageUrl: string;
  level: number;
}

export interface ImageObj {
  imageUrl: string;
}

interface IMapInfo {
  imageUrl: string;
  mapId: number;
}

export interface IGeneral {
  assist: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
  death: number;
  goldEarned: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
  totalDamageDealtToChampions: number;
}

interface IWard {
  sightWardsBought: number;
  visionWardsBought: number;
}

interface IGameInfoStats {
  general: IGeneral;
  ward: IWard;
}

export interface IGameInfo {
  champion: IChampionInMatch;
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: Array<ImageObj>;
  mapInfo: IMapInfo;
  mmr: number;
  needRenew: boolean;
  peak: Array<string>;
  spells: Array<ImageObj>;
  stats: IGameInfoStats;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
  gameDetail?: IMatchDetail;
}

export interface IPositions {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

export interface ISummary {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
}

const emptySummary: ISummary = {
  assists: 0,
  deaths: 0,
  kills: 0,
  losses: 0,
  wins: 0,
};

export interface IMatchesResponse {
  champions: Array<IChampion>;
  games: Array<IGameInfo>;
  positions: Array<IPositions>;
  summary: ISummary;
}

export const emptyMatchesResponse: IMatchesResponse = {
  champions: [],
  games: [],
  positions: [],
  summary: emptySummary,
};

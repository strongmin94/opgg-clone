export interface ILeague {
  hasResults: boolean;
  losses: number;
  tierRank: ITierRank;
  wins: number;
}

export interface ITierRank {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

const emptyTierRank: ITierRank = {
  division: "",
  imageUrl: "",
  lp: 0,
  name: "",
  season: 0,
  shortString: "",
  string: "",
  tier: "",
  tierDivision: "",
  tierRankPoint: 0,
};

export interface ISummoner {
  ladderRank: {
    rank: number;
    rankPercentOfTop: number;
  };
  leagues: Array<ILeague>;
  level: number;
  name: string;
  previousTiers: Array<ITierRank>;
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export const emptySummoner: ISummoner = {
  ladderRank: {
    rank: 0,
    rankPercentOfTop: 0,
  },
  leagues: [],
  level: 0,
  name: "",
  previousTiers: [],
  profileBackgroundImageUrl: "",
  profileBorderImageUrl: "",
  profileImageUrl: "",
  url: "",
};

export interface ISummonerResponse {
  summoner: ISummoner;
}

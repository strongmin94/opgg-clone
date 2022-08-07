import { useMemo, useState } from "react";
import { IChampionWinRate, IMostChampion, IMostInfoResponse } from "../../../../../datas/mostInfo";
import { ITabItem } from "../../../../../datas/tabItem";

interface IMostInfoTabItem extends ITabItem {
  value: "champions" | "recentWinRate";
}

export const tabList: Array<IMostInfoTabItem> = [
  {
    label: "챔피언 승률",
    value: "champions",
  },
  {
    label: "7일간 랭크 승률",
    value: "recentWinRate",
  },
];

interface IProps {
  mostInfo: IMostInfoResponse;
}

const useMostInfo = ({ mostInfo: { champions, recentWinRate } }: IProps) => {
  const [selectedTab, setSelectedTab] = useState<IMostInfoTabItem>(tabList[0]);
  const championList = useMemo<Array<IMostChampion>>(() => {
    return [...champions].sort((a, b) => b.games - a.games);
  }, []);
  const recentWinRateList = useMemo<Array<IChampionWinRate>>(() => {
    return [...recentWinRate].sort((a, b) => b.wins + b.losses - (a.wins + a.losses));
  }, []);

  return {
    selectedTab,
    setSelectedTab,
    championList,
    recentWinRateList,
  };
};

export default useMostInfo;

import { useState } from "react";
import { ITabItem } from "../../datas/tabItem";

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

const useMostInfo = () => {
  const [selectedTab, setSelectedTab] = useState<IMostInfoTabItem>(tabList[0]);

  return {
    selectedTab,
    setSelectedTab,
  };
};

export default useMostInfo;

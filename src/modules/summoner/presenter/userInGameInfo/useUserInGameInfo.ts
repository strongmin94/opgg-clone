import { useEffect, useMemo, useState } from "react";
import { IGameInfo, MATCH_TYPE } from "../../../../datas/match";
import { ITabItem } from "../../../../datas/tabItem";

export interface IMatchTabItem extends ITabItem {
  value: MATCH_TYPE;
}

interface IProps {
  games: Array<IGameInfo>;
}

const useUserInGameInfo = ({ games }: IProps) => {
  const matchTabList = useMemo<Array<IMatchTabItem>>(() => {
    return [
      {
        label: "전체",
        value: MATCH_TYPE.ALL,
      },
      {
        label: "솔로게임",
        value: MATCH_TYPE.SOLORANKED,
      },
      {
        label: "자유랭크",
        value: MATCH_TYPE.FLEXRANKED,
      },
    ];
  }, []);
  const [selectedTab, setSelectedTab] = useState<IMatchTabItem>(matchTabList[0]);
  const [gameList, setGameList] = useState<Array<IGameInfo>>(games);

  useEffect(() => {
    if (selectedTab.value === MATCH_TYPE.ALL) {
      setGameList(games);
    } else {
      setGameList(games.filter((item) => item.gameType === selectedTab.value));
    }
  }, [selectedTab]);

  return {
    matchTabList,
    selectedTab,
    setSelectedTab,
    gameList,
  };
};

export default useUserInGameInfo;

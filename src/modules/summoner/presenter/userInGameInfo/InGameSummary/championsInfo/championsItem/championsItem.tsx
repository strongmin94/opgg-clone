import { useMemo } from "react";
import { StyleKDA, StyleWinRate } from "../../../../../../../styles/globalStyle";
import { IChampion } from "../../../../../../../datas/match";
import useKda from "../../../../../../../hooks/useKda";
import {
  StyleChampionName,
  StyleChampionRecord,
  StyleContaier,
  StyleDescriptionWrapper,
  StyleDivision,
  StyleKDAInfo,
  StyleThumbnail,
} from "./championsItem.styled";

interface IProps {
  item: IChampion;
}

const ChampionsItem = ({ item }: IProps) => {
  const winRate = useMemo<number>(() => {
    const result = Math.round((item.wins / item.games) * 100);
    return !isNaN(result) ? result : 0;
  }, [item]);
  const { kda } = useKda({
    kills: item.kills,
    deaths: item.deaths,
    assists: item.assists,
    totalGameCount: item.games,
  });

  return (
    <StyleContaier>
      <StyleThumbnail src={item.imageUrl} />
      <StyleDescriptionWrapper>
        <StyleChampionName>{item.name}</StyleChampionName>
        <p>
          <StyleChampionRecord>
            <StyleWinRate winRate={winRate}>{`${winRate}%`}</StyleWinRate>
            {` (${item.wins}승 ${item.losses}패)`}
          </StyleChampionRecord>
          <StyleDivision />
          <StyleKDAInfo>
            <StyleKDA kda={kda}>{`${kda} 평점`}</StyleKDA>
          </StyleKDAInfo>
        </p>
      </StyleDescriptionWrapper>
    </StyleContaier>
  );
};

export default ChampionsItem;

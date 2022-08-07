import { useMemo } from "react";
import { StyleKDA, StyleWinRate } from "../../../../../../styles/globalStyle";
import { IMostChampion } from "../../../../../../datas/mostInfo";
import useKda from "../../../../../../hooks/useKda";
import {
  StyleBottomInfo,
  StyleChampionThumbnail,
  StyleContainer,
  StyleInfoItem,
  StyleInfoWrapper,
  StyleTopInfo,
} from "./mostInfoItem.styled";

interface IProps {
  item: IMostChampion;
}

const MostChampionInfo = ({ item }: IProps) => {
  const winRate = useMemo<number>(() => {
    const result = Math.round((item.wins / item.games || 1) * 100);
    return !isNaN(result) ? result : 0;
  }, [item]);
  const csPercent = useMemo<number>(() => {
    const result = parseFloat((item.cs / item.games || 1).toFixed(1));
    return !isNaN(result) ? result : 0;
  }, [item]);
  const { killAverage, deathAverage, assistAverage, kda } = useKda({
    kills: item.kills,
    deaths: item.deaths,
    assists: item.assists,
    totalGameCount: item.games,
  });

  return (
    <StyleContainer>
      <StyleChampionThumbnail src={item.imageUrl} alt={item.name} />
      <StyleInfoWrapper>
        <StyleTopInfo>
          <StyleInfoItem textAlign="start">{item.name}</StyleInfoItem>
          <StyleInfoItem textAlign="center">
            <StyleKDA kda={kda}>{`${kda.toFixed(2)}:1 평점`}</StyleKDA>
          </StyleInfoItem>
          <StyleInfoItem textAlign="end">
            <StyleWinRate winRate={winRate}>{`${winRate}%`}</StyleWinRate>
          </StyleInfoItem>
        </StyleTopInfo>
        <StyleBottomInfo>
          <StyleInfoItem textAlign="start">{`CS ${csPercent}`}</StyleInfoItem>
          <StyleInfoItem textAlign="center">{`${killAverage} / ${deathAverage} / ${assistAverage}`}</StyleInfoItem>
          <StyleInfoItem textAlign="end">{`${item.games}게임`}</StyleInfoItem>
        </StyleBottomInfo>
      </StyleInfoWrapper>
    </StyleContainer>
  );
};

export default MostChampionInfo;

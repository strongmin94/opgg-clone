import { useMemo } from "react";
import { StyleKDA, StyleWinRate } from "../../../../styles/globalStyle";
import { IMostChampion } from "../../../datas/mostInfo";
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
    return Math.round((item.wins / item.games) * 100);
  }, [item]);
  const csPercent = useMemo<number>(() => {
    return parseFloat((item.cs / item.games).toFixed(1));
  }, [item]);
  const killPercent = useMemo<number>(() => {
    return parseFloat((item.kills / item.games).toFixed(1));
  }, [item]);
  const deathPercent = useMemo<number>(() => {
    return parseFloat((item.deaths / item.games).toFixed(1));
  }, []);
  const assistPercent = useMemo<number>(() => {
    return parseFloat((item.assists / item.games).toFixed(1));
  }, [item]);
  const kda = useMemo<number>(() => {
    return parseFloat(((killPercent + assistPercent) / deathPercent).toFixed(1));
  }, [killPercent, deathPercent, assistPercent]);

  return (
    <StyleContainer>
      <StyleChampionThumbnail src={item.imageUrl} alt={item.name} />
      <StyleInfoWrapper>
        <StyleTopInfo>
          <StyleInfoItem textAlign="start">{item.name}</StyleInfoItem>
          <StyleInfoItem textAlign="center">
            <StyleKDA kda={kda}>{`${kda}:1 평점`}</StyleKDA>
          </StyleInfoItem>
          <StyleInfoItem textAlign="end">
            <StyleWinRate winRate={winRate}>{`${winRate}%`}</StyleWinRate>
          </StyleInfoItem>
        </StyleTopInfo>
        <StyleBottomInfo>
          <StyleInfoItem textAlign="start">{`CS ${csPercent}`}</StyleInfoItem>
          <StyleInfoItem textAlign="center">{`${killPercent} / ${deathPercent} / ${assistPercent}`}</StyleInfoItem>
          <StyleInfoItem textAlign="end">{`${item.games}게임`}</StyleInfoItem>
        </StyleBottomInfo>
      </StyleInfoWrapper>
    </StyleContainer>
  );
};

export default MostChampionInfo;

import { useMemo } from "react";
import { StyleKDA, StyleWinRate } from "../../../../../styles/globalStyle";
import { IChampion } from "../../../../datas/match";
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
    return Math.round((item.wins / item.games) * 100);
  }, [item]);
  const killPercent = useMemo<number>(() => {
    return parseFloat((item.kills / item.games).toFixed(1));
  }, []);
  const deathPercent = useMemo<number>(() => {
    return parseFloat((item.deaths / item.games).toFixed(1));
  }, []);
  const assistPercent = useMemo<number>(() => {
    return parseFloat((item.assists / item.games).toFixed(1));
  }, []);
  const kda = useMemo<number>(() => {
    return parseFloat(((killPercent + assistPercent) / deathPercent).toFixed(1));
  }, [killPercent, deathPercent, assistPercent]);

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

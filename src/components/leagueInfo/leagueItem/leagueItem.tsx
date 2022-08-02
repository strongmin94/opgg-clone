import Image from "next/image";
import { useMemo } from "react";
import { ILeague } from "../../../datas/summoner";
import {
  StlyeLeagueType,
  StyleContainer,
  StyleGameCount,
  StyleInGameInfo,
  StyleLeagueInfoWrapper,
  StyleTierInfo,
  StyleWinPercent,
} from "./leagueItem.styled";

interface IProps {
  item: ILeague;
}

const LeagueItem = ({ item }: IProps) => {
  const totalMatchCount = useMemo<number>(() => {
    return item.wins + item.losses;
  }, []);
  const winPercent = useMemo<number>(() => {
    return Math.round((item.wins / totalMatchCount) * 100);
  }, [totalMatchCount]);
  const tierInfo = useMemo(() => {
    return `${item.tierRank.tier} ${item.tierRank.shortString.replace(/[^0-9]/g, "")}`;
  }, []);

  return (
    <StyleContainer>
      <Image src={item.tierRank.imageUrl} width={104} height={104} />
      <StyleLeagueInfoWrapper>
        <StlyeLeagueType>{item.tierRank.name}</StlyeLeagueType>
        <StyleGameCount>{`총 ${(item.wins + item.losses).toLocaleString()}게임`}</StyleGameCount>
        <StyleTierInfo>{tierInfo}</StyleTierInfo>
        <StyleInGameInfo>
          <span>{`${item.tierRank.lp} LP`}</span>
          &nbsp;/ {`${item.wins}승 ${item.losses}패`}
        </StyleInGameInfo>
        <StyleWinPercent>{`${winPercent}%`}</StyleWinPercent>
      </StyleLeagueInfoWrapper>
    </StyleContainer>
  );
};

export default LeagueItem;

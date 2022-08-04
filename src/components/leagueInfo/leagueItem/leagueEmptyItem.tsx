import Image from "next/image";
import { LEAGUE_TYPE } from "../../../datas/summoner";
import {
  StyleEmptyContainer,
  StyleEmptyLeagueInfoWrapper,
  StyleEmptyTitle,
  StyleEmptyUnlanked,
} from "./leagueItem.styled";

interface IProps {
  leagueType: LEAGUE_TYPE;
}

const LeagueEmptyItem = ({ leagueType }: IProps) => {
  return (
    <StyleEmptyContainer>
      <Image src={"/icons/unranked.png"} width={64} height={64} />
      <StyleEmptyLeagueInfoWrapper>
        <StyleEmptyTitle>{leagueType}</StyleEmptyTitle>
        <StyleEmptyUnlanked>Unranked</StyleEmptyUnlanked>
      </StyleEmptyLeagueInfoWrapper>
    </StyleEmptyContainer>
  );
};

export default LeagueEmptyItem;

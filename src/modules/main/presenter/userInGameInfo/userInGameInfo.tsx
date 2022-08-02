import InGameSummary from "../../../../components/InGameSummary/inGameSummary";
import LeagueInfo from "../../../../components/leagueInfo/leagueInfo";
import MostInfo from "../../../../components/mostInfo/mostInfo";
import Navigation from "../../../../components/navigation/navigation";
import { IMatchesResponse } from "../../../../datas/match";
import { IMostInfoResponse } from "../../../../datas/mostInfo";
import { ILeague } from "../../../../datas/summoner";
import {
  StyleContainer,
  StyleInGameSummaryWrapper,
  StyleLeftWrapper,
  StyleRightWrapper,
} from "./userInGameInfo.styled";
import useUserInGameInfo from "./useUserInGameInfo";

interface IProps {
  leagues: Array<ILeague>;
  mostInfo: IMostInfoResponse;
  matches: IMatchesResponse;
}

const UserInGameInfo = ({
  leagues,
  mostInfo,
  matches: { champions, games, positions, summary },
}: IProps) => {
  const { matchTabList, selectedTab, setSelectedTab } = useUserInGameInfo({ games });

  return (
    <StyleContainer>
      <StyleLeftWrapper>
        <LeagueInfo leagues={leagues} />
        <MostInfo mostInfo={mostInfo} />
      </StyleLeftWrapper>
      <StyleRightWrapper>
        <StyleInGameSummaryWrapper>
          <Navigation list={matchTabList} value={selectedTab} onChange={setSelectedTab} />
          <InGameSummary summary={summary} champions={champions} positions={positions} />
        </StyleInGameSummaryWrapper>
      </StyleRightWrapper>
    </StyleContainer>
  );
};

export default UserInGameInfo;

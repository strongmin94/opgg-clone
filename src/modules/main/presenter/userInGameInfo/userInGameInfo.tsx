import InGameSummary from "../../../../components/InGameSummary/inGameSummary";
import LeagueInfo from "../../../../components/leagueInfo/leagueInfo";
import MostInfo from "../../../../components/mostInfo/mostInfo";
import { IMostInfoResponse } from "../../../../interfaces/mostInfo";
import { ILeague } from "../../../../interfaces/summoner";
import { StyleContainer, StyleLeftWrapper, StyleRightWrapper } from "./userInGameInfo.styled";

interface IProps {
  leagues: Array<ILeague>;
  mostInfo: IMostInfoResponse;
}

const UserInGameInfo = ({ leagues, mostInfo }: IProps) => {
  return (
    <StyleContainer>
      <StyleLeftWrapper>
        <LeagueInfo leagues={leagues} />
        <MostInfo mostInfo={mostInfo} />
      </StyleLeftWrapper>
      <StyleRightWrapper>
        <InGameSummary />
      </StyleRightWrapper>
    </StyleContainer>
  );
};

export default UserInGameInfo;

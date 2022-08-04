import { IMatchesResponse } from "../../../datas/match";
import { IMostInfoResponse } from "../../../datas/mostInfo";
import { ISummoner } from "../../../datas/summoner";
import UserInGameInfo from "../presenter/userInGameInfo/userInGameInfo";
import UserSummary from "../presenter/userSummary/userSummary";
import { StyleContainer } from "./summonerContainer.styled";
import useSummonerContainer from "./useSummonerContainer";

interface IProps {
  summoner: ISummoner;
  mostInfo: IMostInfoResponse;
  matches: IMatchesResponse;
}

const SummonerContainer = ({ summoner, mostInfo, matches }: IProps) => {
  useSummonerContainer();

  return (
    <StyleContainer>
      <UserSummary summoner={summoner} />
      <UserInGameInfo leagues={summoner.leagues} mostInfo={mostInfo} matches={matches} />
    </StyleContainer>
  );
};

export default SummonerContainer;

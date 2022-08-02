import { IMostInfoResponse } from "../../../interfaces/mostInfo";
import { ISummoner } from "../../../interfaces/summoner";
import UserInGameInfo from "../presenter/userInGameInfo/userInGameInfo";
import UserSummary from "../presenter/userSummary/userSummary";
import { StyleContainer } from "./mainContainer.styled";

interface IProps {
  summoner: ISummoner;
  mostInfo: IMostInfoResponse;
}

const MainContainer = ({ summoner, mostInfo }: IProps) => {
  console.log(summoner.leagues);
  return (
    <StyleContainer>
      <UserSummary summoner={summoner} />
      <UserInGameInfo leagues={summoner.leagues} mostInfo={mostInfo} />
    </StyleContainer>
  );
};

export default MainContainer;

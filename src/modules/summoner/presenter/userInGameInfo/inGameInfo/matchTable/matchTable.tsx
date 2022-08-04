import { IMatchDetail } from "../../../../../../datas/matchDetail";
import {
  StyleChampionImage,
  StyleContainer,
  StyleSummonerName,
  StyleTeamItem,
  StyleTeamList,
  StyleTeamWrapper,
} from "./matchTable.styled";

interface IProps {
  gameDetail?: IMatchDetail;
  summonerName: string;
}

const MatchTable = ({ gameDetail, summonerName }: IProps) => {
  return (
    <StyleContainer>
      {gameDetail && (
        <StyleTeamWrapper>
          {gameDetail.teams.map((item, idx) => (
            <StyleTeamList key={`team_${idx}`}>
              {item.players.map((player) => (
                <StyleTeamItem key={player.summonerId}>
                  <StyleChampionImage src={player.champion.imageUrl} />
                  <StyleSummonerName isMe={player.summonerName === summonerName}>
                    {player.summonerName}
                  </StyleSummonerName>
                </StyleTeamItem>
              ))}
            </StyleTeamList>
          ))}
        </StyleTeamWrapper>
      )}
    </StyleContainer>
  );
};

export default MatchTable;

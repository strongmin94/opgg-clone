import { IChampion, IPositions, ISummary } from "../../../../../datas/match";
import ChampionsInfo from "./championsInfo/championsInfo";
import {
  StyleChampionInfoWrapper,
  StyleContainer,
  StylePositionInfoWrapper,
  StyleRecordInfoWrapper,
} from "./inGameSummary.styled";
import PositionInfo from "./positionInfo/positionInfo";
import RecordInfo from "./recordInfo/recordInfo";

interface IProps {
  summary: ISummary;
  champions: Array<IChampion>;
  positions: Array<IPositions>;
}

const InGameSummary = ({ summary, champions, positions }: IProps) => {
  return (
    <StyleContainer>
      <StyleRecordInfoWrapper>
        <RecordInfo summary={summary} />
      </StyleRecordInfoWrapper>
      <StyleChampionInfoWrapper>
        <ChampionsInfo champions={champions} />
      </StyleChampionInfoWrapper>
      <StylePositionInfoWrapper>
        <PositionInfo positions={positions} />
      </StylePositionInfoWrapper>
    </StyleContainer>
  );
};

export default InGameSummary;

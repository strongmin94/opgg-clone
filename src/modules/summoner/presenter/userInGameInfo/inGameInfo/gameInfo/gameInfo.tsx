import { convertDateTime, convertTime } from "../../../../../../tools/utils";
import {
  StyleContainer,
  StyleGameDate,
  StyleGameResult,
  StyleGameTime,
  StyleGameType,
} from "./gameInfo.styled";

interface IProps {
  gameType: string;
  createDate: number;
  isWin: boolean;
  gameLength: number;
}

const GameInfo = ({ gameType, createDate, isWin, gameLength }: IProps) => {
  return (
    <StyleContainer>
      <StyleGameType>{gameType}</StyleGameType>
      <StyleGameDate>{convertDateTime(createDate)}</StyleGameDate>
      <StyleGameResult isWin={isWin}>{isWin ? "승리" : "패배"}</StyleGameResult>
      <StyleGameTime>{convertTime(gameLength)}</StyleGameTime>
    </StyleContainer>
  );
};

export default GameInfo;

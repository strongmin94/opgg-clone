import { useMemo } from "react";
import { IPositions } from "../../../datas/match";
import { StyleContainer, StylePositionList, StyleTitle } from "./positionInfo.styled";
import PositionItem from "./positionItem/positionItem";

interface IProps {
  positions: Array<IPositions>;
}

const PositionInfo = ({ positions }: IProps) => {
  const totalGameCount = useMemo<number>(() => {
    return positions.reduce((previousValue, currentValue) => previousValue + currentValue.games, 0);
  }, []);

  return (
    <StyleContainer>
      <StyleTitle>선호 포지션 (랭크)</StyleTitle>
      <StylePositionList>
        {positions.map((item, idx) => (
          <PositionItem key={`position_item_${idx}`} item={item} totalGameCount={totalGameCount} />
        ))}
      </StylePositionList>
    </StyleContainer>
  );
};

export default PositionInfo;

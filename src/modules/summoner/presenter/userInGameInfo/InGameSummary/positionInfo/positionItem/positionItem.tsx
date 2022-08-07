import Image from "next/image";
import { useMemo } from "react";
import { IPositions, POSITION_TYPE } from "../../../../../../../datas/match";
import { convertPosition } from "../../../../../../../tools/utils";
import {
  StyleContainer,
  StyleDescriptionWrapper,
  StyleDivision,
  StylePositionLabel,
  StylePositionRate,
  StyleWinRate,
} from "./positionItem.styled";

interface IProps {
  item: IPositions;
  totalGameCount: number;
}

const PositionItem = ({ item, totalGameCount }: IProps) => {
  const positionRate = useMemo<number>(() => {
    const result = Math.round((item.games / totalGameCount || 1) * 100);
    return !isNaN(result) ? result : 0;
  }, [totalGameCount]);
  const positionLabel = useMemo<string>(() => {
    return convertPosition(item.position as POSITION_TYPE);
  }, []);
  const winRate = useMemo(() => {
    const result = Math.round((item.wins / item.games || 1) * 100);
    return !isNaN(result) ? result : 0;
  }, []);

  return (
    <StyleContainer>
      <Image src={`/icons/${item.position}.png`} width={28} height={28} />
      <StyleDescriptionWrapper>
        <StylePositionLabel>{positionLabel}</StylePositionLabel>
        <p>
          <StylePositionRate>
            <span>{`${positionRate}%`}</span>
          </StylePositionRate>
          <StyleDivision />
          <StyleWinRate>
            {`승률 `}
            <span>{winRate}</span>%
          </StyleWinRate>
        </p>
      </StyleDescriptionWrapper>
    </StyleContainer>
  );
};

export default PositionItem;

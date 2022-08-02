import { useMemo } from "react";
import { IChampionWinRate } from "../../../interfaces/mostInfo";
import {
  StyleChampionThumbnail,
  StyleContainer,
  StyleGraphInfo,
  StyleLossBar,
  StyleRecentWinRate,
  StyleRecentWinRateWrapper,
  StyleWinBar,
  StyleWinRateGraphWrapper,
} from "./mostInfoItem.styled";

interface IProps {
  item: IChampionWinRate;
}

const MostRecentWinRate = ({ item }: IProps) => {
  const winPercent = useMemo<number>(() => {
    return Math.round((item.wins / (item.wins + item.losses)) * 100);
  }, []);
  const lossPercent = useMemo(() => {
    return 100 - winPercent;
  }, [winPercent]);

  return (
    <StyleContainer>
      <StyleChampionThumbnail src={item.imageUrl} alt={item.name} />
      <StyleRecentWinRateWrapper>
        <StyleRecentWinRate>{`${winPercent}%`}</StyleRecentWinRate>
        <StyleWinRateGraphWrapper>
          <StyleWinBar width={winPercent}></StyleWinBar>
          <StyleLossBar width={lossPercent} />
          <StyleGraphInfo>
            <span>{item.wins && `${item.wins}승`}</span>
            <span>{item.losses && `${item.losses}패`}</span>
          </StyleGraphInfo>
        </StyleWinRateGraphWrapper>
      </StyleRecentWinRateWrapper>
    </StyleContainer>
  );
};

export default MostRecentWinRate;

import { useMemo } from "react";
import { StyleWinRate } from "../../../../../../styles/globalStyle";
import { IChampionWinRate } from "../../../../../../datas/mostInfo";
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
  const winRate = useMemo<number>(() => {
    const result = Math.round((item.wins / (item.wins + item.losses)) * 100);
    return !isNaN(result) ? result : 0;
  }, []);
  const lossRate = useMemo(() => {
    return 100 - winRate;
  }, [winRate]);

  return (
    <StyleContainer>
      <StyleChampionThumbnail src={item.imageUrl} alt={item.name} />
      <StyleRecentWinRateWrapper>
        <StyleRecentWinRate>
          <StyleWinRate winRate={winRate}>{`${winRate}%`}</StyleWinRate>
        </StyleRecentWinRate>
        <StyleWinRateGraphWrapper>
          <StyleWinBar width={winRate}></StyleWinBar>
          <StyleLossBar width={lossRate} />
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

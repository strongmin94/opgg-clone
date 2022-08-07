import { useMemo } from "react";
import { StyleKDA } from "../../../../../../styles/globalStyle";
import { ISummary } from "../../../../../../datas/match";
import useKda from "../../../../../../hooks/useKda";
import {
  StyleContainer,
  StyleRecordInfo,
  StyleRecord,
  StyleKDAInfoWrapper,
  StyleKDAInfo,
  StyleKDAWrapper,
  StyleChartWrapper,
} from "./recordInfo.styld";
import DonutChart from "../../../../../../components/donutChart/donutChart";

interface IProps {
  summary: ISummary;
}

const RecordInfo = ({ summary }: IProps) => {
  const totalGameCount = useMemo<number>(() => {
    return summary.wins + summary.losses;
  }, []);
  const winPercent = useMemo(() => {
    const result = summary.wins / totalGameCount || 1;
    return !isNaN(result) ? result : 0;
  }, [totalGameCount]);
  const { killAverage, deathAverage, assistAverage, kda } = useKda({
    kills: summary.kills,
    deaths: summary.deaths,
    assists: summary.assists,
    totalGameCount,
  });

  return (
    <StyleContainer>
      <StyleRecordInfo>
        <StyleRecord>{`${totalGameCount}전 ${summary.wins}승 ${summary.losses}패`}</StyleRecord>
        <StyleChartWrapper>
          <DonutChart percent={winPercent} />
        </StyleChartWrapper>
      </StyleRecordInfo>
      <StyleKDAInfoWrapper>
        <StyleKDAInfo>{`${killAverage} / ${deathAverage} / ${assistAverage}`}</StyleKDAInfo>
        <StyleKDAWrapper>
          <StyleKDA kda={kda}>{`${kda.toFixed(2)}:1`}</StyleKDA>
        </StyleKDAWrapper>
      </StyleKDAInfoWrapper>
    </StyleContainer>
  );
};

export default RecordInfo;

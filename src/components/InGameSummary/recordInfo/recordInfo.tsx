import { useMemo } from "react";
import { StyleKDA } from "../../../../styles/globalStyle";
import { ISummary } from "../../../datas/match";
import {
  StyleContainer,
  StyleRecordInfo,
  StyleRecord,
  StyleKDAInfoWrapper,
  StyleKDAInfo,
  StyleKDAWrapper,
} from "./recordInfo.styld";

interface IProps {
  summary: ISummary;
}

const RecordInfo = ({ summary }: IProps) => {
  const totalGameCount = useMemo<number>(() => {
    return summary.wins + summary.losses;
  }, []);
  const killPercent = useMemo<number>(() => {
    return parseFloat((summary.kills / totalGameCount).toFixed(1));
  }, [totalGameCount]);
  const deathPercent = useMemo<number>(() => {
    return parseFloat((summary.deaths / totalGameCount).toFixed(1));
  }, [totalGameCount]);
  const assistPercent = useMemo<number>(() => {
    return parseFloat((summary.assists / totalGameCount).toFixed(1));
  }, [totalGameCount]);
  const kda = useMemo<number>(() => {
    return parseFloat(((killPercent + assistPercent) / deathPercent).toFixed(1));
  }, [killPercent, deathPercent, assistPercent]);

  return (
    <StyleContainer>
      <StyleRecordInfo>
        <StyleRecord>{`${totalGameCount}전 ${summary.wins}승 ${summary.losses}패`}</StyleRecord>
      </StyleRecordInfo>
      <StyleKDAInfoWrapper>
        <StyleKDAInfo>{`${killPercent} / ${deathPercent} / ${assistPercent}`}</StyleKDAInfo>
        <StyleKDAWrapper>
          <StyleKDA kda={kda}>{kda}</StyleKDA>
        </StyleKDAWrapper>
      </StyleKDAInfoWrapper>
    </StyleContainer>
  );
};

export default RecordInfo;

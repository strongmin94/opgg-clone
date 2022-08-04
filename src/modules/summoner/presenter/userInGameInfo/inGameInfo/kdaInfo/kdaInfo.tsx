import { IGeneral } from "../../../../../../datas/match";
import { convertMultiKills } from "../../../../../../tools/utils";
import {
  StyleBadgeWrapper,
  StyleContainer,
  StyleKda,
  StyleKdaInfo,
  StyleMultiKillBadge,
  StyleOpScoreBadge,
} from "./kdaInfo.styled";

interface IProps {
  stats: IGeneral;
}

const KdaInfo = ({ stats }: IProps) => {
  return (
    <StyleContainer>
      <StyleKdaInfo>
        <span>{stats.kill}</span>
        <span>{stats.death}</span>
        <span>{stats.assist}</span>
      </StyleKdaInfo>
      <StyleKda>
        <span>{stats.kdaString}</span> 평점
      </StyleKda>
      <StyleBadgeWrapper>
        <StyleMultiKillBadge isVisible={!!stats.largestMultiKillString}>
          {convertMultiKills(stats.largestMultiKillString)}
        </StyleMultiKillBadge>
        <StyleOpScoreBadge isVisible={!!stats.opScoreBadge}>{stats.opScoreBadge}</StyleOpScoreBadge>
      </StyleBadgeWrapper>
    </StyleContainer>
  );
};

export default KdaInfo;

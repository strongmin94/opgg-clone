import {
  StyleChampionLevel,
  StyleContainer,
  StyleContributionForKill,
  StyleCSInfo,
} from "./statInfo.styled";

interface IProps {
  level: number;
  cs: number;
  csPerMin: number;
  contributionForKillRate: string;
}

const StatInfo = ({ level, cs, csPerMin, contributionForKillRate }: IProps) => {
  return (
    <StyleContainer>
      <StyleChampionLevel>{`레벨${level}`}</StyleChampionLevel>
      <StyleCSInfo>{`${cs}(${csPerMin})CS`}</StyleCSInfo>
      <StyleContributionForKill>{`킬관여 ${contributionForKillRate}`}</StyleContributionForKill>
    </StyleContainer>
  );
};

export default StatInfo;

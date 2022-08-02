import { useMemo } from "react";
import { ILeague } from "../../interfaces/summoner";
import { StyleContainer, StyleLeagueInfoItem } from "./leagueInfo.styled";
import LeagueEmptyItem from "./leagueItem/leagueEmptyItem";
import LeagueItem from "./leagueItem/leagueItem";

export const enum LEAGUE_TYPE {
  SOLO = "솔랭",
  FREE = "자유 5:5 랭크",
}

interface IProps {
  leagues: Array<ILeague>;
}

const LeagueInfo = ({ leagues }: IProps) => {
  const soloLeague = useMemo<ILeague | undefined>(() => {
    return leagues.find((item) => item.tierRank.name === LEAGUE_TYPE.SOLO);
  }, []);

  const freeLeague = useMemo<ILeague | undefined>(() => {
    return leagues.find((item) => item.tierRank.name === LEAGUE_TYPE.FREE);
  }, []);
  console.log(leagues);

  return (
    <StyleContainer>
      {soloLeague ? (
        <LeagueItem item={soloLeague} />
      ) : (
        <LeagueEmptyItem leagueType={LEAGUE_TYPE.SOLO} />
      )}
      {freeLeague ? (
        <LeagueItem item={freeLeague} />
      ) : (
        <LeagueEmptyItem leagueType={LEAGUE_TYPE.FREE} />
      )}
    </StyleContainer>
  );
};

export default LeagueInfo;

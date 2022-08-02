import { useMemo } from "react";
import { ILeague, LEAGUE_TYPE } from "../../datas/summoner";
import { StyleContainer } from "./leagueInfo.styled";
import LeagueEmptyItem from "./leagueItem/leagueEmptyItem";
import LeagueItem from "./leagueItem/leagueItem";

interface IProps {
  leagues: Array<ILeague>;
}

const LeagueInfo = ({ leagues }: IProps) => {
  const soloLeague = useMemo<ILeague | undefined>(() => {
    return leagues.find((item) => item.tierRank.name === LEAGUE_TYPE.SOLORANKED);
  }, []);

  const freeLeague = useMemo<ILeague | undefined>(() => {
    return leagues.find((item) => item.tierRank.name === LEAGUE_TYPE.FLEXRANKED);
  }, []);

  return (
    <StyleContainer>
      {soloLeague ? (
        <LeagueItem item={soloLeague} />
      ) : (
        <LeagueEmptyItem leagueType={LEAGUE_TYPE.SOLORANKED} />
      )}
      {freeLeague ? (
        <LeagueItem item={freeLeague} />
      ) : (
        <LeagueEmptyItem leagueType={LEAGUE_TYPE.FLEXRANKED} />
      )}
    </StyleContainer>
  );
};

export default LeagueInfo;

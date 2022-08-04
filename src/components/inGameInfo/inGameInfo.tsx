import { IGameInfo } from "../../datas/match";
import ChampionInfo from "./championInfo/championInfo";
import GameInfo from "./gameInfo/gameInfo";
import { StyleContainer, StyleContentsWrapper, StyleMoreButton } from "./inGameInfo.styled";
import ItemInfo from "./itemInfo/itemInfo";
import MatchTable from "./matchTable/matchTable";
import KdaInfo from "./kdaInfo/kdaInfo";
import StatInfo from "./statInfo/statInfo";

interface IProps {
  item: IGameInfo;
}

const InGameInfo = ({ item }: IProps) => {
  return (
    <StyleContainer>
      <StyleContentsWrapper isWin={item.isWin}>
        <GameInfo
          gameType={item.gameType}
          createDate={item.createDate}
          isWin={item.isWin}
          gameLength={item.gameLength}
        />
        <ChampionInfo champion={item.champion} spells={item.spells} peak={item.peak} />
        <KdaInfo stats={item.stats.general} />
        <StatInfo
          level={item.champion.level}
          cs={item.stats.general.cs}
          csPerMin={item.stats.general.csPerMin}
          contributionForKillRate={item.stats.general.contributionForKillRate}
        />
        <ItemInfo
          items={item.items}
          isWin={item.isWin}
          visionWardsBought={item.stats.ward.visionWardsBought}
        />
        <MatchTable gameDetail={item.gameDetail} summonerName={item.summonerName} />
      </StyleContentsWrapper>
      <StyleMoreButton isWin={item.isWin}></StyleMoreButton>
    </StyleContainer>
  );
};

export default InGameInfo;

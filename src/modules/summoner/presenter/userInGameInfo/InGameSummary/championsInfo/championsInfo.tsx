import { useMemo } from "react";
import { IChampion } from "../../../../../../datas/match";
import { StyleContainer } from "./championsInfo.styled";
import ChampionsEmptyItem from "./championsItem/championsEmptyItem";
import ChampionsItem from "./championsItem/championsItem";

const MAX_CHAMPION_LIST = 3;

interface IProps {
  champions: Array<IChampion>;
}

const ChampionsInfo = ({ champions }: IProps) => {
  const championList = useMemo<Array<IChampion | undefined>>(() => {
    const result: Array<IChampion | undefined> = [];
    for (let i = 0; i < MAX_CHAMPION_LIST; i++) {
      result.push(champions[i] || null);
    }
    return result;
  }, []);

  return (
    <StyleContainer>
      {championList.map((item, idx) =>
        item ? (
          <ChampionsItem key={`champion_${idx}`} item={item} />
        ) : (
          <ChampionsEmptyItem key={`champion_empty_${idx}`} />
        )
      )}
    </StyleContainer>
  );
};

export default ChampionsInfo;

import { IChampionInMatch, ImageObj } from "../../../datas/match";
import {
  StyleContainer,
  StyleChampionInfo,
  StyleChampionThumbnail,
  StyleSpellWrapper,
  StyleSpellThumbnail,
  StyleChampionName,
} from "./championInfo.styled";

interface IProps {
  champion: IChampionInMatch;
  spells: Array<ImageObj>;
  peak: Array<string>;
}

const ChampionInfo = ({ champion, spells, peak }: IProps) => {
  return (
    <StyleContainer>
      <StyleChampionInfo>
        <StyleChampionThumbnail src={champion.imageUrl} />
        <StyleSpellWrapper>
          {spells.map((item, idx) => (
            <StyleSpellThumbnail key={`spell_${idx}`} src={item.imageUrl} />
          ))}
        </StyleSpellWrapper>
        <StyleSpellWrapper>
          {peak.map((item, idx) => (
            <StyleSpellThumbnail key={`spell_${idx}`} src={item} />
          ))}
        </StyleSpellWrapper>
      </StyleChampionInfo>
      <StyleChampionName>챔피언 이름</StyleChampionName>
    </StyleContainer>
  );
};

export default ChampionInfo;

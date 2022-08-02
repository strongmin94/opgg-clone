import { ITierRank } from "../../interfaces/summoner";
import { StyleContainer, StyleItem } from "./previousTierList.styled";

interface IProps {
  previousTiers: Array<ITierRank>;
}

const PreviousTierList = ({ previousTiers }: IProps) => {
  return (
    <StyleContainer>
      {previousTiers.map((item, idx) => (
        <StyleItem key={`previousTier_${idx}`}>
          <span>{`S${item.season}`}</span>&nbsp;
          {item.tier}
        </StyleItem>
      ))}
    </StyleContainer>
  );
};

export default PreviousTierList;

import PreviousTierList from "../../../../components/previousTierList/previousTierList";
import UserThumbnail from "../../../../components/userThumbnail/userThumbnail";
import { ISummoner } from "../../../../datas/summoner";
import {
  StyleContainer,
  StyleContentsWrapper,
  StyleLadderInfo,
  StylePreviousTierList,
  StyleSummaryWrapper,
  StyleUserInfo,
  StyleUserName,
} from "./userSummary.styled";

interface IProps {
  summoner: ISummoner;
}

const UserSummary = ({
  summoner: {
    ladderRank: { rank, rankPercentOfTop },
    previousTiers,
    name,
    level,
    profileBorderImageUrl,
    profileImageUrl,
  },
}: IProps) => {
  return (
    <StyleContainer>
      <StyleContentsWrapper>
        <StylePreviousTierList>
          <PreviousTierList previousTiers={previousTiers} />
        </StylePreviousTierList>
        <StyleUserInfo>
          <UserThumbnail
            level={level}
            profileBorderImageUrl={profileBorderImageUrl}
            profileImageUrl={profileImageUrl}
          />
          <StyleSummaryWrapper>
            <StyleUserName>{name}</StyleUserName>
            <StyleLadderInfo>
              레더 랭킹&nbsp;
              <span>{rank.toLocaleString()}</span>위 (상위 {rankPercentOfTop}%)
            </StyleLadderInfo>
          </StyleSummaryWrapper>
        </StyleUserInfo>
      </StyleContentsWrapper>
    </StyleContainer>
  );
};

export default UserSummary;

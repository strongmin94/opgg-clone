import { IMostInfoResponse } from "../../../../../datas/mostInfo";
import { StyleContainer, StyleMostInfoList, StyleTabItem, StyleTabList } from "./mostInfo.styled";
import MostChampionInfo from "./mostInfoItem/mostChampionInfo";
import MostRecentWinRate from "./mostInfoItem/mostRecentWinRate";
import useMostInfo, { tabList } from "./useMostInfo";

interface IProps {
  mostInfo: IMostInfoResponse;
}

const MostInfo = ({ mostInfo }: IProps) => {
  const { selectedTab, setSelectedTab } = useMostInfo();

  return (
    <StyleContainer>
      <StyleTabList>
        {tabList.map((item, idx) => (
          <StyleTabItem
            key={`tab_${idx}`}
            isSelected={selectedTab.value === item.value}
            onClick={() => setSelectedTab(item)}
          >
            {item.label}
          </StyleTabItem>
        ))}
      </StyleTabList>
      <StyleMostInfoList>
        {selectedTab.value === "champions"
          ? mostInfo.champions.map((item, idx) => (
              <MostChampionInfo key={`mostChampion_${idx}`} item={item} />
            ))
          : selectedTab.value === "recentWinRate"
          ? mostInfo.recentWinRate.map((item, idx) => (
              <MostRecentWinRate key={`mostRecentWinRate_${idx}`} item={item} />
            ))
          : null}
      </StyleMostInfoList>
    </StyleContainer>
  );
};

export default MostInfo;

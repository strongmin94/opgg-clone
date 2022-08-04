import styled from "styled-components";
import { OneLineTextOverflow } from "../../../../../../styles/globalStyle";

export const StyleContainer = styled.li`
  display: flex;
  padding: 4px 15px;
  background-color: #ededed;
  border-bottom: 1px solid #cdd2d2;
  align-items: center;

  :last-child {
    border-bottom: none;
  }
`;

export const StyleChampionThumbnail = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const StyleInfoWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const StyleTopInfo = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: bold;
  color: #5e5e5e;
`;

export const StyleBottomInfo = styled.div`
  display: flex;
  font-size: 11px;
  color: #879292;
`;

export const StyleInfoItem = styled.span<{ textAlign: "start" | "center" | "end" }>`
  flex: 1;
  min-width: 0;
  text-align: ${(props) => props.textAlign};
  ${OneLineTextOverflow}
`;

export const StyleRecentWinRateWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export const StyleRecentWinRate = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #879292;
`;

export const StyleWinRateGraphWrapper = styled.div`
  position: relative;
  display: flex;
  width: 123px;
  height: 24px;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyleBar = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
`;

export const StyleWinBar = styled(StyleBar)`
  background-color: #1f8ecd;
`;

export const StyleLossBar = styled(StyleBar)`
  background-color: #ee5a52;
`;

export const StyleGraphInfo = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 5px;

  span {
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
  }
`;

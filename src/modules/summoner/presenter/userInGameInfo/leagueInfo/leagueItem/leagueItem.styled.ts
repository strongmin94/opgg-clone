import styled from "styled-components";

export const StyleContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border: 1px solid #cdd2d2;
  margin-bottom: 8px;
`;

export const StyleEmptyContainer = styled(StyleContainer)`
  padding: 17px 28px;
`;

export const StyleEmptyTitle = styled.p`
  font-size: 11px;
  color: #879292;
`;

export const StyleEmptyUnlanked = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #879292;
`;

export const StyleLeagueInfoWrapper = styled.div`
  flex: 1;
  min-width: 0;
  padding: 0px 8px;
`;

export const StyleEmptyLeagueInfoWrapper = styled(StyleLeagueInfoWrapper)`
  padding: 0px 28px;
`;

export const StlyeLeagueType = styled.p`
  font-size: 11px;
  color: #879292;
  margin-bottom: 4px;
`;

export const StyleGameCount = styled.p`
  font-size: 12px;
  color: #353a3a;
  margin-bottom: 4px;
`;

export const StyleTierInfo = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #1f8ecd;
  margin-bottom: 6px;
`;

export const StyleInGameInfo = styled.p`
  font-size: 12px;
  color: #879292;
  margin-bottom: 3px;

  span {
    font-weight: bold;
    color: #555e5e;
  }
`;

export const StyleWinPercent = styled.p`
  font-size: 12px;
  color: #879292;
`;

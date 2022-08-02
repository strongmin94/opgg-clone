import styled from "styled-components";

export const StyleContaier = styled.li`
  display: flex;
  :not(:first-child) {
    margin-top: 12px;
  }
`;

export const StyleThumbnail = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

export const StyleDescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  padding-left: 8px;
  justify-content: center;
`;

export const StyleChampionName = styled.p`
  font-size: 14px;
  color: #333333;
`;

export const StyleChampionRecord = styled.span`
  font-size: 11px;
  color: #555555;
`;

export const StyleDivision = styled.span`
  font-size: 12px;
  color: #cdd2d2;

  ::after {
    content: "|";
    margin: 0px 6px;
  }
`;

export const StyleKDAInfo = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: #555555;
`;

export const StyleEmptyDescription = styled.p`
  font-size: 11px;
  color: #999999;
`;

import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  width: 17%;
  flex-direction: column;
  align-items: center;
`;

export const StyleItemList = styled.ul`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2px;
`;

export const StyleItem = styled.li<{ isWin: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background-color: ${({ isWin }) => (isWin ? "#7aa5c3" : "#cb9e9a")};
`;

export const StyleItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;

export const StyleVisionWardInfoWrapper = styled.div`
  display: flex;
  margin-top: 7px;
  align-items: center;
`;

export const StyleVisionWardInfo = styled.span`
  font-size: 11px;
  color: #000000;
  margin-left: 4px;
`;

export const StyleTooltipTitle = styled.p`
  font-size: 11px;
  color: #00cfbc;
  margin-bottom: 3px;
`;

export const StyleTooltipDescription = styled.p`
  font-size: 11px;
  color: #ffffff;
  line-height: 15px;
`;

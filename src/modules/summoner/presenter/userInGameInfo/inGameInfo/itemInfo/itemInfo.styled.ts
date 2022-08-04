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
  overflow: hidden;
  background-color: ${({ isWin }) => (isWin ? "#7aa5c3" : "#cb9e9a")};
`;

export const StyleItemImage = styled.img`
  width: 100%;
  height: 100%;
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

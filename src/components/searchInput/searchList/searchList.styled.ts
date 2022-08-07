import styled from "styled-components";
import { OneLineTextOverflow } from "../../../styles/globalStyle";

export const StyleContainer = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 8px 12px 0px;
  z-index: 1;
  background-color: #ffffff;
  overflow: hidden;
  margin-top: 5px;
`;

export const StyleSearchListTabList = styled.ul`
  display: flex;
`;

export const StyleSearchListTabItem = styled.li<{ isActive: boolean }>`
  width: 50%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  color: "#9aa4af";
  background-color: ${({ isActive }) => (isActive ? "#ffffff" : "#ebeef1")};
`;

export const StyleSearchList = styled.ul``;

export const StyleSearchItem = styled.li`
  display: flex;
  padding: 4px 16px;
  align-items: center;
  :hover {
    background-color: #f7f7f9;
  }
`;

export const StyleSearchLink = styled.a`
  flex: 1;
  font-size: 14px;
  color: #44515c;
  ${OneLineTextOverflow}
`;

export const StyleEmptySearchList = styled.div`
  display: flex;
  height: 264px;
`;

export const StyleEmptyInfo = styled.p`
  font-size: 12px;
  color: #9aa4af;
  margin: auto;
`;

export const StyleRemoveButton = styled.button`
  display: flex;
  background-color: transparent;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

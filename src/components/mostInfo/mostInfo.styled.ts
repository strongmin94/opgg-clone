import styled, { css } from "styled-components";

export const StyleContainer = styled.div`
  width: 100%;
  border: 1px solid #cdd2d2;
`;

export const StyleTabList = styled.ul`
  display: flex;
`;

export const StyleTabItem = styled.li<{ isSelected: boolean }>`
  flex: 1;
  padding: 15px 0px;
  font-size: 12px;
  color: #879292;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #cdd2d2;

  :first-child {
    border-right: 1px solid #cdd2d2;
  }

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: none;
      background-color: #ededed;
    `}
`;

export const StyleMostInfoList = styled.ul``;

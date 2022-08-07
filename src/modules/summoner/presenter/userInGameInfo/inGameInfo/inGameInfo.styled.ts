import styled, { css } from "styled-components";

export const StyleContainer = styled.li`
  display: flex;
  height: 96px;
  overflow: hidden;
`;

export const StyleContentsWrapper = styled.div<{ isWin: boolean }>`
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;

  ${({ isWin }) => css`
    border-color: ${isWin ? "#a1b8cd" : "#c0aba8"};
    background-color: ${isWin ? "#b0ceea" : "#d6b5b2"};
  `}
`;

export const StyleMoreButton = styled.button<{ isWin: boolean }>`
  width: 30px;
  height: 100%;
  border: 1px solid;

  ${({ isWin }) => css`
    border-color: ${isWin ? "#549dc7" : "#c8817c"};
    background-color: ${isWin ? "#7fb0e1" : "#e89c95"};
  `}
`;

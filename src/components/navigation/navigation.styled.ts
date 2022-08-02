import styled, { css } from "styled-components";

export const StyleContainer = styled.nav`
  padding: 12px 16px;
  border-bottom: 1px solid #cdd2d2;
`;

export const StyleNavList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const StyleNavItem = styled.li<{ isSelected: boolean }>`
  font-size: 12px;
  color: #555555;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      font-weight: bold;
      color: #1f8ecd;
    `}
`;

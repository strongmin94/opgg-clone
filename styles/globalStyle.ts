import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const StyleKDA = styled.span<{ kda: number }>`
  ${({ kda }) => {
    if (kda >= 6) {
      return css`
        color: #e19205;
      `;
    } else if (kda >= 5) {
      return css`
        color: #e19205;
      `;
    } else if (kda >= 4) {
      return css`
        color: #1f8ecd;
      `;
    } else if (kda >= 3) {
      return css`
        color: #2daf7f;
      `;
    }
  }}
`;

export const StyleWinRate = styled.span<{ winRate: number }>`
  ${({ winRate }) => {
    if (winRate >= 60) {
      return css`
        color: #c6443e;
      `;
    }
  }}
`;

export const OneLineTextOverflow = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default GlobalStyle;

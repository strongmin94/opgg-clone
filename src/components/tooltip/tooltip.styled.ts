import styled, { css } from "styled-components";
import { TOOLTIP_POSITION } from "./tooltip";

export const StyleContainer = styled.div`
  position: relative;
  height: inherit;
`;

export const StyleTooltipWrapper = styled.div<{ position: TOOLTIP_POSITION }>`
  position: absolute;
  visibility: ${({ position }) => (position !== TOOLTIP_POSITION.NONE ? "unset" : "hidden")};
  width: max-content;
  max-width: 100vw;
  padding: 10px;
  background-color: #222727;
  z-index: 1000;

  ${({ position }) => {
    switch (position) {
      case TOOLTIP_POSITION.TOPLEFT:
        return css`
          bottom: calc(100% + 3px);
          right: 0;
        `;
      case TOOLTIP_POSITION.TOPRIGHT:
        return css`
          bottom: calc(100% + 3px);
          left: 0;
        `;
      case TOOLTIP_POSITION.BOTTOMLEFT:
        return css`
          top: calc(100% + 3px);
          right: 0;
        `;
      case TOOLTIP_POSITION.BOTTOMCENTER:
        return css`
          top: calc(100% + 3px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case TOOLTIP_POSITION.BOTTOMRIGHT:
        return css`
          top: calc(100% + 3px);
          left: 0;
        `;
      case TOOLTIP_POSITION.LEFTTOP:
        return css`
          right: calc(100% + 3px);
          bottom: 0;
        `;
      case TOOLTIP_POSITION.LEFTCENTER:
        return css`
          top: 50%;
          right: calc(100% + 3px);
          transform: translateY(-50%);
        `;
      case TOOLTIP_POSITION.LEFTBOTTOM:
        return css`
          top: 0;
          right: calc(100% + 3px);
        `;
      case TOOLTIP_POSITION.RIGHTTOP:
        return css`
          bottom: 0;
          left: calc(100% + 3px);
        `;
      case TOOLTIP_POSITION.RIGHTCENTER:
        return css`
          top: 50%;
          left: calc(100% + 3px);
          transform: translateY(-50%);
        `;
      case TOOLTIP_POSITION.RIGHTBOTTOM:
        return css`
          top: 0;
          left: calc(100% + 3px);
        `;
      case TOOLTIP_POSITION.TOPCENTER:
      default:
        return css`
          left: 50%;
          bottom: calc(100% + 3px);
          transform: translateX(-50%);
        `;
    }
  }}
`;

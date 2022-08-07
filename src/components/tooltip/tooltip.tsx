import { ReactNode, useCallback, useRef, useState } from "react";
import { StyleContainer, StyleTooltipWrapper } from "./tooltip.styled";

export const enum TOOLTIP_POSITION {
  NONE,
  TOPLEFT,
  TOPCENTER,
  TOPRIGHT,
  BOTTOMLEFT,
  BOTTOMCENTER,
  BOTTOMRIGHT,
  LEFTTOP,
  LEFTCENTER,
  LEFTBOTTOM,
  RIGHTTOP,
  RIGHTCENTER,
  RIGHTBOTTOM,
}

interface IProps {
  children: ReactNode;
  tooltip: ReactNode | string;
}

const ToolTip = ({ children, tooltip }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<TOOLTIP_POSITION>(TOOLTIP_POSITION.NONE);

  const onMouseEnter = useCallback(() => {
    if (ref.current && tooltipRef.current) {
      const { offsetWidth: tooltipWidth, offsetHeight: tooltipHeight } = tooltipRef.current;
      const { innerWidth, innerHeight } = window;
      const { top, bottom, left, right } = ref.current.getBoundingClientRect();

      if (top > tooltipHeight) {
        setPosition(TOOLTIP_POSITION.TOPCENTER);
      } else if (innerHeight - bottom > tooltipHeight) {
        setPosition(TOOLTIP_POSITION.BOTTOMCENTER);
      } else if (left > tooltipWidth) {
        setPosition(TOOLTIP_POSITION.LEFTCENTER);
      } else if (innerWidth - right > tooltipWidth) {
        setPosition(TOOLTIP_POSITION.RIGHTCENTER);
      } else {
        setPosition(TOOLTIP_POSITION.TOPCENTER);
      }
    }
  }, []);

  return (
    <StyleContainer
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setPosition(TOOLTIP_POSITION.NONE)}
    >
      {children}
      <StyleTooltipWrapper ref={tooltipRef} position={position}>
        {tooltip}
      </StyleTooltipWrapper>
    </StyleContainer>
  );
};

export default ToolTip;

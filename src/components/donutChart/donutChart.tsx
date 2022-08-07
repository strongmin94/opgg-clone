import { useMemo } from "react";
import { StyleContainer, StyleRate } from "./donutChart.styled";

interface IProps {
  percent: number;
  isHideRate?: boolean;
}

const DonutChart = ({ percent, isHideRate }: IProps) => {
  const rate = useMemo<number>(() => {
    return Math.round(percent * 100);
  }, []);

  return (
    <StyleContainer>
      <svg viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="85" fill="none" stroke="#ee5a52" strokeWidth="30" />
        <circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="#1f8ecd"
          strokeWidth="30"
          strokeDasharray={`${2 * Math.PI * 85 * percent} ${2 * Math.PI * 85 * (1 - percent)}`}
        />
      </svg>
      {!isHideRate && <StyleRate>{`${rate}%`}</StyleRate>}
    </StyleContainer>
  );
};

export default DonutChart;

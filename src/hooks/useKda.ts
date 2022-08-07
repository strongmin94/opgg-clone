import { useMemo } from "react";

interface IProps {
  kills: number;
  deaths: number;
  assists: number;
  totalGameCount: number;
}

const useKda = ({ kills, deaths, assists, totalGameCount }: IProps) => {
  const killAverage = useMemo<number>(() => {
    const result = parseFloat((kills / totalGameCount || 1).toFixed(1));
    return !isNaN(result) ? result : 0;
  }, [kills, totalGameCount]);
  const deathAverage = useMemo<number>(() => {
    const result = parseFloat((deaths / totalGameCount || 1).toFixed(1));
    return !isNaN(result) ? result : 0;
  }, [deaths, totalGameCount]);
  const assistAverage = useMemo<number>(() => {
    const result = parseFloat((assists / totalGameCount || 1).toFixed(1));
    return !isNaN(result) ? result : 0;
  }, [assists, totalGameCount]);
  const kda = useMemo<number>(() => {
    const result = parseFloat(((killAverage + assistAverage) / deathAverage || 1).toFixed(2));
    return !isNaN(result) ? result : 0;
  }, [killAverage, deathAverage, assistAverage]);

  return {
    killAverage,
    deathAverage,
    assistAverage,
    kda,
  };
};

export default useKda;

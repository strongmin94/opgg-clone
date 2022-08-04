import { useMemo } from "react";

interface IProps {
  kills: number;
  deaths: number;
  assists: number;
  totalGameCount: number;
}

const useKda = ({ kills, deaths, assists, totalGameCount }: IProps) => {
  const killAverage = useMemo<number>(() => {
    return parseFloat((kills / totalGameCount).toFixed(1));
  }, [kills, totalGameCount]);
  const deathAverage = useMemo<number>(() => {
    return parseFloat((deaths / totalGameCount).toFixed(1));
  }, [deaths, totalGameCount]);
  const assistAverage = useMemo<number>(() => {
    return parseFloat((assists / totalGameCount).toFixed(1));
  }, [assists, totalGameCount]);
  const kda = useMemo<number>(() => {
    return parseFloat(((killAverage + assistAverage) / deathAverage).toFixed(1));
  }, [killAverage, deathAverage, assistAverage]);

  return {
    killAverage,
    deathAverage,
    assistAverage,
    kda,
  };
};

export default useKda;

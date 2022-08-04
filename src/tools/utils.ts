import { POSITION_TYPE } from "../datas/match";

export const convertPosition = (position: POSITION_TYPE): string => {
  switch (position) {
    case POSITION_TYPE.TOP:
      return "탑";
    case POSITION_TYPE.JNG:
      return "정글";
    case POSITION_TYPE.MID:
      return "미드";
    case POSITION_TYPE.ADC:
      return "원딜";
    case POSITION_TYPE.SUP:
      return "서포터";
    default:
      return "";
  }
};

const ONE_MIN = 1000 * 60;
const ONE_HOUR = ONE_MIN * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;
const ONE_YEAR = ONE_DAY * 365;

export const convertDateTime = (target: number): string => {
  const now = new Date().getTime();
  const difference = now - target * 1000;

  if (difference >= ONE_YEAR) {
    return `${Math.floor(difference / ONE_YEAR)}년 전`;
  } else if (difference >= ONE_WEEK) {
    return `${Math.floor(difference / ONE_WEEK)}주 전`;
  } else if (difference >= ONE_DAY) {
    return `${Math.floor(difference / ONE_DAY)}일 전`;
  } else if (difference >= ONE_HOUR) {
    return `${Math.floor(difference / ONE_HOUR)}시간 전`;
  } else if (difference >= ONE_MIN) {
    return `${Math.floor(difference / ONE_MIN)}분 전`;
  }
  return `${difference}초 전`;
};

export const convertTime = (target: number): string => {
  const hour = Math.floor(target / 3600);
  const min = Math.floor((target % 3600) / 60);
  const sec = target % 60;

  let result: string = "";
  if (hour) result += `${hour}시간 `;
  if (min) result += `${min}분 `;
  if (sec) result += `${sec}초`;
  return result;
};

export const convertMultiKills = (kills: string): string => {
  switch (kills) {
    case "Double Kill":
      return "더블킬";
    default:
      return "";
  }
};

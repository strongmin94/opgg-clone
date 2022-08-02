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

import styled from "styled-components";
import { OneLineTextOverflow } from "../../../../../styles/globalStyle";

export const StyleContainer = styled.article`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 10px;
`;

export const StyleContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  padding: 15px 0px;
`;

export const StylePreviousTierList = styled.div`
  padding: 0px 32px;
  margin-bottom: 6px;
`;

export const StyleUserInfo = styled.div`
  display: flex;
  padding: 0px 20px;
`;

export const StyleSummaryWrapper = styled.div`
  flex: 1;
  min-width: 0;
  padding: 11px 17px;
`;

export const StyleUserName = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #242929;
  margin-bottom: 4px;
  ${OneLineTextOverflow}
`;

export const StyleLadderInfo = styled.p`
  font-size: 11px;
  color: #657070;
  span {
    font-weight: bold;
  }
`;

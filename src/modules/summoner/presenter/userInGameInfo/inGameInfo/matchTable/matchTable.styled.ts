import styled from "styled-components";
import { OneLineTextOverflow } from "../../../../../../styles/globalStyle";

export const StyleContainer = styled.div`
  width: 25%;
`;

export const StyleTeamWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 19px;
  padding-right: 14px;
`;

export const StyleTeamList = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 2px;
`;

export const StyleTeamItem = styled.li`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const StyleChampionImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`;

export const StyleSummonerName = styled.span<{ isMe: boolean }>`
  font-size: 11px;
  color: ${({ isMe }) => (isMe ? "#000000" : "#555555")};
  ${OneLineTextOverflow};
`;

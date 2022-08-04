import styled from "styled-components";

export const StyleContainer = styled.div`
  width: 13%;
  text-align: center;
`;

export const StyleGameType = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #555555;
  margin-bottom: 4px;
`;

export const StyleGameDate = styled.p`
  font-size: 11px;
  color: #555555;
  margin-bottom: 9px;
`;

export const StyleGameResult = styled.p<{ isWin: boolean }>`
  font-size: 11px;
  font-weight: bold;
  color: ${(props) => (props.isWin ? "#2c709b" : "#d0021b")};
  margin-bottom: 4px;
`;

export const StyleGameTime = styled.p`
  font-size: 11px;
  color: #555555;
`;

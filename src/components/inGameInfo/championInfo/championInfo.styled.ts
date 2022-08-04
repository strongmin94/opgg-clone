import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  width: 17%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyleChampionInfo = styled.div`
  display: flex;
`;

export const StyleChampionThumbnail = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 6px;
`;

export const StyleSpellWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
  :not(:last-child) {
    margin-right: 4px;
  }
`;

export const StyleSpellThumbnail = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 2px;
`;

export const StyleChampionName = styled.p`
  font-size: 11px;
  color: #555555;
  margin-top: 9px;
`;

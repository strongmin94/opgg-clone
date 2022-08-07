import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  background-color: #ededed;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyleRecordInfoWrapper = styled.div`
  flex: 1;
  border-right: 1px solid #cdd2d2;

  @media screen and (max-width: 1000px) {
    border-right: none;
    border-bottom: 1px solid #cdd2d2;
  }
`;

export const StyleChampionInfoWrapper = styled.div`
  flex: 1;
  border-right: 1px solid #cdd2d2;

  @media screen and (max-width: 1000px) {
    border-right: none;
    border-bottom: 1px solid #cdd2d2;
  }
`;

export const StylePositionInfoWrapper = styled.div`
  flex: 1;
`;

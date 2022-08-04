import styled from "styled-components";

export const StyleContainer = styled.article`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyleLeftWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const StyleRightWrapper = styled.div`
  width: 690px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const StyleInGameSummaryWrapper = styled.div`
  border: 1px solid #cdd2d2;
  margin-bottom: 16px;
`;

export const StyleGameInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

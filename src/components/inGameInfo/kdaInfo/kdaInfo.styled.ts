import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const StyleKdaInfo = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #555e5e;
  margin-bottom: 6px;

  span {
    :nth-child(2) {
      color: #d0021b;
    }

    :not(:last-child) {
      ::after {
        content: " / ";
        font-weight: normal;
        color: #948e8d;
      }
    }
  }
`;

export const StyleKda = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #555e5e;
  margin-bottom: 7px;
  span {
    color: #333333;
  }
`;

export const StyleBadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

export const StyleBadge = styled.span<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  border: 1px;
  border-radius: 9px;
  font-size: 10px;
  color: #ffffff;
  padding: 3px 5px;
`;

export const StyleMultiKillBadge = styled(StyleBadge)`
  border-color: #bf3b36;
  background-color: #ec4f48;
`;

export const StyleOpScoreBadge = styled(StyleBadge)`
  border-color: #7f3590;
  background-color: #8c51c5;
`;

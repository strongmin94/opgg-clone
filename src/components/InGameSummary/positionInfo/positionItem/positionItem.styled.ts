import styled from "styled-components";

export const StyleContainer = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;

  :not(:first-child) {
    margin-top: 24px;
  }
`;

export const StyleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StylePositionLabel = styled.p`
  font-size: 14px;
  color: #333333;
`;

export const StylePositionRate = styled.span`
  font-size: 11px;
  color: #1f8ecd;

  span {
    font-weight: bold;
  }
`;

export const StyleDivision = styled.span`
  font-size: 12px;
  color: #cdd2d2;

  ::after {
    content: "|";
    margin: 0px 6px;
  }
`;

export const StyleWinRate = styled.span`
  font-size: 11px;
  color: #666666;

  span {
    font-weight: bold;
    color: #333333;
  }
`;

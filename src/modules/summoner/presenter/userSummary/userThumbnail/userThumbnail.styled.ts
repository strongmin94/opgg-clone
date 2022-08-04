import styled from "styled-components";

export const StyleContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const StyleThumbnailWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 11px;
`;

export const StyleBorderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const StyleLevelWrapper = styled.div`
  position: absolute;
  padding: 3px 14px 4px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to bottom, #f6e08f, var(--dull-orange) 99%);
  border-image-slice: 1;
  background-color: #2c3548;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export const StyleLevel = styled.span`
  font-size: 14px;
  color: #eabd56;
`;

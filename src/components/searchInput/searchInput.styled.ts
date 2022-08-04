import styled from "styled-components";

export const StyleContainer = styled.form`
  position: relative;
  width: 260px;
  height: 32px;
`;

export const StyleInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 9px 50px 8px 14px;
  border: none;
  border-radius: 2px;
  font-size: 12px;

  ::placeholder {
    font-size: 12px;
    color: #727272;
  }
`;

export const StyleSearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: transparent;
`;

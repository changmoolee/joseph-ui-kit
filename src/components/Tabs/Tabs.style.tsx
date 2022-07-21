/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const box = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
  display: flex;
`;
export const item = (clicked: number, index: number, disabled: boolean) => {
  return css`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 14px;
    border: none;
    border-top: ${clicked === index
      ? `2px solid #0e62fe`
      : `2px solid transparent`};
    background-color: ${disabled
      ? "#c6c6c6"
      : clicked === index
      ? "#f4f4f4"
      : "#e0e0e0"};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    span {
      font-weight: ${clicked === index ? "600" : "400"};
      color: ${disabled
        ? "#8d8d8d"
        : clicked === index
        ? "#161616"
        : "#525252"};
    }
    :hover {
      background-color: ${disabled ? "#c6c6c6" : "#d1d1d1"};
    }
    :focus {
      outline: ${disabled ? "none" : "2px solid #0e62fe"};
      outline-offset: ${disabled ? "none" : "-2px"};
    }
  `;
};

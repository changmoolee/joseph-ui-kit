/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const box = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
  display: flex;
`;
export const item = (clicked: number, index: number) => {
  return css`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: none;
    border-top: ${clicked === index ? `2px solid #0e62fe` : null};
    background-color: ${clicked === index ? "#f4f4f4" : "#e0e0e0"};
    span {
      margin-top: ${clicked === index ? "-2px" : "0"};
      font-weight: ${clicked === index ? "800" : "400"};
      color: ${clicked === index ? "black" : "#525253"};
    }
    :hover {
      background-color: #d1d1d1;
    }
  `;
};

export const text = css`
  color: white;
  opacity: 0.5;
`;

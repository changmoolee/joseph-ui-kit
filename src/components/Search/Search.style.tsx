/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = (disabled: boolean) => css`
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${disabled ? "0" : "1px solid black"};
  background-color: #f4f4f4;
  color: #525252;
  opacity: ${disabled ? 0.5 : 1};
  cursor: ${disabled ? "not-allowed" : "auto"};
  :focus-within {
    outline-width: 2px;
    outline-style: solid;
    outline-color: #0f62fe;
  }
`;
export const searchIcon = css`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const clearIcon = (disabled: boolean) => css`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  :hover {
    background-color: ${disabled ? "none" : "#e8e8e8"};
  }
`;

export const input = css`
  width: 80%;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: inherit;
`;

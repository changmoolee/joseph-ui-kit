/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BodyStyles } from "../Typography/Typography";

export const container = (width: string, disabled: boolean) => css`
  width: ${width};
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: ${disabled ? "1px solid transparent" : "1px solid black"};
  background-color: #f4f4f4;
  color: #525252;
  box-sizing: border-box;
  opacity: ${disabled ? 0.5 : 1};
  cursor: ${disabled ? "not-allowed" : "auto"};
  :focus-within {
    border-bottom: 1px solid transparent;
    outline-width: 2px;
    outline-style: solid;
    outline-color: #0f62fe;
    outline-offset: -2px;
  }
`;
export const searchIcon = css`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const clearIcon = (disabled: boolean) => css`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  :hover {
    background-color: ${disabled ? "none" : "#e8e8e8"};
  }
`;

export const input = css`
  ${BodyStyles.bodyCompact01}
  flex-grow: 1;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: inherit;
  ::placeholder {
    opacity: 0.5;
  }
`;

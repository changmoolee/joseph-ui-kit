/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { UtilityStyles, BodyStyles } from "../Typography/Typography";

export const container = (width: string) => css`
  width: ${width};
`;

export const wrapper = (disabled: boolean) => css`
  width: 100%;
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

export const input = css`
  ${BodyStyles.bodyCompact01}
  width: 100%;
  height: 100%;
  padding: 0px 16px;
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: inherit;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const label = (disabled: boolean) => css`
  ${UtilityStyles.label01}
  margin: 5px 0px;
  color: #525252;
  opacity: ${disabled ? 0.3 : 1};
`;

export const helperText = (disabled: boolean) => css`
  ${UtilityStyles.helperText01}
  margin: 5px 0px;
  color: #525252;
  opacity: ${disabled ? 0.3 : 1};
`;

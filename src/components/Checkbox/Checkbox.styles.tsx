/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BodyStyles } from "../Typography/Typography";

export const container = css`
  ${BodyStyles.bodyCompact01}
  display: inline-flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const disabledCheckbox = css`
  width: 16px;
  height: 16px;
  border: 1px solid #16161640;
  border-radius: 1px;
  box-sizing: border-box;
  cursor: not-allowed;
`;

export const disabledCheckboxLabel = css`
  padding-left: 6px;
  color: #16161640;
  user-select: none;
  cursor: not-allowed;
`;

export const checkedCheckbox = css`
  width: 16px;
  height: 16px;
  border: 1px solid black;
  border-radius: 1px;
  background-color: black;
`;

export const uncheckedCheckbox = css`
  width: 16px;
  height: 16px;
  border: 1px solid black;
  border-radius: 1px;
`;

export const checkboxLabel = css`
  padding-left: 6px;
  user-select: none;
`;

export const hiddenInput = css`
  display: none;
`;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BodyStyles } from "../Typography/Typography";

export const uploadImageContainer = css`
  width: auto;
`;

export const uploadedFileContainer = css`
  ${BodyStyles.bodyCompact01}
  width: max-content;
  max-width: 320px;
  height: 40px;
  display: grid;
  row-gap: 8px;
  column-gap: 16px;
  align-items: center;
  grid-auto-rows: auto;
  grid-template-columns: 1fr auto;
  margin-top: 16px;
  background-color: #f4f4f4;
`;

export const filename = css`
  margin-left: 16px;
  word-break: break-word;
`;

export const closeIcon = css`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 16px;
  border: none;
  cursor: pointer;
`;

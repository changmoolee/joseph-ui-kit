/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { UtilityStyles } from "../Typography/Typography";

export const uploadImageContainer = (width: string) => css`
  width: ${width};
  height: auto;
  display: flex;
`;

export const imageWithButton = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

export const uploadImage = css`
  width: 100%;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const uploadImageButton = css`
  ${UtilityStyles.label02};
  width: 100%;
  height: 96px;
  padding: 16px;
  border: 1px dashed rgba(141, 141, 141);
  color: #0f62fe;
  box-sizing: border-box;
  transition: 0.1s;
  cursor: pointer;
  :hover {
    outline: 2px solid #0f62fe;
    outline-offset: -2px;
    span {
      text-decoration: underline;
    }
  }
`;

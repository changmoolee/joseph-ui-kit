/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { UtilityStyles } from "../Typography/Typography";

export const uploadImageContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const uploadImage = css`
  width: 320px;
  padding: 16px;
  object-fit: cover;
`;

export const uploadImageButton = css`
  ${UtilityStyles.label02};
  width: auto;
  max-width: 320px;
  height: 62px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px dashed rgba(141, 141, 141);
  color: #0f62fe;
  box-sizing: content-box;
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

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BodyStyles } from "../Typography/Typography";

export const container = (width: string) => css`
  width: ${width};

  color: #161616;
`;

export const button = (open: boolean) => css`
  ${BodyStyles.external.body01}
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border: none;
  border-top: 1px solid #d1d1d1;
  border-bottom: ${open ? "1px solid transparent" : "1px solid #d1d1d1"};
  background-color: #fff;
  box-sizing: border-box;
  :hover {
    background-color: #e8e8e8;
  }
  :focus {
    outline: 2px solid #0f62fe;
    outline-offset: -2px;
  }
`;

export const arrowIcon = (open: boolean) => css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${open ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all linear 0.05s;
`;

export const content = (open: boolean) => css`
  ${BodyStyles.external.body01}
  width: 100%;
  display: ${open ? "block" : "none"};
  padding: 8px 25% 24px 16px;
  border-bottom: ${open ? "1px solid #d1d1d1" : null};
  box-sizing: border-box;
`;

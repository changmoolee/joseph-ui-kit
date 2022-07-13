/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  position: relative;
  display: inline-block;
`;

export const titleAndWarnText = css`
  margin: 5px 0px;
  font-size: 12px;
  color: gray;
`;

export const button = (open: boolean, size: string) => css`
  width: 400px;
  height: ${size === "small" ? "32px" : size === "middle" ? "40px" : "48px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  background-color: #f4f4f4;
  font-size: 14px;
  color: #161616;
  box-sizing: border-box;
  :hover {
    background-color: ${open ? "none" : "#e8e8e8"};
  }
  :focus {
    outline: ${open ? "none" : "2px solid #0f62fe"};
  }
`;

export const arrowIcon = css`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const suggestion = (open: boolean, zIndex: number) => css`
  position: absolute;
  width: 400px;
  height: 200px;
  background-color: #f4f4f4;
  overflow-x: none;
  overflow-y: auto;
  outline: ${open ? "1px solid #0f62fe" : "none"};
  z-index: ${zIndex};
`;

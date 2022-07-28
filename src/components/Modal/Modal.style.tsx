/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const dim = (zIndex: number) => css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: ${zIndex};
  @media screen and (max-width: 672px) {
    display: none;
  }
`;

export const box = (width: string, height: string, zIndex: number) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 150px;
  width: ${width};
  min-height: 150px;
  height: ${height};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  z-index: ${zIndex};
  @media screen and (max-width: 672px) {
    width: 100%;
    height: 100%;
  }
`;

export const header = css`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 48px 0px 16px;
  padding-bottom: 0;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

export const label = css`
  margin-bottom: 4px;
  font-size: 12px;
  color: #525252;
  white-space: nowrap;
`;

export const closeBox = css`
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;
  :hover {
    background-color: #e8e8e8;
  }
  :focus {
    outline: 2px solid #0e62fe;
    outline-offset: -2px;
  }
`;

export const title = css`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #161616;
  white-space: nowrap;
`;

export const description = css`
  width: 100%;
  height: 100%;
`;

export const buttons = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const button = css`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0;
  margin-top: 16px;
  border: 0;
  color: #fff;
  box-sizing: border-box;
`;

export const leftButton = css`
  background-color: #393939;
  :hover {
    opacity: 0.9;
  }
`;
export const rightButton = css`
  background-color: #0f5aec;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`;

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

export const box = (zIndex: number) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  z-index: ${zIndex};
  @media screen and (max-width: 672px) {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

export const header = css`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
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

export const closeBox = css``;

export const title = css`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #161616;
  white-space: nowrap;
`;

export const description = css`
  padding: 0 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const buttons = css`
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

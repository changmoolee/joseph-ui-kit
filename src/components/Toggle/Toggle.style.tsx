/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const labelText = css`
  margin-bottom: 16px;
  font-size: 12px;
  color: #525252;
`;

export const box = css`
  display: flex;
  align-items: center;
`;

export const toggle = (toggleSize: number, toggleOn: boolean) => {
  return css`
    width: ${toggleSize}px;
    height: ${toggleSize / 2}px;
    display: flex;
    align-items: center;
    padding: 0;
    border: 0;
    border-radius: ${toggleSize / 4}px;
    background-color: ${toggleOn ? "#1a8038" : "#8d8d8d"};
    div {
      width: ${toggleSize * 0.375}px;
      height: ${toggleSize * 0.375}px;
      border-radius: 50%;
      background-color: white;
      font-size: 8px;
      color: "black";
      transform: ${toggleOn ? `translate(150%, 0)` : "translate(20% , 0)"};
      transition: 0.15s;
    }
    :focus {
      outline-style: double;
      outline-width: 4px;
      outline-color: #0e62fe;
    }
  `;
};

export const checkBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const toggleText = css`
  margin-left: 10px;
  font-size: 14px;
`;

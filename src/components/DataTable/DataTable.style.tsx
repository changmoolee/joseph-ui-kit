/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BodyStyles, FixedHeadingStyles } from "../Typography/Typography";

export const container = () => css`
  display: inline-flex;
  flex-direction: column;
`;

export const header = () => css`
  ${FixedHeadingStyles.heading03}
  padding: 16px 0px 24px 16px;
  background-color: #f4f4f4;
`;

export const tableContainer = () => css``;

export const tableHead = () => css`
  background-color: #e0e0e0;
`;

export const tableRow = () => css`
  display: flex;
`;

export const tableHeadRadioCell = () =>
  css`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

export const tableRadioCell = () =>
  css`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
  `;

export const tableHeaderCell = (width: string) =>
  css`
    ${FixedHeadingStyles.heading01}
    width: ${width};
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

export const tableBody = () => css`
  ${BodyStyles.bodyCompact01}
  background-color: #f4f4f4;
`;

export const tableBodyRow = (checked: boolean) => css`
  display: flex;
  background-color: ${checked ? "#e8e8e8" : "#f4f4f4"};
  &:hover {
    background-color: #e8e8e8;
    transition: 70ms;
  }
`;

export const tableBodyCell = (width: string) => css`
  width: ${width};
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  color: #525252;
  box-sizing: border-box;
  overflow: hidden;
`;

export const noDataTableRow = () => css``;

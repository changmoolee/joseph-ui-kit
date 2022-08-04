/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BodyStyles } from "../Typography/Typography";

export const container = (
  padding?: string,
  bgColor?: string,
  hover?: { bgColor?: string; color?: string },
  active?: { bgColor?: string; color?: string },
  focus?: {
    bgColor?: string;
    color?: string;
    outline?: string;
    outlineOffset?: string;
  },
  border?: string,
  color?: string,
  size?: string
) => css`
  ${BodyStyles.bodyCompact01}
  height: ${size === "small"
    ? "32px"
    : size === "middle"
    ? "40px"
    : size === "large"
    ? "48px"
    : size === "xlarge"
    ? "64px"
    : size === "2xlarge"
    ? "80px"
    : "32px"};
  display: flex;
  align-items: center;
  padding: ${padding};
  border: ${border || "none"};
  background-color: ${bgColor || "transparent"};
  color: ${color};
  white-space: nowrap;
  cursor: pointer;

  :hover {
    background-color: ${hover && hover.bgColor};
    color: ${hover && hover.color};
  }
  :focus {
    background-color: ${focus && focus.bgColor};
    color: ${focus && focus.color};
    outline: ${focus && focus.outline};
    outline-offset: ${focus && focus.outlineOffset};
  }
  :active {
    background-color: ${active && active.bgColor};
    color: ${active && active.color};
  }
`;

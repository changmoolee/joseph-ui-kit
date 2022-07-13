/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = (
  bgColor: string,
  hover: { bgColor: string; color: string },
  active: { bgColor: string; color: string },
  focus: {
    bgColor: string;
    color: string;
    outline: string;
    outlineOffset: string;
  },
  border: string,
  color: string,
  size: string
) => css`
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
  padding: 3px 60px 3px 12px;
  border: ${border || "none"};
  background-color: ${bgColor || "transparent"};
  font-size: 14px;
  color: ${color};

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
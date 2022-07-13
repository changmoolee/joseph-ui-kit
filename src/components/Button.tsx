/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = (
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

type ButtonProps = {
  name: string;
  bgColor: string;
  border: string;
  color: string;
  size: string;
  tabIndex: number;
  hover: { bgColor: string; color: string };
  active: { bgColor: string; color: string };
  focus: {
    bgColor: string;
    color: string;
    outline: string;
    outlineOffset: string;
  };
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Button = ({
  name = "Primary",
  bgColor = "#0e62fe",
  border,
  color = "white",
  size,
  tabIndex,
  hover = {
    bgColor: "#024fe5",
    color: "white",
  },
  active = {
    bgColor: "#022b9d",
    color: "white",
  },
  focus = {
    bgColor: "#0e62fe",
    color: "white",
    outline: "4px double white",
    outlineOffset: "-4px",
  },
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}: ButtonProps) => {
  return (
    <button
      css={container(bgColor, hover, active, focus, border, color, size)}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {name}
    </button>
  );
};

export default Button;

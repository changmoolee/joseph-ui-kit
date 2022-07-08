/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = (
  bgColor: string,
  hover: { border: string; bgColor: string; color: string },
  active: { border: string; bgColor: string; color: string },
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
    border: ${hover && hover.border};
    background-color: ${hover && hover.bgColor};
    color: ${hover && hover.color};
  }
  :focus {
    border-width: 4px;
    border-style: double;
  }
  :active {
    border: ${active && active.border};
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
  hover: { border: string; bgColor: string; color: string };
  active: { border: string; bgColor: string; color: string };
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Button = ({
  name,
  bgColor,
  border,
  color,
  size,
  tabIndex,
  hover,
  active,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  return (
    <button
      css={container(bgColor, hover, active, border, color, size)}
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

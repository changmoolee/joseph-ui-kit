/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as style from "./Button.style";

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
  name = "Default",
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
      css={style.container(bgColor, hover, active, focus, border, color, size)}
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

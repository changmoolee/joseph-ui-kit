/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as style from "./Button.style";

interface ButtonProps {
  kind?: "default" | "secondary" | "tertiary" | "ghost" | "danger";
  type?: "button" | "submit" | "reset";
  name?: string;
  width?: string;
  position?: "left" | "center" | "right";
  padding?: string;
  bgColor?: string;
  border?: string;
  color?: string;
  size?: "small" | "middle" | "large" | "xlarge" | "2xlarge";
  tabIndex?: number;
  hover?: { bgColor?: string; color?: string };
  active?: { bgColor?: string; color?: string };
  focus?: {
    bgColor?: string;
    color?: string;
    outline?: string;
    outlineOffset?: string;
  };
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  kind = "default",
  type = "button",
  name = "Default",
  width = "auto",
  position = "left",
  padding = "3px 60px 3px 12px",
  bgColor = "#0e62fe",
  border = "none",
  color = "white",
  size = "middle",
  tabIndex = 0,
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
  if (kind === "default") {
    bgColor = "#0e62fe";
    hover = {
      bgColor: "#024fe5",
    };
    focus = {
      outline: "4px double white",
      outlineOffset: "-4px",
    };
    active = {
      bgColor: "#022b9d",
    };
  } else if (kind === "danger") {
    bgColor = "#da1e28";
    border = "none";
    hover = {
      bgColor: "#b91823",
    };
    focus = {
      outline: "4px double white",
      outlineOffset: "-4px",
    };
    active = {
      bgColor: "#760c11",
    };
  } else if (kind === "ghost") {
    bgColor = "white";
    hover = {
      bgColor: "#e8e8e8",
    };
    focus = {
      outline: "2px solid #0e62fe",
      outlineOffset: "1px",
    };
    active = {
      bgColor: "#c5c5c5",
    };
    color = "#0e62fe";
  } else if (kind === "secondary") {
    bgColor = "#393939";
    hover = {
      bgColor: "#424242",
    };
    focus = {
      outline: "4px double white",
      outlineOffset: "-4px",
    };
    active = {
      bgColor: "#6e6e6e",
    };
  } else if (kind === "tertiary") {
    bgColor = "transparent";
    hover = {
      bgColor: "#024fe5",
      color: "white",
    };
    active = {
      bgColor: "#022b9d",
      color: "white",
    };
    focus = {
      bgColor: "#024fe5",
      color: "white",
      outline: "4px double white",
      outlineOffset: "-4px",
    };
    color = "#0e62fe";
    border = "1px solid #0e62fe";
  }

  return (
    <button
      css={style.container(
        width,
        position,
        padding,
        bgColor,
        hover,
        active,
        focus,
        border,
        color,
        size
      )}
      type={type}
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

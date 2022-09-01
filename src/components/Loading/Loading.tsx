/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as style from "./Loading.style";

type LoadingProps = {
  size?: "small" | "middle" | "large";
  active?: boolean;
};

const Loading = ({ size = "middle", active = true }: LoadingProps) => {
  let loadingSize = 40;

  if (size === "small") {
    loadingSize = 40;
  } else if (size === "middle") {
    loadingSize = 48;
  } else if (size === "large") {
    loadingSize = 56;
  }

  return active ? <div css={style.circle(loadingSize)} /> : null;
};

export default Loading;

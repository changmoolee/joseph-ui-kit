/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React from "react";

const circleAnimation = keyframes`
  from {
    transform: translate(0%, 0%) rotate(0);
  }
  to {
    transform: translate(0%, 0%) rotate(360deg);
  }
`;
const circle = (loadingSize: number) => css`
  width: ${loadingSize}px;
  height: ${loadingSize}px;
  border: ${loadingSize / 8}px solid #0e62fe;
  border-top: ${loadingSize / 8}px solid white;
  border-radius: 50%;
  transition: all 0.15s;
  animation-name: ${circleAnimation};
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

type LoadingProps = {
  size: string;
  active: boolean;
};

const Loading = ({ size, active }: LoadingProps) => {
  let loadingSize = 0;

  if (size === "small") {
    loadingSize = 40;
  } else if (size === "middle") {
    loadingSize = 48;
  } else if (size === "large") {
    loadingSize = 56;
  }

  return active ? <div css={circle(loadingSize)} /> : null;
};

export default Loading;

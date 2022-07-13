/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const circleAnimation = keyframes`
  from {
    transform: translate(0%, 0%) rotate(0);
  }
  to {
    transform: translate(0%, 0%) rotate(360deg);
  }
`;
export const circle = (loadingSize: number) => css`
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

/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";
import * as style from "./SkeletonUI.style";

interface SkeletonUIProps extends React.HTMLAttributes<any> {
  width: string;
}

const SkeletonUI: React.FC<SkeletonUIProps> = ({ width, children }) => {
  return <div css={style.container(width)}>{children}</div>;
};

export default SkeletonUI;

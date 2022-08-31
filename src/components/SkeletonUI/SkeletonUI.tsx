/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import * as style from "./SkeletonUI.style";

interface SkeletonUIProps {
  width?: string;
  children?: JSX.Element[] | JSX.Element;
}

const SkeletonUI: React.FC<SkeletonUIProps> = ({
  width = "100%",
  children,
}) => {
  return <div css={style.container(width)}>{children}</div>;
};

export default SkeletonUI;

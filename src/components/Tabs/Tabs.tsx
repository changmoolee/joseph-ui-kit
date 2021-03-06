/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import * as style from "./Tabs.style";

type TabsProps = {
  width?: string;
  height?: string;
  children?: JSX.Element;
};

const Tabs = ({ width = "600px", height = "50px", children }: TabsProps) => {
  const TabListArr = children?.props.children[0].props.children;
  const TabsDescriptionArr = children?.props.children[1].props.children;

  const [clicked, setClicked] = useState(0);

  const handleClick = (index: number) => {
    setClicked(index);
  };

  return (
    <div>
      <div css={style.box(width, height)}>
        {TabListArr &&
          TabListArr.map((tab: any, index: number) => (
            <button
              key={tab + index}
              css={style.item(clicked, index, tab.props.disabled)}
              onClick={() => {
                if (!tab.props.disabled) handleClick(index);
              }}
            >
              <span>{tab.props.children}</span>
            </button>
          ))}
      </div>

      <div>
        {TabsDescriptionArr && TabsDescriptionArr[clicked]?.props.children}
      </div>
    </div>
  );
};

export default Tabs;

type TabsChildProps = {
  children?: JSX.Element | JSX.Element[];
};

type TabProps = {
  children?: string;
};

type TabsDescriptionProps = {
  children?: JSX.Element | JSX.Element[] | string;
};

export const TabList = ({ children }: TabsChildProps) => {
  return <>{children}</>;
};
export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};
export const TabsDescriptions = ({ children }: TabsChildProps) => {
  return <>{children}</>;
};
export const TabsDescription = ({ children }: TabsDescriptionProps) => {
  return <>{children}</>;
};

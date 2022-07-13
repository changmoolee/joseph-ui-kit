/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import * as style from "./Tabs.style";

type TabsProps = {
  width: string;
  height: string;
  children: JSX.Element;
};

const Tabs = ({ width, height, children }: TabsProps) => {
  const TabList = children?.props.children[0].props.children;
  const TabsDescription = children?.props.children[1].props.children;

  const [clicked, setClicked] = useState(0);

  const handleClick = (index: number) => {
    setClicked(index);
  };

  return (
    <div>
      <div css={style.box(width, height)}>
        {TabList &&
          TabList.map((tab: any, index: number) => (
            <button
              key={tab}
              css={style.item(clicked, index)}
              onClick={() => handleClick(index)}
            >
              <span css={style.text}>{tab.props.children}</span>
            </button>
          ))}
      </div>
      <div>{TabsDescription && TabsDescription[clicked]?.props.children}</div>
    </div>
  );
};

export default Tabs;

type TabsChildProps = {
  children: JSX.Element;
};

export const TabList = ({ children }: TabsChildProps) => {
  return <div>{children}</div>;
};
export const Tab = ({ children }: TabsChildProps) => {
  return <div>{children}</div>;
};
export const TabsDescriptions = ({ children }: TabsChildProps) => {
  return <div>{children}</div>;
};
export const TabsDescription = ({ children }: TabsChildProps) => {
  return <div>{children}</div>;
};

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import * as style from "./Tabs.style";

interface TabsProps {
  width?: string;
  height?: string;
  children?: JSX.Element;
}

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
          TabListArr.map((tab: JSX.Element, index: number) => (
            <button
              key={index}
              css={style.item(clicked, index, tab.props.disabled)}
              onClick={() => {
                if (!tab.props.disabled) {
                  handleClick(index);
                  if (tab.props.onClick) {
                    tab.props.onClick();
                  }
                }
              }}
            >
              {tab}
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

interface TabsChildProps {
  children?: JSX.Element | JSX.Element[];
}

interface TabProps {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

interface TabPanelProps {
  children?: JSX.Element | JSX.Element[] | string;
}

export const TabList = ({ children }: TabsChildProps) => {
  return <>{children}</>;
};
export const Tab = ({ children, onClick }: TabProps) => {
  return <span onClick={onClick}>{children}</span>;
};
export const TabPanels = ({ children }: TabsChildProps) => {
  return <>{children}</>;
};
export const TabPanel = ({ children }: TabPanelProps) => {
  return <>{children}</>;
};

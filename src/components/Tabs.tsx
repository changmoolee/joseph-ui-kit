/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

const box = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
  display: flex;
`;
const item = (clicked: number, index: number) => {
  return css`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: none;
    border-top: ${clicked === index ? `2px solid #0e62fe` : null};
    background-color: ${clicked === index ? "#f4f4f4" : "#e0e0e0"};
    span {
      margin-top: ${clicked === index ? "-2px" : "0"};
      font-weight: ${clicked === index ? "800" : "400"};
      color: ${clicked === index ? "black" : "#525253"};
    }
    :hover {
      background-color: #d1d1d1;
    }
  `;
};

const text = css`
  color: white;
  opacity: 0.5;
`;

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
      <div css={box(width, height)}>
        {TabList &&
          TabList.map((tab: any, index: number) => (
            <button
              key={tab}
              css={item(clicked, index)}
              onClick={() => handleClick(index)}
            >
              <span css={text}>{tab.props.children}</span>
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

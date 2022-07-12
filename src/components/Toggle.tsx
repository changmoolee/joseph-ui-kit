/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const label = css``;

const labelText = css`
  margin-bottom: 16px;
  font-size: 12px;
  color: #525252;
`;

const box = css`
  display: flex;
  align-items: center;
`;

const toggle = (toggleSize: number, toggleOn: boolean) => {
  return css`
    width: ${toggleSize}px;
    height: ${toggleSize / 2}px;
    display: flex;
    align-items: center;
    padding: 0;
    border: 0;
    border-radius: ${toggleSize / 4}px;
    background-color: ${toggleOn ? "#1a8038" : "#8d8d8d"};
    div {
      width: ${toggleSize * 0.375}px;
      height: ${toggleSize * 0.375}px;
      border-radius: 50%;
      background-color: white;
      font-size: 8px;
      color: "black";
      transform: ${toggleOn ? `translate(150%, 0)` : "translate(20% , 0)"};
      transition: 0.15s;
    }
    :focus {
      outline-style: double;
      outline-width: 4px;
      outline-color: #0e62fe;
    }
  `;
};

const toggleText = css`
  margin-left: 10px;
  font-size: 14px;
`;

type ToggleProps = {
  size: string;
  hideHeaderlabel: boolean;
  headerlabel: string;
  hideSidelabel: boolean;
  labelA: string;
  labelB: string;
  onClick: () => void;
};

const Toggle = ({
  size,
  hideHeaderlabel,
  headerlabel,
  hideSidelabel,
  labelA,
  labelB,
  onClick = () => {},
}: ToggleProps) => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((toggled) => !toggled);
  };

  let toggleSize = 48;

  if (size === "small") {
    toggleSize = 40;
  } else if (size === "middle") {
    toggleSize = 48;
  } else if (size === "large") {
    toggleSize = 56;
  } else {
    toggleSize = 32;
  }

  return (
    <label css={label}>
      {hideHeaderlabel ? null : <div css={labelText}>{headerlabel}</div>}
      <div css={box}>
        <button
          css={toggle(toggleSize, toggled)}
          onClick={() => {
            onClick();
            handleToggle();
          }}
        >
          <div>
            {size === "mini" ? <FontAwesomeIcon icon={faCheck} /> : null}
          </div>
        </button>
        {hideSidelabel ? null : (
          <span css={toggleText}>{toggled ? labelA : labelB}</span>
        )}
      </div>
    </label>
  );
};

export default Toggle;

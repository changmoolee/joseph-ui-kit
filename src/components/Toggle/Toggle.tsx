/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import * as style from "./Toggle.style";

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
    <label>
      {hideHeaderlabel ? null : <div css={style.labelText}>{headerlabel}</div>}
      <div css={style.box}>
        <button
          css={style.toggle(toggleSize, toggled)}
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
          <span css={style.toggleText}>{toggled ? labelA : labelB}</span>
        )}
      </div>
    </label>
  );
};

export default Toggle;
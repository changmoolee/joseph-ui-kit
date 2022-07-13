/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useRef, useLayoutEffect } from "react";
import * as style from "./DropDown.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const suggestionItem = (
  index: number,
  seletedItem: number,
  size: string,
  disabled: boolean | undefined
) => css`
  width: 100%;
  height: ${size === "small" ? "32px" : size === "middle" ? "40px" : "48px"};
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: ${index === seletedItem ? "#dfdfdf" : "#f4f4f4"};
  opacity: ${disabled ? "0.3" : index === seletedItem ? "1" : "0.5"};
  box-sizing: border-box;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  :hover {
    background-color: ${disabled
      ? "#f4f4f4"
      : index === seletedItem
      ? "#d1d1d1"
      : "#e8e8e8"};
    opacity: ${disabled ? "0.3" : "1"};
  }
  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e8e8e8;
  }
`;

type DropDownProps = {
  items: (
    | {
        id: string;
        text: string;
        disabled: boolean;
      }
    | {
        id: string;
        text: string;
        disabled?: undefined;
      }
  )[];
  label: string;
  hideLabel: boolean;
  warn: string;
  hideWarn: boolean;
  size: string;
  zIndex: number;
};

const DropDown = ({
  items = [{ id: "ExampleId", text: "example" }],
  label,
  hideLabel,
  warn,
  hideWarn,
  size,
  zIndex,
}: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const [seletedItem, setSeletedItem] = useState(0);

  const handleSuggestion = () => {
    setOpen((open) => !open);
  };

  const closeSuggestion = () => {
    setOpen(false);
  };

  const clickItem = (index: number) => {
    setSeletedItem(index);
  };

  const buttonRef = useRef<any>(null);
  const suggestionRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (buttonRef.current !== null && !open) {
      buttonRef.current.focus();
    }
  });

  return (
    <div css={style.container}>
      {hideLabel ? null : (
        <label htmlFor="dropdown" css={style.titleAndWarnText}>
          {label}
        </label>
      )}
      <button
        id="dropdown"
        ref={buttonRef}
        tabIndex={-1}
        css={style.button(open, size)}
        onBlur={closeSuggestion}
        onClick={handleSuggestion}
      >
        <span>{items[seletedItem].text}</span>
        <div css={style.arrowIcon}>
          {open ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div>
      </button>

      {open ? (
        <div ref={suggestionRef} css={style.suggestion(open, zIndex)}>
          {items.map((item, index) => (
            <div
              key={item.id}
              css={suggestionItem(index, seletedItem, size, item.disabled)}
              onMouseDown={() => {
                if (!item.disabled) {
                  clickItem(index);
                }
              }}
            >
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      ) : null}
      {hideWarn ? null : <div css={style.titleAndWarnText}>{warn}</div>}
    </div>
  );
};
export default DropDown;

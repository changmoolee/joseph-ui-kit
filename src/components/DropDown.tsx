/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useRef, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const container = css`
  position: relative;
  display: inline-block;
`;

const titleAndWarnText = css`
  margin: 5px 0px;
  font-size: 12px;
  color: gray;
`;

const button = (open: boolean, size: string) => css`
  width: 400px;
  height: ${size === "small" ? "32px" : size === "middle" ? "40px" : "48px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  background-color: #f4f4f4;
  font-size: 14px;
  color: #161616;
  box-sizing: border-box;
  :hover {
    background-color: ${open ? "none" : "#e8e8e8"};
  }
  :focus {
    outline: ${open ? "none" : "2px solid #0f62fe"};
  }
`;

const arrowIcon = css`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const suggestion = (open: boolean, zIndex: number) => css`
  position: absolute;
  width: 400px;
  height: 200px;
  background-color: #f4f4f4;
  overflow-x: none;
  overflow-y: auto;
  outline: ${open ? "1px solid #0f62fe" : "none"};
  z-index: ${zIndex};
`;

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
    <div css={container}>
      {hideLabel ? null : (
        <label htmlFor="dropdown" css={titleAndWarnText}>
          {label}
        </label>
      )}
      <button
        id="dropdown"
        ref={buttonRef}
        tabIndex={-1}
        css={button(open, size)}
        onBlur={closeSuggestion}
        onClick={handleSuggestion}
      >
        <span>{items[seletedItem].text}</span>
        <div css={arrowIcon}>
          {open ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div>
      </button>

      {open ? (
        <div ref={suggestionRef} css={suggestion(open, zIndex)}>
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
      {hideWarn ? null : <div css={titleAndWarnText}>{warn}</div>}
    </div>
  );
};
export default DropDown;

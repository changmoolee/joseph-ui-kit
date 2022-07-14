/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useRef, useLayoutEffect } from "react";
import * as style from "./DropDown.style";
import Angle from "../../assets/icon/Angle";

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
  items = [
    { id: "id1", text: "text1" },
    { id: "id2", text: "text2" },
  ],
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
        <div css={style.arrowIcon(open)}>
          <Angle />
        </div>
      </button>

      {open ? (
        <div ref={suggestionRef} css={style.suggestion(open, zIndex)}>
          {items.map((item, index) => (
            <div
              key={item.id}
              css={style.suggestionItem(
                index,
                seletedItem,
                size,
                item.disabled
              )}
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

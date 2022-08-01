/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import * as style from "./DropDown.style";
import Angle from "../../assets/icon/Angle";

type DropDownProps = {
  width?: string;
  items?: (
    | {
        id: number | string;
        value: number | string;
        disabled: boolean;
      }
    | {
        id: number | string;
        value: number | string;
        disabled?: undefined;
      }
  )[];
  label?: string;
  hideLabel?: boolean;
  warn?: string;
  hideWarn?: boolean;
  size?: string;
  zIndex?: number;
  onChange?: (data: {
    selectedItem: { id: number | string; value: number | string };
  }) => void;
};

const DropDown = ({
  width = "400px",
  items = [
    { id: "id1", value: "text1" },
    { id: "id2", value: "text2" },
  ],
  label = "label",
  hideLabel = false,
  warn = "warn",
  hideWarn = false,
  size = "middle",
  zIndex = 300,
  onChange = () => {},
}: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const [seletedItem, setSeletedItem] = useState(0);

  const handleSuggestion = () => {
    setOpen((open) => !open);
  };

  const closeSuggestion = () => {
    setOpen(false);
  };

  const clickItem = (
    id: number | string,
    value: number | string,
    index: number
  ) => {
    setSeletedItem(index);
    onChange({ selectedItem: { id: id, value: value } });
  };

  return (
    <div css={style.container}>
      {hideLabel ? null : (
        <label htmlFor="dropdown" css={style.label}>
          {label}
        </label>
      )}
      <button
        id="dropdown"
        tabIndex={-1}
        css={style.button(width, open, size)}
        onBlur={closeSuggestion}
        onClick={handleSuggestion}
      >
        <span>{items[seletedItem].value}</span>
        <div css={style.arrowIcon(open)}>
          <Angle />
        </div>
      </button>

      {open ? (
        <ul css={style.suggestion(width, open, zIndex)}>
          {items.map((item, index) => (
            <li
              key={item.id}
              css={style.suggestionItem(
                index,
                seletedItem,
                size,
                item.disabled
              )}
              onMouseDown={() => {
                if (!item.disabled) {
                  clickItem(item.id, item.value, index);
                }
              }}
            >
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {hideWarn ? null : <div css={style.helperText}>{warn}</div>}
    </div>
  );
};
export default DropDown;

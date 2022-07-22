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
  setSelected?: React.Dispatch<
    React.SetStateAction<{
      id: number | string;
      value: number | string;
    }>
  >;
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
  setSelected = () => {},
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
    setSelected({ id: id, value: value });
  };

  // const buttonRef = useRef<any>(null);

  // useLayoutEffect(() => {
  //   if (buttonRef.current !== null && !open) {
  //     buttonRef.current.focus();
  //   }
  // });

  return (
    <div css={style.container}>
      {hideLabel ? null : (
        <label htmlFor="dropdown" css={style.titleAndWarnText}>
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
        <div css={style.suggestion(width, open, zIndex)}>
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
                  clickItem(item.id, item.value, index);
                }
              }}
            >
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      ) : null}
      {hideWarn ? null : <div css={style.titleAndWarnText}>{warn}</div>}
    </div>
  );
};
export default DropDown;

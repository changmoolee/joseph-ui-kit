/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import * as style from "./Search.style";
import Close from "../../assets/icon/Close";
import Magnifier from "../../assets/icon/Magnifier";

interface SearchProps {
  id?: string;
  width?: string;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  placeholder?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange?: (data: { value: string }) => void;
}

const Search = ({
  id = "search",
  width = "100%",
  disabled = false,
  autoComplete = "off",
  placeholder = "placeholder",
  onKeyDown = () => {},
  onChange = () => {},
}: SearchProps) => {
  const [value, setValue] = useState("");

  const clearInput = () => {
    setValue("");
  };

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange({ value: event.target.value });
  };

  return (
    <label htmlFor={id} css={style.container(width, disabled)}>
      <span css={style.searchIcon}>
        <Magnifier />
      </span>
      <input
        id={id}
        css={style.input}
        disabled={disabled}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={updateValue}
        onKeyDown={onKeyDown}
      />
      {value ? (
        <button
          css={style.clearIcon(disabled)}
          tabIndex={0}
          onClick={clearInput}
        >
          <Close width={16} height={16} />
        </button>
      ) : null}
    </label>
  );
};

export default Search;

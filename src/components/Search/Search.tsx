/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import * as style from "./Search.style";
import Close from "../../assets/icon/Close";
import Magnifier from "../../assets/icon/Magnifier";

type SearchProps = {
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  width?: string;
  disabled?: boolean;
  autoComplete?: string;
  placeholder?: string;
  onKeyUp?: (event: any) => void;
};

const Search = ({
  inputRef,
  width = "100%",
  disabled = false,
  autoComplete = "off",
  placeholder = "placeholder",
  onKeyUp = () => {},
}: SearchProps) => {
  const [value, setValue] = useState("");

  const clearInput = () => {
    setValue("");
  };

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label htmlFor="search" css={style.container(width, disabled)}>
      <span css={style.searchIcon}>
        <Magnifier />
      </span>
      <input
        id="search"
        ref={inputRef}
        css={style.input}
        disabled={disabled}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={updateValue}
        onKeyUp={onKeyUp}
      />
      <span css={style.clearIcon(disabled)} onClick={clearInput}>
        <Close width={16} height={16} />
      </span>
    </label>
  );
};

export default Search;

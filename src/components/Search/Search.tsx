/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import * as style from "./Search.style";
import Close from "../../assets/icon/Close";
import Magnifier from "../../assets/icon/Magnifier";

type SearchProps = {
  defaultValue: string;
  disabled: boolean;
  autoComplete: string;
};

const Search = ({
  defaultValue = "",
  disabled = false,
  autoComplete = "off",
}: SearchProps) => {
  const [value, setValue] = useState("");

  const clearInput = () => {
    setValue("");
  };

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label htmlFor="search" css={style.container(disabled)}>
      <span css={style.searchIcon}>
        <Magnifier />
      </span>
      <input
        id="search"
        css={style.input}
        defaultValue={defaultValue}
        disabled={disabled}
        autoComplete={autoComplete}
        value={value}
        onChange={updateValue}
      />
      <span css={style.clearIcon(disabled)} onClick={clearInput}>
        <Close width={16} height={16} />
      </span>
    </label>
  );
};

export default Search;

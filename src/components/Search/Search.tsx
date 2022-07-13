/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as style from "./Search.style";

type SearchProps = {
  defaultValue: string;
  disabled: boolean;
  autoComplete: string;
};

const Search = ({ defaultValue, disabled, autoComplete }: SearchProps) => {
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
        <FontAwesomeIcon icon={faMagnifyingGlass} />
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
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </label>
  );
};

export default Search;

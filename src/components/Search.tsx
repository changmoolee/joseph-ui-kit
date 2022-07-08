/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const container = (disabled: boolean) => css`
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${disabled ? "0" : "1px solid black"};
  background-color: #f4f4f4;
  color: #525252;
  opacity: ${disabled ? 0.5 : 1};
  cursor: ${disabled ? "not-allowed" : "auto"};
  :focus-within {
    outline-width: 2px;
    outline-style: solid;
    outline-color: #0f62fe;
  }
`;

const searchIcon = css`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clearIcon = (disabled: boolean) => css`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  :hover {
    background-color: ${disabled ? "none" : "#e8e8e8"};
  }
`;

const input = css`
  width: 80%;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: inherit;
`;

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
    <label htmlFor="search" css={container(disabled)}>
      <span css={searchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        id="search"
        css={input}
        defaultValue={defaultValue}
        disabled={disabled}
        autoComplete={autoComplete}
        value={value}
        onChange={updateValue}
      />
      <span css={clearIcon(disabled)} onClick={clearInput}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </label>
  );
};

export default Search;

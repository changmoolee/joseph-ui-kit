/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as style from "./TextInput.styles";
import React, { useState } from "react";

type TextInputProps = {
  width?: string;
  type?: string;
  defaultValue?: string;
  maxLength?: number;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  hideLabel?: boolean;
  warn?: string;
  hideWarn?: boolean;
  onChange?: (data: { value: string }) => void;
};

const TextInput = ({
  width = "100%",
  type = "text",
  defaultValue = "",
  maxLength = 10,
  disabled = false,
  placeholder = "placeholder",
  label = "label",
  warn = "warn",
  hideLabel = false,
  hideWarn = false,
  onChange = () => {},
}: TextInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setValue(value);
    onChange({ value: value });
  };

  return (
    <div css={style.container(width)}>
      {hideLabel ? null : (
        <label htmlFor="textinput">
          <div css={style.label(disabled)}>{label}</div>
        </label>
      )}
      <div css={style.wrapper(disabled)}>
        <input
          id="textinput"
          css={style.input}
          type={type}
          maxLength={maxLength}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          onChange={updateValue}
        />
      </div>
      {hideWarn ? null : <div css={style.helperText(disabled)}>{warn}</div>}
    </div>
  );
};

export default TextInput;

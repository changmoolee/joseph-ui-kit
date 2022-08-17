/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as style from "./TextArea.styles";
import React, { useState } from "react";

type TextAreaProps = {
  width?: string;
  defaultValue?: string;
  rows?: number;
  maxLength?: number;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  hideLabel?: boolean;
  warn?: string;
  hideWarn?: boolean;
  onChange?: (data: { value: string }) => void;
};

const TextArea = ({
  width = "100%",
  defaultValue = "",
  rows = 5,
  maxLength = 1000,
  disabled = false,
  placeholder = "placeholder",
  label = "label",
  warn = "warn",
  hideLabel = false,
  hideWarn = false,
  onChange = () => {},
}: TextAreaProps) => {
  const [value, setValue] = useState(defaultValue);

  const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setValue(value);
    onChange({ value: value });
  };
  return (
    <div css={style.container(width)}>
      {hideLabel ? null : (
        <label htmlFor="textarea">
          <div css={style.label(disabled)}>{label}</div>
        </label>
      )}
      <div css={style.wrapper(disabled)}>
        <textarea
          id="textarea"
          css={style.textarea}
          rows={rows}
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

export default TextArea;

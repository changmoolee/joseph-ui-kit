/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as style from "./TextArea.styles";
import React, { useState } from "react";

type TextAreaProps = {
  width?: string;
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
  const [value, setValue] = useState("");

  const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setValue(value);
    onChange({ value: value });
  };
  return (
    <>
      {hideLabel ? null : (
        <label htmlFor="textarea">
          <div css={style.label(disabled)}>{label}</div>
        </label>
      )}
      <div css={style.container(width, disabled)}>
        <textarea
          id="textarea"
          css={style.textarea}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          onChange={updateValue}
        />
      </div>
      {hideWarn ? null : <div css={style.helperText(disabled)}>{warn}</div>}
    </>
  );
};

export default TextArea;

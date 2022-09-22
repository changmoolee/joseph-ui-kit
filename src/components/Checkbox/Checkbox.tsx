/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as style from "./Checkbox.styles";
import React, { useState, useEffect } from "react";
import Checked from "../../assets/icon/Checked";

interface CheckboxProps {
  id: number | null;
  hideLabel: boolean;
  disabled: boolean;
  onChange: (data: { id: number | null; checked: boolean }) => void;
}

const Checkbox = ({ id, hideLabel, disabled, onChange }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked((checked) => !checked);
  };

  const onKeyDownEnter = (
    event: React.KeyboardEvent<SVGSVGElement | HTMLDivElement>
  ) => {
    if (event.key === "Enter") {
      handleCheckbox();
    }
  };

  useEffect(() => {
    onChange({ id, checked });
  }, [checked]);

  return (
    <>
      {disabled ? (
        <div css={style.container}>
          <div css={style.disabledCheckbox} />
          {hideLabel ? null : (
            <span css={style.disabledCheckboxLabel}>Checkbox label</span>
          )}
        </div>
      ) : checked ? (
        <label css={style.container} htmlFor={String(id)}>
          <div css={style.checkedCheckbox}>
            <Checked onKeyDown={onKeyDownEnter} />
          </div>
          {hideLabel ? null : (
            <span css={style.checkboxLabel}>Checkbox label</span>
          )}
        </label>
      ) : (
        <label css={style.container} htmlFor={String(id)}>
          <div css={style.uncheckedCheckbox} onKeyDown={onKeyDownEnter} />
          {hideLabel ? null : (
            <span css={style.checkboxLabel}>Checkbox label</span>
          )}
        </label>
      )}
      <input
        id={String(id)}
        css={style.hiddenInput}
        type="checkbox"
        onChange={handleCheckbox}
      />
    </>
  );
};

export default Checkbox;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as style from "./Checkbox.styles";
import React, { useState, useEffect } from "react";
import Checked from "../../assets/icon/Checked";

interface dataTypes {
  id: string | number;
  checked: boolean;
}

interface CheckboxProps {
  id?: string | number;
  checked?: boolean;
  label?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: (data: dataTypes) => void;
}

const Checkbox = ({
  id,
  checked: checkedInputFromOutside,
  label,
  hideLabel,
  disabled,
  onClick = () => {},
  onChange,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleClickCheckbox = () => {
    onClick();
  };

  const handleCheckbox = () => {
    setChecked((checked) => !checked);
  };

  const onKeyDownEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleCheckbox();
    }
  };

  useEffect(() => {
    if (checkedInputFromOutside) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [checkedInputFromOutside]);

  useEffect(() => {
    if (id && onChange) {
      onChange({ id, checked });
    }
  }, [checked]);

  return (
    <>
      {disabled ? (
        <div css={style.container}>
          <div css={style.disabledCheckbox} />
          {hideLabel ? null : (
            <span css={style.disabledCheckboxLabel}>{label}</span>
          )}
        </div>
      ) : checked ? (
        <label css={style.container} htmlFor={"checkbox" + id}>
          <div
            css={style.checkedCheckbox}
            tabIndex={0}
            onKeyDown={onKeyDownEnter}
          >
            <Checked />
          </div>
          {hideLabel ? null : <span css={style.checkboxLabel}>{label}</span>}
        </label>
      ) : (
        <label css={style.container} htmlFor={"checkbox" + id}>
          <div
            css={style.uncheckedCheckbox}
            tabIndex={0}
            onKeyDown={onKeyDownEnter}
          />
          {hideLabel ? null : <span css={style.checkboxLabel}>{label}</span>}
        </label>
      )}
      <input
        id={"checkbox" + id}
        css={style.hiddenInput}
        type="checkbox"
        onClick={handleClickCheckbox}
        onChange={handleCheckbox}
      />
    </>
  );
};

export default React.memo(Checkbox);

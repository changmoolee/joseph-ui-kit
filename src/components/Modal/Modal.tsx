/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as style from "./Modal.style";
import Close from "../../assets/icon/Close";
import { useKeyEscPress } from "../../hooks/useKeyEscPress";
import Button from "../Button/Button";

interface ModalProps {
  open?: boolean;
  closeModal?: () => void;
  width?: string;
  height?: string;
  label?: string;
  title?: string;
  children?: JSX.Element | JSX.Element[];
  firstButtonDisabled?: boolean;
  firstButtonText?: string;
  firstButtonOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  secondaryButtonDisabled?: boolean;
  secondaryButtonText?: string;
  secondaryButtonOnClick?:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined;
  zIndex?: number;
}

const Modal = ({
  open = true,
  closeModal = () => {},
  width = "500px",
  height = "auto",
  label = "Account resources",
  title = "title",
  children = <></>,
  firstButtonDisabled = false,
  firstButtonText = "Confirm",
  firstButtonOnClick = () => {},
  secondaryButtonDisabled = false,
  secondaryButtonText = "Cancel",
  secondaryButtonOnClick = () => {},
  zIndex = 300,
}: ModalProps) => {
  useKeyEscPress(closeModal);
  return open ? (
    <>
      <div css={style.dim(zIndex)} onClick={closeModal} />
      <div css={style.box(width, height, zIndex)}>
        <div css={style.header}>
          <div css={style.label}>{label}</div>
          <div css={style.title}>{title}</div>
        </div>
        <button css={style.closeBox} tabIndex={0} onClick={closeModal}>
          <Close width={20} height={20} />
        </button>
        <div css={style.description}>{children}</div>
        <div css={style.buttons}>
          {secondaryButtonDisabled ? null : (
            <Button
              kind="secondary"
              name={secondaryButtonText}
              width="50%"
              size="large"
              onClick={secondaryButtonOnClick}
            />
          )}
          {firstButtonDisabled ? null : (
            <Button
              kind="default"
              name={firstButtonText}
              width="50%"
              size="large"
              onClick={firstButtonOnClick}
            />
          )}
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as style from "./Modal.style";
import Close from "../../assets/icon/Close";
import { useKeyEscPress } from "../../hooks/useKeyEscPress";

type ModalProps = {
  open?: boolean;
  closeModal?: () => void;
  width?: string;
  height?: string;
  label?: string;
  title?: string;
  children?: JSX.Element | JSX.Element[];
  firstButtonDisabled?: boolean;
  firstButtonText?: string;
  firstButtonOnClick?: () => void;
  secondaryButtonDisabled?: boolean;
  secondaryButtonText?: string;
  secondaryButtonOnClick?: () => void;
  zIndex?: number;
};

const Modal = ({
  open = true,
  closeModal = () => {},
  width = "500px",
  height = "300px",
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
        <button css={style.closeBox} onClick={closeModal}>
          <Close width={20} height={20} />
        </button>
        <div css={style.description}>{children}</div>
        <div css={style.buttons}>
          {secondaryButtonDisabled ? null : (
            <button
              css={[style.button, style.leftButton]}
              onClick={secondaryButtonOnClick}
            >
              {secondaryButtonText}
            </button>
          )}
          {firstButtonDisabled ? null : (
            <button
              css={[style.button, style.rightButton]}
              onClick={firstButtonOnClick}
            >
              {firstButtonText}
            </button>
          )}
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;

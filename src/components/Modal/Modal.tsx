/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as style from "./Modal.style";
import Close from "../../assets/icon/Close";

type ModalProps = {
  open: boolean;
  closeModal: () => void;
  title: string;
  children: JSX.Element;
  firstButtonDisabled: boolean;
  firstButtonText: string;
  firstButtonOnClick: () => void;
  secondaryButtonDisabled: boolean;
  secondaryButtonText: string;
  secondaryButtonOnClick: () => void;
  zIndex: number;
};

const Modal = ({
  open = true,
  closeModal = () => {},
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
  return open ? (
    <>
      <div css={style.dim(zIndex)} onClick={closeModal} />
      <div css={style.box(zIndex)}>
        <div css={style.header}>
          <div css={style.label}>Account resources</div>
          <div css={style.title}>{title}</div>
        </div>
        <button css={style.closeBox} onClick={closeModal}>
          <Close width={20} height={20} />
        </button>
        <article css={style.description}>{children}</article>
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

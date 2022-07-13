/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import * as style from "./Modal.style";

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
  open,
  closeModal,
  title,
  children,
  firstButtonDisabled,
  firstButtonText,
  firstButtonOnClick = () => {},
  secondaryButtonDisabled,
  secondaryButtonText,
  secondaryButtonOnClick = () => {},
  zIndex,
}: ModalProps) => {
  return open ? (
    <>
      <div css={style.dim(zIndex)} onClick={closeModal} />
      <div css={style.box(zIndex)}>
        <div css={style.header}>
          <div css={style.style.title}>
            <div css={style.label}>Account resources</div>
            {title}
          </div>
          <div css={style.closeBox} onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <article css={style.style.description}>{children}</article>
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

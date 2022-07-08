/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const dim = (zIndex: number) => css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: ${zIndex};
  @media screen and (max-width: 672px) {
    display: none;
  }
`;

const box = (zIndex: number) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  z-index: ${zIndex};
  @media screen and (max-width: 672px) {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

const header = css`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const label = css`
  margin-bottom: 4px;
  font-size: 12px;
  color: #525252;
  white-space: nowrap;
`;

const closeBox = css``;

const style = {
  title: css`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #161616;
    white-space: nowrap;
  `,
  description: css`
    padding: 0 16px;
    margin-top: 8px;
    margin-bottom: 16px;
  `,
};

const buttons = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const button = css`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0;
  margin-top: 16px;
  border: 0;
  color: white;
  box-sizing: border-box;
`;

const leftButton = css`
  background-color: #393939;
  :hover {
    opacity: 0.9;
  }
`;
const rightButton = css`
  background-color: #0f5aec;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`;

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
  firstButtonOnClick,
  secondaryButtonDisabled,
  secondaryButtonText,
  secondaryButtonOnClick,
  zIndex,
}: ModalProps) => {
  return open ? (
    <>
      <div css={dim(zIndex)} onClick={closeModal} />
      <div css={box(zIndex)}>
        <div css={header}>
          <div css={style.title}>
            <div css={label}>Account resources</div>
            {title}
          </div>
          <div css={closeBox} onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <article css={style.description}>{children}</article>
        <div css={buttons}>
          {secondaryButtonDisabled ? null : (
            <button css={[button, leftButton]} onClick={secondaryButtonOnClick}>
              {secondaryButtonText}
            </button>
          )}
          {firstButtonDisabled ? null : (
            <button css={[button, rightButton]} onClick={firstButtonOnClick}>
              {firstButtonText}
            </button>
          )}
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;

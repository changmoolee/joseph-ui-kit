/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const container = css`
  width: 100%;
  font-size: 14px;
  color: #161616;
`;

const button = (open: boolean) => css`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border: none;
  border-top: 1px solid #d1d1d1;
  border-bottom: ${open ? null : "1px solid #d1d1d1"};
  background-color: white;
  box-sizing: border-box;
  :hover {
    background-color: #e8e8e8;
  }
  :focus {
    outline: 2px solid #0f62fe;
  }
`;

const arrowIcon = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const content = (open: boolean) => css`
  width: 100%;
  padding: 8px 25% 24px 16px;
  border-bottom: ${open ? "1px solid #d1d1d1" : null};
  box-sizing: border-box;
`;

type AccordionProps = {
  title: string;
  children: JSX.Element;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const handleAccordion = () => {
    setOpen((open) => !open);
  };

  return (
    <div css={container}>
      <button tabIndex={-1} css={button(open)} onClick={handleAccordion}>
        {title}
        <div css={arrowIcon}>
          {open ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div>
      </button>
      {open ? <div css={content(open)}>{children}</div> : null}
    </div>
  );
};

export default Accordion;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as style from "./Accordion.style";
import React, { useState } from "react";
import Angle from "../../assets/icon/Angle";

interface AccordionProps {
  width?: string;
  title?: string;
  children?: JSX.Element | JSX.Element[];
}

const Accordion = ({
  width = "100%",
  title = "title",
  children,
}: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const handleAccordion = () => {
    setOpen((open) => !open);
  };

  return (
    <div css={style.container(width)}>
      <button tabIndex={0} css={style.button(open)} onClick={handleAccordion}>
        {title}
        <div css={style.arrowIcon(open)}>
          <Angle />
        </div>
      </button>
      <div css={style.content(open)}>{children}</div>
    </div>
  );
};

export default Accordion;

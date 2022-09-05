import { Global, css } from "@emotion/react";
import reset from "./reset";
import { BodyStyles } from "../components/Typography/Typography";

const style = css`
  ${reset}
  body {
    ${BodyStyles.body02}
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;

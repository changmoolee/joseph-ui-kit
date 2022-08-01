import { Global, css } from "@emotion/react";
import reset from "./reset";

const style = css`
  ${reset}
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;

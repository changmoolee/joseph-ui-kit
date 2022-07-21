import { Global, css } from "@emotion/react";

const style = css`
  html,
  body,
  div,
  span,
  button {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;

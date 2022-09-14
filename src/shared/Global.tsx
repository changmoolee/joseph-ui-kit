import { Global, css } from "@emotion/react";
import reset from "./reset";
import { BodyStyles } from "../components/Typography/Typography";

const style = css`
  ${reset}
  body {
    ${BodyStyles}// mdx 문서 폰트 적용
  }
  h1 {
    margin-bottom: 40px;
  } // mdx 문서 작성 시 h1 공간 확보
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;

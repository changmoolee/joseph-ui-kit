import * as React from "react";
import { SVGProps } from "react";

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="cds--toggle__check"
    width={6}
    height={5}
    fill={"#1a8038"}
    {...props}
  >
    <path d="M2.2 2.7 5 0l1 1-3.8 4L0 2.7l1-1.2z" />
  </svg>
);

export default Check;

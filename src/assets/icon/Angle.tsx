import * as React from "react";
import { SVGProps } from "react";

const Angle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Open menu"
    width={16}
    height={16}
    {...props}
  >
    <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
    <title>{"Open menu"}</title>
  </svg>
);

export default Angle;

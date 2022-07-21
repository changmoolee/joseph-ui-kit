import * as React from "react";
import { SVGProps } from "react";

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z" />
    <title>{"close Modal"}</title>
  </svg>
);

export default Close;

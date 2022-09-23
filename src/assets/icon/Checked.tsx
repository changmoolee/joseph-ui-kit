import * as React from "react";
import { SVGProps } from "react";

const Checked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <path
      d="M3.721 7.984a.637.637 0 0 1-.452-.188l-2.132-2.13a.64.64 0 0 1 .9-.9l1.68 1.678 4.236-4.237a.64.64 0 1 1 .9.9l-4.69 4.69a.637.637 0 0 1-.442.187Z"
      fill="#fff"
    />
  </svg>
);

export default Checked;

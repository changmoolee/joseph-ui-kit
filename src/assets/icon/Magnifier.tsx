import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width={16}
    height={16}
    aria-hidden="true"
    className="cds--search-magnifier-icon"
    {...props}
  >
    <path d="M15 14.3 10.7 10c1.9-2.3 1.6-5.8-.7-7.7S4.2.7 2.3 3 .7 8.8 3 10.7c2 1.7 5 1.7 7 0l4.3 4.3.7-.7zM2 6.5C2 4 4 2 6.5 2S11 4 11 6.5 9 11 6.5 11 2 9 2 6.5z" />
  </svg>
);

export default SvgComponent;

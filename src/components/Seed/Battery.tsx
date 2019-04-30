import * as React from "react";
import { createSvgIcon } from "src/components/SvgIcon";

export const Battery = createSvgIcon(
  <g fill="#FFF" stroke="#333" strokeMiterlimit="10">
    <path d="M20.5 18.5h58v68h-58z" />
    <path d="M82.5 88.5a1 1 0 0 1-1 1h-64a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h64a1 1 0 0 1 1 1v1z" />
    <path d="M26.5 16v-4.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1V16" />
    <path d="M34 15.5h-8" />
    <path d="M81.5 15.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-64a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h64z" />
    <path d="M65 15.5v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4" />
    <path d="M73 15.5h-8" />
    <g stroke-linecap="round">
      <path d="M26 28h10" />
      <path d="M31.5 23v10" />
    </g>
    <path stroke-linecap="round" d="M63 28.5h10" />
    <path d="M51.68 52.5l4.35-15.7L34.4 59.5h13.75l-4.27 15.7 21.71-22.7z" />
  </g>
);

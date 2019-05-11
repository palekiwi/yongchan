import * as React from "react";
import styled from "styled-components";
import { color } from "src/theme";

interface Props {
  fill?: string;
  opacity?: number;
  size?: number;
}

const Svg = styled.svg<Props>`
  opacity: ${props => props.opacity};
  & path {
    stroke: none;
    fill-rule: nonzero;
    fill-opacity: 1;
    fill: ${props => props.fill && color(props.fill)} !important;
  }
`;

export const IDIcon: React.SFC<Props> = ({ opacity, fill, size }) => (
  <Svg
    width={size || "100%"}
    height={size || "100%"}
    fill={fill}
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
  >
    <path fill="#250012" d="M10.122 10h220v214h-220z" />
    <path
      fill="#FF408C"
      d="M0 0v234h240V0H0zm10 10h220v214H10V10zM87.75 162.18c0 .99-.165 1.32-1.32 1.32H71.07c-.99 0-1.32-.495-1.32-1.32V54.82c0-.99.495-1.32 1.32-1.32h15.525c.825 0 1.155.33 1.155 1.155V162.18zm17.69-38.727c0-23.926 15.785-42.57 41.03-42.57 2.145 0 3.3 0 5.28.164V54.49c0-.66.494-.99.99-.99h16.27c.824 0 .99.33.99.825v93.547c0 2.805 0 6.27.494 10.065 0 .66-.21.826-.87 1.156-8.58 4.125-17.655 5.94-26.234 5.94-22.11 0-37.95-13.696-37.95-41.58zm46.31-26.235c-1.484-.66-3.465-.99-5.94-.99-12.87 0-21.89 9.9-21.89 26.4 0 18.81 9.185 26.4 20.734 26.4 2.475 0 5.116-.33 7.096-1.155V97.218z"
    />
  </Svg>
);

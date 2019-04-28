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

export const LambdaIcon: React.SFC<Props> = ({ opacity, fill, size }) => (
  <Svg
    width={size || "100%"}
    height={size || "100%"}
    fill={fill}
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 364.707 364.707"
  >
    <path d="m223.864,272.729l-38.608,-97.848l-56.603,89.184l-35.487,0l79.052,-127.654l-8.875,-25.229l-30.781,0l0,-30.062l52.691,0l60.521,153.899l26.608,-8.668l8.867,29.813l-57.385,16.565z" />
  </Svg>
);

import * as React from "react";
import styled from "styled-components";
import { color } from "src/theme";

export interface SvgHanziProps {
  viewBox?: string;
  fill?: string;
}

const Svg = styled.svg<{ fill?: string }>`
  & path {
    fill: ${props => (props.fill ? color(props.fill) : "currentColor")};
  }
`;

const SvgHanzi: React.SFC<SvgHanziProps> = ({ viewBox, fill, children }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox={viewBox}
    fill={fill}
  >
    {children}
  </Svg>
);

SvgHanzi.defaultProps = {
  viewBox: "0 0 1024 1024",
};

export { SvgHanzi };

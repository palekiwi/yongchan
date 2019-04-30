import * as React from "react";
import styled from "styled-components";
import { color } from "src/theme";

interface SvgIconProps {
  viewBox?: string;
  fill?: string;
}

const Svg = styled.svg<{ fill?: string }>`
  & path {
    stroke: none;
    fill-rule: nonzero;
    fill-opacity: 1;
    fill: ${props => props.fill && color(props.fill)} !important;
  }
`;

const SvgIcon: React.SFC<SvgIconProps> = ({ viewBox, fill, children }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill={fill}>
    {children}
  </Svg>
);

SvgIcon.defaultProps = {
  viewBox: "0 0 100 100",
};

export { SvgIcon };

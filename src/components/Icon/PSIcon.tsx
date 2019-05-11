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

export const PSIcon: React.SFC<Props> = ({ opacity, fill, size }) => (
  <Svg
    width={size || "100%"}
    height={size || "100%"}
    fill={fill}
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 234"
  >
    <path fill="#001D26" d="M10,10h220v214H10V10z" />
    <path
      fill="#00C8FF"
      d="M0,0v234h240V0H0z M10,10h220v214H10V10z M58,54.8c0-0.7,1.4-1.2,2.2-1.2c6.4-0.3,15.9-0.5,25.8-0.5
	c27.7,0,38.5,15.2,38.5,34.7c0,25.4-18.4,36.3-41,36.3c-3.8,0-5.1-0.2-7.8-0.2v38.4c0,0.8-0.3,1.2-1.2,1.2H59.2
	c-0.8,0-1.2-0.3-1.2-1.2L58,54.8L58,54.8z M75.8,107.9c2.3,0.2,4.1,0.2,8.1,0.2c11.7,0,22.7-4.1,22.7-20c0-12.7-7.9-19.1-21.2-19.1
	c-4,0-7.8,0.2-9.6,0.3V107.9L75.8,107.9z M161.8,96c-7.9,0-10.6,4-10.6,7.3c0,3.6,1.8,6.1,12.4,11.6c15.7,7.6,20.6,14.9,20.6,25.6
	c0,16-12.2,24.6-28.7,24.6c-8.7,0-16.2-1.8-20.5-4.3c-0.7-0.3-0.8-0.8-0.8-1.6v-14.7c0-1,0.5-1.3,1.2-0.8c6.3,4.1,13.5,5.9,20.1,5.9
	c7.9,0,11.2-3.3,11.2-7.8c0-3.6-2.3-6.8-12.4-12c-14.2-6.8-20.1-13.7-20.1-25.2c0-12.9,10.1-23.6,27.6-23.6c8.6,0,14.6,1.3,17.9,2.8
	c0.8,0.5,1,1.3,1,2v13.7c0,0.8-0.5,1.3-1.5,1C174.8,97.7,168.3,96,161.8,96L161.8,96z"
    />
  </Svg>
);

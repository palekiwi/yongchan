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
  & .first {
    fill: rgb(69, 59, 97);
  }
  & .second {
    fill: rgb(95, 82, 134);
  }
  & .third {
    fill: rgb(142, 80, 138);
  }
  & .fourth {
    fill: rgb(142, 80, 138);
  }
  & path {
    stroke: none;
    fill-rule: nonzero;
    fill-opacity: 1;
    fill: ${props => props.fill && color(props.fill)} !important;
  }
`;

export const HaskellIcon: React.SFC<Props> = ({ opacity, fill, size }) => (
  <Svg
    width={size || "100%"}
    height={size || "100%"}
    fill={fill}
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 481.8897 340.1574"
  >
    <defs>
      <clipPath id="clip1">
        <path d="M 0 340.15625 L 481.890625 340.15625 L 481.890625 0 L 0 0 L 0 340.15625 Z M 0 340.15625 " />
      </clipPath>
    </defs>
    <g id="surface0">
      <g clipPath="url(#clip1)" clipRule="nonzero">
        <path
          className="first"
          d="M 0 340.15625 L 113.386719 170.078125 L 0 0 L 85.039062 0 L 198.425781 170.078125 L 85.039062 340.15625 L 0 340.15625 Z M 0 340.15625 "
        />
        <path
          className="second"
          d="M 113.386719 340.15625 L 226.773438 170.078125 L 113.386719 0 L 198.425781 0 L 425.195312 340.15625 L 340.15625 340.15625 L 269.292969 233.859375 L 198.425781 340.15625 L 113.386719 340.15625 Z M 113.386719 340.15625 "
        />
        <path
          className="third"
          d="M 387.402344 240.945312 L 349.609375 184.253906 L 481.890625 184.25 L 481.890625 240.945312 L 387.402344 240.945312 Z M 387.402344 240.945312 "
        />
        <path
          className="fourth"
          d="M 330.710938 155.90625 L 292.914062 99.214844 L 481.890625 99.210938 L 481.890625 155.90625 L 330.710938 155.90625 Z M 330.710938 155.90625 "
        />
      </g>
    </g>
  </Svg>
);

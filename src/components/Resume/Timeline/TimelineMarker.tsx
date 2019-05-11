import * as React from "react";
import { Marker } from "./timelineStyles";
import styled from "styled-components";

const flags = {
  tw: require("../../../images/flags/tw.svg"),
  il: require("../../../images/flags/il.svg"),
  gb: require("../../../images/flags/gb.svg"),
  cn: require("../../../images/flags/cn.svg"),
  th: require("../../../images/flags/th.svg"),
};

interface Props {
  country: string;
}

const Flag = styled.div<Props>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background: ${props => `url(${flags[props.country]})`};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0.5)
    );
  }
`;

const TimelineMarker: React.SFC<Props> = ({ country }) => (
  <Marker>
    <Flag country={country} />
  </Marker>
);

export { TimelineMarker };

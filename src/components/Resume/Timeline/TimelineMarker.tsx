import * as React from "react";
import { Marker } from "./timelineStyles";

interface Props {
  country: string;
}

const flags = {
  tw: require("../../../images/flags/tw.svg"),
  il: require("../../../images/flags/il.svg"),
  gb: require("../../../images/flags/gb.svg"),
  cn: require("../../../images/flags/cn.svg"),
  th: require("../../../images/flags/th.svg"),
};

const TimelineMarker: React.SFC<Props> = ({ country }) => (
  <Marker>
    <div
      style={{
        borderRadius: "50%",
        width: "100%",
        height: "100%",
        background: `url(${flags[country]})`,
      }}
    />
  </Marker>
);

export { TimelineMarker };

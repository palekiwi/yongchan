import * as React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export interface Props {}

const IndexPage: React.SFC<Props> = () => {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer offset={1} style={{ backgroundColor: "red" }} />
        <ParallaxLayer offset={2} style={{ backgroundColor: "blue" }} />
      </Parallax>
    </div>
  );
};

export default IndexPage;

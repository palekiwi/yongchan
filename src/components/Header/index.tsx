import * as React from "react";
import { ExpandingCircleMenu } from "src/components/ExpandingCircleMenu";

interface Props {}

const Header: React.SFC<Props> = () => {
  return (
    <div>
      <ExpandingCircleMenu bg={"white.light"} fg={"primary.main"} />
    </div>
  );
};

export { Header };

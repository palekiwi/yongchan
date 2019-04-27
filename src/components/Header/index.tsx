import * as React from "react";
import { MenuButton } from "src/components/MenuButton";

interface Props {}

const Header: React.SFC<Props> = () => {
  const [open, toggle] = React.useState(false);
  return (
    <div>
      <MenuButton
        open={open}
        toggleMenu={() => toggle(!open)}
        bg={"white.light"}
        fg={"primary.main"}
      />
    </div>
  );
};

export { Header };

import * as React from "react";
import { ExpandingCircle } from "./ExpandingCircle";
import { NavWrapper } from "./styles";

interface Props {
  title?: string;
  navItems?: { label: React.ReactNode; to: string }[];
  bg: string;
  fg: string;
}

export const ExpandingCircleMenu: React.SFC<Props> = ({
  title,
  navItems,
  bg,
  fg,
}) => {
  const [open, toggle] = React.useState(false);
  const toggleMenu = () => toggle(c => !c);
  return (
    <ExpandingCircle bg={bg} fg={fg} open={open} toggleMenu={toggleMenu}>
      <NavWrapper>content</NavWrapper>
    </ExpandingCircle>
  );
};

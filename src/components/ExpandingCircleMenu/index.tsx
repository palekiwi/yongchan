import * as React from "react";
import { ExpandingCircle } from "./ExpandingCircle";
import { NavWrapper } from "./styles";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { trafalgar, paragon } from "src/theme/typography";

interface Props {
  title?: string;
  navItems?: { label: React.ReactNode; to: string }[];
  bg: string;
  fg: string;
}

const Title = styled.div`
  ${trafalgar};
  text-transform: uppercase;
  font-weight: ${weight("bold")};
  color: ${color("primary.main")};
  & span:last-child {
    color: ${color("grey.400")};
  }
`;
const Item = styled.div`
  ${paragon};
  text-transform: uppercase;
`;

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
      <NavWrapper>
        <Title>
          <span>Yong</span>
          <span>Chan</span>
        </Title>
        <Item>Resume</Item>
        <Item>Projects</Item>
        <Item>Playground</Item>
        <Item>About</Item>
      </NavWrapper>
    </ExpandingCircle>
  );
};

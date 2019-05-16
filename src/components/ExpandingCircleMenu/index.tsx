import * as React from "react";
import { ExpandingCircle } from "./ExpandingCircle";
import { NavWrapper } from "./styles";
import styled from "styled-components";
import { weight, color } from "src/theme";
import { trafalgar, paragon } from "src/theme/typography";
import { Link } from "src/components/Link";
import { useEscKey } from "src/hooks/useEscKey";

interface Props {
  title: [string, string];
  navItems: { label: React.ReactNode; to: string }[];
  bg?: string;
  fg?: string;
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

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Item = styled(Link)`
  ${paragon};
  text-transform: uppercase;
  font-weight: ${weight("thin")};
  color: ${color("text.main")};
  cursor: pointer;
  transition: 400ms ease-out;
  letter-spacing: 1.4px;
  &:hover {
    color: ${color("text.dark")};
  }
`;

export const ExpandingCircleMenu: React.SFC<Props> = ({
  title,
  navItems,
  bg,
  fg,
}) => {
  const [open, toggle] = React.useState(false);
  const toggleMenu = () => toggle(c => !c);
  useEscKey(open, toggle);
  return (
    <ExpandingCircle
      title={title}
      bg={bg || "white.light"}
      fg={fg || "grey.400"}
      open={open}
      toggleMenu={toggleMenu}
    >
      <NavWrapper>
        <Title>
          <span>{title[0]}</span>
          <span>{title[1]}</span>
        </Title>
        <Nav>
          {navItems.map(l => (
            <Item
              onClick={() => setTimeout(toggleMenu, 200)}
              key={l.to}
              to={l.to}
            >
              {l.label}
            </Item>
          ))}
        </Nav>
      </NavWrapper>
    </ExpandingCircle>
  );
};

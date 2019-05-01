import * as React from "react";
import { ExpandingCircleMenu } from "src/components/ExpandingCircleMenu";
import styled from "styled-components";
import { color } from "src/theme";

interface Props {
  pr: number;
}

const Wrapper = styled.div<{ pr: number }>`
  background: ${color("white.light")};
  border-bottom: 1px solid ${color("divider.light")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-right: ${props => props.pr}px;
  height: 60px;
  position: fixed;
  z-index: 99;
`;

const Header: React.SFC<Props> = ({ pr }) => {
  return (
    <Wrapper pr={pr}>
      <ExpandingCircleMenu bg={"white.light"} fg={"primary.main"} />
    </Wrapper>
  );
};

export { Header };

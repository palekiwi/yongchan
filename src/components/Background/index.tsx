import * as React from "react";
import styled from "styled-components";
import { color } from "src/theme";
import { Container } from "src/components/Container";

interface Props {}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  padding-right: 15px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Pane = styled.div`
  border-left: 1px solid ${color("divider.light")};
  height: 100vh;
  width: 25%;
  &:last-child {
    border-right: 1px solid ${color("divider.light")};
  }
`;

const Background: React.SFC<Props> = () => (
  <Wrapper>
    <Container>
      <Inner>
        <Pane />
        <Pane />
        <Pane />
        <Pane />
      </Inner>
    </Container>
  </Wrapper>
);

export { Background };

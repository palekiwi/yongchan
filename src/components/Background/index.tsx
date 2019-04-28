import * as React from "react";
import styled, { css } from "styled-components";
import { color, space } from "src/theme";
import { Container } from "src/components/Container";
import { HaskellIcon, ReactIcon } from "src/components/Icon";

interface Props {}

const fg = "divider.light";

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
  z-index: 0;
`;

const Pane = styled.div`
  position: relative;
  border-left: 1px solid ${color(fg)};
  height: 100vh;
  width: 25%;
  &:last-child {
    border-right: 1px solid ${color(fg)};
  }
`;

const Icon = styled.div<{ top: string; last?: boolean }>`
  position: absolute;
  top: ${props => props.top};
  border-radius: 50%;
  background: ${color("background.main")};
  padding: ${space(1)};
  width: ${space(4)};
  height: ${space(4)};
  ${props =>
    props.last
      ? css`
          right: -${space(3)};
        `
      : css`
          left: -${space(3)};
        `}
`;

const Background: React.SFC<Props> = () => (
  <Wrapper>
    <Container>
      <Inner>
        <Pane>
          <Icon top="30em">
            <HaskellIcon fill="divider.light" />
          </Icon>
        </Pane>
        <Pane>
          <Icon top="45em">
            <ReactIcon fill="divider.light" />
          </Icon>
        </Pane>
        <Pane>
          <Icon top="60em">
            <HaskellIcon fill="divider.light" />
          </Icon>
        </Pane>
        <Pane>
          <Icon top="24em">
            <ReactIcon fill="divider.light" />
          </Icon>
          <Icon top="34em" last>
            <HaskellIcon fill="divider.light" />
          </Icon>
        </Pane>
      </Inner>
    </Container>
  </Wrapper>
);

export { Background };

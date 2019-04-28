import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { color, space } from "src/theme";
import { desktop } from "src/theme/media";
import { Container } from "src/components/Container";
import {
  HaskellIcon,
  ReactIcon,
  TypescriptIcon,
  LambdaIcon,
} from "src/components/Icon";
import { config, useSpring, animated as a } from "react-spring";

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
  position: relative;
`;

const Icons = styled(a.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
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

const Icon = styled.div<{ top: string; left: string }>`
  display: ${props => (props.left === "0%" || props.left === "100%") && "none"};
  position: absolute;
  top: ${props => props.top};
  background: ${color("background.main")};
  padding: ${space(1)};
  width: ${space(4)};
  height: ${space(4)};
  left: calc(${props => props.left} - ${space(3)});
  border: 1px solid ${color(fg)};
  border-radius: 50%;
  ${desktop(css`
    display: block;
  `)}
`;

const Background: React.SFC<Props> = () => {
  const [{ st }, set] = useSpring(() => ({ st: 0, config: config.molasses }));
  const onScroll = useCallback(e => {
    set({ st: window.pageYOffset / 2 });
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const interp = st.interpolate(o => `translate(0,${o + 25}px)`);
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Icons style={{ transform: interp }}>
            <Icon left="0%" top="20em">
              <HaskellIcon fill={"divider.main"} />
            </Icon>
            <Icon left="25%" top="35em">
              <ReactIcon fill={"divider.main"} />
            </Icon>
            <Icon left="50%" top="28em">
              <LambdaIcon fill={"divider.main"} />
            </Icon>
            <Icon left="75%" top="62em">
              <TypescriptIcon fill={"divider.main"} />
            </Icon>
            <Icon left="100%" top="15em">
              <ReactIcon fill={"divider.main"} />
            </Icon>
          </Icons>
          <Pane />
          <Pane />
          <Pane />
          <Pane />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export { Background };

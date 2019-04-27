import * as React from "react";
import { Logo } from "src/components/Logo";
import styled, { keyframes } from "styled-components";
import { color } from "src/theme";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 9999;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${color("white.light")};
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 2s ease-in;
`;

const SplashScreen: React.SFC<{}> = () => (
  <Overlay>
    <Wrapper>
      <Logo width={200} />
    </Wrapper>
  </Overlay>
);

export { SplashScreen };

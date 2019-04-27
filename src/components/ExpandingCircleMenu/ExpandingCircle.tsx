import React, { useRef } from "react";
import styled from "styled-components";
import { color } from "src/theme";
import { MenuButton } from "src/components/MenuButton";
import { animated, useTransition, useChain, useSpring } from "react-spring";

type BG = { bg: string };

const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Shape = styled(animated.div)<BG>`
  transform-origin: 50% 50%;
  background: ${props => color(props.bg)};
  position: absolute;
  top: 10px;
  right: 10px;
  height: 46px;
  transform: scale(1);
  width: 46px;
  border-radius: 50%;
  z-index: 2;
`;

const MenuWrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: scale(1);
  overflow: hidden;
`;

const Content = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0;
`;

const Overlay = styled(animated.div)<BG>`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${props => color(props.bg)};
`;

interface Props {
  open: boolean;
  toggleMenu(): void;
  bg: string;
  fg: string;
}

export const ExpandingCircle: React.SFC<Props> = ({
  open,
  toggleMenu,
  bg,
  fg,
  children,
}) => {
  const transRef = useRef();
  const springRef = useRef();
  const transitions = useTransition(open, null, {
    from: { opacity: 0, sc: 1 },
    enter: { opacity: 1, sc: window.innerWidth / 48 },
    leave: { opacity: 0, sc: 1 },
    ref: transRef,
  });
  const spring = useSpring({
    color: open ? "green" : "red",
    opacity: open ? 1 : 0,
    ref: springRef,
  });
  useChain(open ? [transRef, springRef] : [springRef, transRef], [0.4, 0.8]);
  return (
    <div>
      <ButtonWrapper>
        <MenuButton bg={bg} fg={fg} open={open} toggleMenu={toggleMenu} />
      </ButtonWrapper>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <MenuWrapper key={key}>
              <Overlay bg={bg} style={{ opacity: props.opacity }} />
              <Shape
                bg={bg}
                style={{
                  transform: props.sc.interpolate(x => `scale(${x})`),
                }}
              />
              <Content style={spring}>{children}</Content>
            </MenuWrapper>
          )
      )}
    </div>
  );
};

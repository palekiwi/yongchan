import React, { useRef } from "react";
import styled from "styled-components";
import { color } from "src/theme";
import { MenuButton } from "src/components/MenuButton";
import { animated, useTransition, useChain, useSpring } from "react-spring";

type BG = { bg: string };

const Wrapper = styled.div`
  z-index: 0;
  position: fixed;
  top: 10px;
  right: 10px;
`;

const Shape = styled(animated.div)<BG>`
  transform-origin: 50% 50%;
  background: ${props => color(props.bg)};
  position: absolute;
  top: 0px;
  right: 0px;
  height: 46px;
  transform: scale(1);
  width: 46px;
  border-radius: 50%;
  z-index: 0;
`;

const ShapeOverlay = styled(Shape)<BG>`
  z-index: 3;
  transform: scale(0);
`;

const MenuWrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: scale(1);
  overflow: hidden;
  z-index: 1;
`;

const Content = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Overlay = styled(animated.div)<BG>`
  z-index: 0;
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
  const sor = useRef();
  const shr = useRef();
  const tr = useRef();
  const so = useSpring({
    ref: sor,
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(0)",
  });
  const sh = useSpring({
    ref: shr,
    transform: open ? `scale(${window.innerWidth / 46})` : "scale(1)",
    opacity: open ? 1 : 0,
  });
  const transitions = useTransition(open, null, {
    ref: tr,
    from: { opacity: 0, transform: "translateX(10px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(10px)" },
  });
  useChain(
    open ? [sor, shr, tr] : [tr, sor, shr],
    open ? [0.4, 0.4, 0.6] : [0, 0.4, 0.4]
  );
  return (
    <Wrapper>
      <MenuButton bg={bg} fg={fg} open={open} toggleMenu={toggleMenu} />
      <ShapeOverlay bg={fg} style={so} />
      <Shape bg={bg} style={{ transform: sh.transform }} />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <MenuWrapper key={key}>
              <Overlay style={{ opacity: sh.opacity }} bg={bg} />
              <Content style={props}>{children}</Content>
            </MenuWrapper>
          )
      )}
    </Wrapper>
  );
};

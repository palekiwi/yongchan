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
  top: 0px;
  right: 0px;
  height: 46px;
  transform: scale(1);
  width: 46px;
  border-radius: 50%;
  z-index: 1;
`;

const ShapeOverlay = styled(Shape)<BG>`
  z-index: 2;
  top: 0px;
  right: 0px;
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
`;

const Content = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
  const sor = useRef();
  const shr = useRef();
  const tr = useRef();
  const transitions = useTransition(open, null, {
    ref: tr,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const so = useSpring({
    ref: sor,
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(0)",
  });
  const sh = useSpring({
    ref: shr,
    transform: open ? `scale(${window.innerWidth / 46})` : "scale(1)",
  });
  useChain(open ? [sor, shr, tr] : [shr, tr, sor], [0.4, 0.4, 0.4]);
  return (
    <div>
      <ButtonWrapper>
        <MenuButton bg={bg} fg={fg} open={open} toggleMenu={toggleMenu} />
        <ShapeOverlay bg={fg} style={so} />
        <Shape bg={bg} style={sh} />
      </ButtonWrapper>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <MenuWrapper key={key}>
              <Overlay style={props} bg={bg} />
              <Content>{children}</Content>
            </MenuWrapper>
          )
      )}
    </div>
  );
};

import React, { useRef } from "react";
import styled from "styled-components";
import { color, weight } from "src/theme";
import { MenuButton } from "src/components/MenuButton";
import { animated, useTransition, useChain, useSpring } from "react-spring";
import { greatPrimer } from "src/theme/typography";

type BG = { bg: string };

const width = 44;

const Wrapper = styled.div`
  z-index: 0;
  position: relative;
`;

const Shape = styled(animated.div)<BG>`
  transform-origin: 50% 50%;
  background: ${props => color(props.bg)};
  position: absolute;
  top: 0px;
  left: 0px;
  height: ${width}px;
  transform: scale(1);
  width: ${width}px;
  border-radius: 50%;
  z-index: 0;
`;

const Title = styled.div<{ open: boolean }>`
  ${greatPrimer};
  cursor: pointer;
  height: 100%;
  vertical-align: center;
  margin-bottom: 0;
  position: absolute;
  top: 0;
  left: ${width / 2}px;
  padding-top: 2px;
  display: flex;
  align-items: center;
  height: ${width}px;
  font-weight: ${weight("bold")};
  text-transform: uppercase;
  & span {
    transition: all 400ms ease-out ${props => (props.open ? 0 : 600)}ms;
    transition-property: opacity, padding-left, padding-right;
    opacity: ${props => (props.open ? 0 : 1)};
    position: absolute;
  }
  & span:first-child {
    padding-right: ${props => (props.open ? 0 : width / 2 + 4)}px;
    transform: translateX(-100%);
    color: ${color("primary.main")};
  }
  & span:last-child {
    padding-left: ${props => (props.open ? 0 : width / 2 + 4)}px;
    color: ${color("grey.400")};
  }
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
    transform: open ? `scale(${window.innerWidth / width})` : "scale(1)",
    opacity: open ? 1 : 0,
  });
  const transitions = useTransition(open, null, {
    ref: tr,
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
  });
  useChain(
    open ? [sor, shr, tr] : [tr, sor, shr],
    open ? [0.4, 0.4, 0.6] : [0, 0.4, 0.4]
  );
  return (
    <Wrapper>
      <Title open={open} onClick={toggleMenu}>
        <span>Yong</span>
        <span>Chan</span>
      </Title>
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

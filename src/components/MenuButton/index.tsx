import * as React from "react";
import styled, { css } from "styled-components";
import { color, shadow } from "src/theme";

type Props = { open: boolean; bg: string };

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 3;
`;

const Shape = styled.div<Props>`
  position: relative;
  background: ${props => color(props.bg)};
  box-shadow: ${shadow(1)};
  width: 46px;
  height: 46px;
  border-radius: 50%;
  transition: all 400ms ease-out 400ms;
  ${props =>
    props.open &&
    css`
      transition-delay: 0ms;
    `}
`;

const ShapeOverlay = styled.div<Props>`
  position: absolute;
  background: ${props => color(props.bg)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(${props => (props.open ? 1 : 0)});
  border-radius: 50%;
  transition: all 400ms ease-out 400ms;
`;

const Lines = styled.div`
  position: absolute;
  top: 18px;
  left: 15px;
  width: 46px;
  height: 46px;
`;

const Line = styled.div<Props>`
  position: absolute;
  background: ${props => color(props.bg)};
  width: 16px;
  height: 2px;
  border-radius: 2px;
`;

const First = styled(Line)<Props>`
  top: 0px;
  background: ${props => color(props.bg)};
  transform-origin: 0% 0%;
  transition: all 400ms ease-out 400ms;
  transform: scaleX(1) translateX(0px);
  ${props =>
    props.open &&
    css`
      transform: scaleX(0) translateX(-15px);
      transition-delay: 0ms;
    `}
`;

const Second = styled(Line)`
  top: 5px;
  background: ${props => color(props.bg)};
  transform-origin: 100% 100%;
  transition: all 400ms ease-out 400ms;
  transform: scaleX(1) translateX(0);
  ${props =>
    props.open &&
    css`
      transform: scaleX(0) translateX(15px);
      transition-delay: 0ms;
    `}
`;

const Third = styled(First)`
  background: ${props => color(props.bg)};
  top: 10px;
`;
const Left = styled(Line)`
  top: -5px;
  transform-origin: 0% 0%;
  background: ${props => color(props.bg)};
  transition: all 400ms linear 0ms;
  transform: rotate(45deg) scaleX(0) translateY(0px);
  ${props =>
    props.open &&
    css`
      transform: rotate(45deg) scaleX(1) translateX(5px);
      transition-delay: 500ms;
    `}
`;

const Right = styled(Line)`
  top: -5px;
  left: 2px;
  background: ${props => color(props.bg)};
  transform-origin: 100% 100%;
  transition: all 400ms linear 0ms;
  transform: rotate(-45deg) scaleX(0) translateY(0px);
  ${props =>
    props.open &&
    css`
      transform: rotate(-45deg) scaleX(1) translateX(-5px);
      transition-delay: 400ms;
    `}
`;

interface ButtonProps {
  open: boolean;
  toggleMenu(): void;
  bg: string;
  fg: string;
}

export const MenuButton: React.SFC<ButtonProps> = ({
  toggleMenu,
  open,
  bg,
  fg,
}) => (
  <Wrapper onClick={toggleMenu}>
    <Shape open={open} bg={bg}>
      <ShapeOverlay open={open} bg={fg} />
    </Shape>
    <Lines>
      <First bg={fg} open={open} />
      <Second bg={fg} open={open} />
      <Third bg={fg} open={open} />
    </Lines>
    <Lines>
      <Left bg={bg} open={open} />
      <Right bg={bg} open={open} />
    </Lines>
  </Wrapper>
);

import { color, space, radius } from "src/theme";
import styled, { css } from "styled-components";
import { phone, desktop } from "src/theme/media";

const lineColor = color("secondary.main");

export const Line = styled.div`
  width: 100%;
  padding: ${space(3)} 0;
  position: relative;
  &::before {
    content: "";
    background: ${lineColor};
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 17px;
    ${desktop(css`
      left: 50%;
      margin-left: 0;
    `)}
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 12px;
    width: 10px;
    height: 10px;
    background: ${lineColor};
    border-radius: 50%;
    ${desktop(css`
      left: 50%;
      margin-left: -5px;
    `)}
  }
`;

export const Dir = styled.div`
  position: absolute;
  top: 0;
  left: 13px;
  ${desktop(css`
    left: 50%;
    transform: translateX(-5px);
  `)}
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 4px 8px 4px;
  border-color: transparent transparent ${lineColor} transparent;
`;

export const Marker = styled.div`
  position: absolute;
  top: 14px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${color("grey.300")};
  overflow: hidden;
  border: 1px solid ${lineColor};
  padding: 2px;
  ${desktop(css`
    transform: translateX(-17px);
  `)}
`;

export const WrapperLeft = css`
  left: 0%;
  padding-right: 40px;
  padding-left: 0px;
  ${Marker} {
    left: 100%;
  }
`;

export const WrapperRight = css`
  left: 50%;
  padding-left: 40px;
  padding-right: 0px;
  ${Marker} {
    left: 0;
  }
`;

interface Props {
  i: number;
}

export const Wrapper = styled.div<Props>`
  ${WrapperRight}
  position: relative;
  left: 0%;
  width: 100%;
  padding: 0;
  margin-top: ${props => (props.i === 0 ? 0 : space(3))};
  padding-left: 58px;
  ${desktop(css<Props>`
    ${props => (props.i % 2 !== 0 ? WrapperRight : WrapperLeft)};
    margin-top: ${props => (props.i === 0 ? 0 : -50)}px;
    width: 50%;
  `)}
`;

export const arrow = css`
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  top: 22px;
  z-index: 2;
  border: medium solid white;
`;

export const rightArrow = css`
  &::before {
    ${arrow}
    left: 100%;
    margin-left: 0;
    border-width: 10px 0px 10px 10px;
    border-color: transparent transparent transparent white;
`;

export const leftArrow = css`
  &::before {
    ${arrow}
    left: 0%;
    margin-left: -10px;
    border-width: 10px 10px 10px 0px;
    border-color: transparent white transparent transparent;
`;

export const leftCard = css`
  ${leftArrow}
`;

const rightCard = css`
  ${rightArrow}
`;

export const EventCard = styled.div<Props>`
  overflow: visible;
  position: relative;
  border-radius: ${radius(2)};
  border-bottom: 2px solid ${color("divider.dark")};
  width: 100%;
  background: ${color("background.light")};
  ${phone(css<Props>`
    ${leftCard}
  `)}
  ${desktop(css<Props>`
    ${props => (props.i % 2 !== 0 ? leftCard : rightCard)}
  `)}
`;

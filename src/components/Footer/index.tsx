import * as React from "react";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { Container } from "src/components/Container";
import { longPrimer, trafalgar } from "src/theme/typography";

interface Props {}

const Wrapper = styled.footer`
  background: ${color("primary.dark")};
  z-index: 0;
`;

const Inner = styled.div`
  padding: ${space(4)} ${space(3)};
`;

const Brandname = styled.div`
  ${trafalgar};
  font-weight: ${weight("bold")};
  text-transform: uppercase;
  margin-bottom: ${space(2)};
  & span:first-child {
    color: ${color("primary.main")};
  }
  & span:last-child {
    color: ${color("grey.400")};
  }
`;

const Copyright = styled.div`
  ${longPrimer};
  margin-bottom: 0;
  color: ${color("grey.400")};
`;

const Footer: React.SFC<Props> = () => (
  <Wrapper>
    <Container>
      <Inner>
        <Brandname>
          <span>Yong</span>
          <span>Chan</span>
        </Brandname>
        <Copyright>Copyright 2019 Li Yong Chan</Copyright>
      </Inner>
    </Container>
  </Wrapper>
);

export { Footer };

import * as React from "react";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { trafalgar, greatPrimer } from "src/theme/typography";
import { Container } from "../Container";

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: "dark" | "light";
  before?: React.ReactNode;
  align?: "center" | "left" | "right";
}

const Wrapper = styled.div`
  background: ${color("primary.dark")};
  padding: ${space(4)};
  text-align: center;
`;

const Title = styled.h1`
  ${trafalgar};
  color: ${color("white.light")};
  font-weight: ${weight("bold")};
  margin-bottom: 0;
`;
const Subtitle = styled.h5`
  ${greatPrimer};
  color: ${color("grey.400")};
  margin-bottom: 0;
`;

export const PageHeader: React.SFC<Props> = ({ title, subtitle }) => (
  <Wrapper>
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  </Wrapper>
);

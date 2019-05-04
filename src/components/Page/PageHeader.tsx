import * as React from "react";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { trafalgar, greatPrimer } from "src/theme/typography";
import { Container } from "src/components/Container";

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: "dark" | "light";
  before?: React.ReactNode;
  align?: "center" | "left" | "right";
}

const Wrapper = styled.div`
  padding: ${space(4)} 0;
  text-align: center;
`;

const Title = styled.h1`
  ${trafalgar};
  color: ${color("primary.dark")};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  font-weight: ${weight("bold")};
  text-transform: uppercase;
  letter-spacing: 1.4px;
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

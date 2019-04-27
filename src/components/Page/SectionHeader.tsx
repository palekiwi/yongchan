import * as React from "react";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { paragon, longPrimer } from "src/theme/typography";
import { Container } from "../Container";

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

const Wrapper = styled.div`
  background: ${color("grey.200")};
  padding: ${space(4)};
  text-align: center;
`;

const Title = styled.h1`
  ${paragon};
  color: ${color("text.dark")};
  font-weight: ${weight("bold")};
  margin-bottom: 0;
`;
const Subtitle = styled.h5`
  ${longPrimer};
  color: ${color("grey.400")};
  margin-bottom: 0;
`;

export const SectionHeader: React.SFC<Props> = ({ title, subtitle }) => (
  <Wrapper>
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  </Wrapper>
);

import * as React from "react";
import { Logo } from "src/components/Logo";
import styled from "styled-components";
import { space } from "src/theme";
import { Container } from "src/components/Container";

interface Props {
  title: string;
  phone: string;
  email: string;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${space(3)};
`;

const Title = styled.h1``;
const Subtitle = styled.p``;

const UnderConstruction: React.SFC<Props> = ({ title, phone, email }) => (
  <Page>
    <Container>
      <Inner>
        <Logo width={200} variant="dark" />
        <Title>Under Construction</Title>
        <Subtitle>This site will be available soon.</Subtitle>
      </Inner>
    </Container>
  </Page>
);

export { UnderConstruction };

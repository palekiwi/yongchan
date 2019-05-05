import * as React from "react";
import { Profile } from "./Profile";
import { PageHeader } from "src/components/Page";
import { ResumePhoto } from "./ResumePhoto";
import { Timeline } from "./Timeline";
import { Container } from "src/components/Container";
import styled, { css } from "styled-components";
import { color, space } from "src/theme";
import { tablet } from "src/theme/media";
import { experience } from "src/data/experience";

interface Props {}

const Section = styled.div`
  padding-bottom: ${space(2)};
  background: linear-gradient(
    45deg,
    ${color("divider.light")},
    ${color("divider.main")}
  );
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  ${tablet(css`
    flex-direction: row;
  `)}
`;

const Photo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${space(1)};
  ${tablet(css`
    margin-bottom: 0;
    width: 25%;
    margin-left: 12.5%;
  `)}
`;

const ProfileWrapper = styled.div`
  width: 100%;
  ${tablet(css`
    width: 50%;
  `)}
`;

const ResumePage: React.SFC<Props> = ({}) => (
  <Section>
    <PageHeader title="Resume" />
    <Container>
      <Inner>
        <Photo>
          <ResumePhoto />
        </Photo>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
      </Inner>
    </Container>
    <Container>
      <Timeline events={experience} />
    </Container>
  </Section>
);

export { ResumePage };

import * as React from "react";
import { Profile } from "./Profile";
import { PageHeader } from "src/components/Page";
import { ResumePhoto } from "./ResumePhoto";
import { Timeline } from "./Timeline";
import { Education } from "./Education";
import { Container } from "src/components/Container";
import styled, { css } from "styled-components";
import { color, space, weight } from "src/theme";
import { tablet, desktop } from "src/theme/media";
import { experience } from "src/data/experience";
import { education } from "src/data/education";

interface Props {}

const Page = styled.div`
  padding-bottom: ${space(2)};
  background: linear-gradient(
    75deg,
    transparent,
    ${color("divider.main")},
    ${color("divider.light")}
  );
`;

const Section = styled.section`
  padding-top: ${space(2)};
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

const TimelineWrapper = styled.div`
  width: 100%;
  padding: 0 ${space(2)};
  ${tablet(css`
    width: 75%;
    margin-left: 12.5%;
    padding-left: calc(12.5% - 17px);
  `)}
  ${desktop(css`
    width: 100%;
    margin-left: 0;
    transform: translateX(0);
    padding: 0 ${space(2)};
  `)}
`;

const EducationWrapper = styled.div`
  width: 100%;
  padding: 0 ${space(2)};
  ${tablet(css`
    width: 75%;
    margin-left: 12.5%;
    padding-left: calc(12.5% - 17px);
  `)}
  ${desktop(css`
    width: 100%;
    margin-left: 0;
    transform: translateX(0);
    padding: 0 ${space(2)};
  `)}
`;

const SectionTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: ${weight("normal")};
  background: linear-gradient(
    90deg,
    transparent,
    ${color("divider.light")},
    transparent
  );
  color: ${color("text.main")};
  padding: ${space(3)};
  margin: ${space(3)} ${space(2)};
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
`;

const ResumePage: React.SFC<Props> = ({}) => (
  <Page>
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
    <Section>
      <Container>
        <SectionTitle>Employment</SectionTitle>
        <TimelineWrapper>
          <Timeline events={experience} />
        </TimelineWrapper>
      </Container>
    </Section>
    <Section>
      <Container>
        <SectionTitle>Education</SectionTitle>
        {education.map(item => (
          <EducationWrapper key={item.date}>
            <Education item={item} />
          </EducationWrapper>
        ))}
      </Container>
    </Section>
    <Section>
      <Container>
        <SectionTitle>Skills</SectionTitle>
      </Container>
    </Section>
  </Page>
);

export { ResumePage };

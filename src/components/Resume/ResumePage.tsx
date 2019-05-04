import * as React from "react";
import { Profile } from "./Profile";
import { PageHeader } from "src/components/Page";
import { Container } from "src/components/Container";
import styled, { css } from "styled-components";
import { color, space } from "src/theme";
import { tablet } from "src/theme/media";
import { PhotoWhole } from "src/components/Photo";

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
  ${tablet(css`
    width: 25%;
    margin-left: 12.5%;
  `)}
`;

const Pic = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid ${color("divider.main")};
  margin: 0 auto;
  background: ${color("grey.100")};
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
          <Pic>
            <PhotoWhole />
          </Pic>
        </Photo>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
      </Inner>
    </Container>
  </Section>
);

export { ResumePage };

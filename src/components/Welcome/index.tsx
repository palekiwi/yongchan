import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { color } from "src/theme";
import { Image } from "src/components/Image";
import { Container } from "src/components/Container";

interface Props {}

const Root = styled.div``;

const Inner = styled.div`
  display: flex;
  background: ${color("background.main")};
`;

const Photo = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: calc(100vh - 60px);
  overflow: hidden;
`;
const Content = styled.div`
  width: 100%;
  background: ${color("text.dark")};
`;

interface Data {
  profileHalf: any;
}

const Welcome: React.SFC<Props> = () => {
  const data: Data = useStaticQuery(graphql`
    query WelcomeQuery {
      profileHalf: file(relativePath: { eq: "profile-half.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <Inner>
          <Photo>
            <Image
              imgStyle={{ objectPosition: "100% 0%" }}
              style={{ height: "100%", width: "auto" }}
              fluid={data.profileHalf}
            />
          </Photo>
          <Content />
        </Inner>
      </Container>
    </Root>
  );
};

export { Welcome };

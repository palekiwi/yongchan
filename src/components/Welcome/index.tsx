import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import { desktop } from "src/theme/media";
import { color, space } from "src/theme";
import { Image } from "src/components/Image";
import { Container } from "src/components/Container";
import { Yong, Chan } from "src/components/Hanzi";

interface Props {}

const Root = styled.div`
  background: linear-gradient(45deg, transparent, ${color("divider.light")});
  border-bottom: 1px solid ${color("divider.light")};
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  ${desktop(css`
    flex-direction: row;
  `)}
`;

const Photo = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: calc(100vh - 60px);
  overflow: hidden;
`;

const PhotoFull = styled(Image)`
  display: none;
  width: 100%;
  height: 100%;
  ${desktop(css`
    display: block;
  `)}
`;

const PhotoHalf = styled(Image)`
  width: auto;
  height: 100%;
  max-height: calc(100vh - 60px);
  ${desktop(css`
    display: none;
  `)}
`;

const Box = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${space(3)};
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  ${desktop(css`
    position: static;
  `)}
`;

const Characters = styled.div`
  display: flex;
  flex-direction: column;
  ${desktop(css`
    flex-direction: row;
  `)}
`;

interface Data {
  profileHalf: any;
  profile: any;
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
      profile: file(relativePath: { eq: "profile-whole.png" }) {
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
          <Content>
            <Characters>
              <Box>
                <Yong size={200} fill="primary.light" />
              </Box>
              <Box>
                <Chan size={200} fill="primary.light" />
              </Box>
            </Characters>
          </Content>
          <Photo>
            <PhotoFull
              imgStyle={{ objectPosition: "100% 0%" }}
              fluid={data.profile}
            />
            <PhotoHalf
              imgStyle={{ objectFit: "contain", objectPosition: "100% 0%" }}
              fluid={data.profileHalf}
            />
          </Photo>
        </Inner>
      </Container>
    </Root>
  );
};

export { Welcome };

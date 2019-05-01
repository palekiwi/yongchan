import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import { desktop } from "src/theme/media";
import { color, space, weight } from "src/theme";
import { royal } from "src/theme/typography";
import { Image } from "src/components/Image";
import { Container } from "src/components/Container";
import { Yong, Chan } from "src/components/Hanzi";

interface Props {}

const Root = styled.div`
  position: relative;
  background: linear-gradient(
    45deg,
    ${color("divider.light")},
    rgba(41, 47, 54, 0.35)
  );
`;

const Light = styled.div`
  position: absolute;
  top: 0;
  right: 0%;
  width: 50%;
  height: 100%;
  background: radial-gradient(
    closest-side,
    ${color("white.dark")},
    transparent
  );
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  ${desktop(css`
    flex-direction: row;
  `)}
`;

const Photo = styled.div`
  width: 100%;
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

const Content = styled.div`
  z-index: 1;
  position: absolute;
  padding: ${space(3)} 0;
  width: 50%;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  ${desktop(css`
    position: static;
    width: 100%;
  `)}
`;

const Characters = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 25%;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${color("grey.100")};
  ${desktop(css`
    flex-direction: row;
    margin-left: 0%;
    width: 100%;
  `)};
`;

const Box = styled.div`
  padding: ${space(4)};
  width: 100%;
`;

const Character = styled.div`
  height: 100%;
  border: 1px solid currentColor;
  padding: ${space(4)};
`;

const Title = styled.div`
  display: none;
  ${royal};
  padding: ${space(3)};
  border: 1px solid ${color("white.main")};
  text-transform: uppercase;
  font-weight: ${weight("bold")};
  color: ${color("primary.main")};
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
      <Light />
      <Container>
        <Inner>
          <Characters>
            <Box>
              <Character>
                <Yong />
              </Character>
            </Box>
            <Box>
              <Character>
                <Chan />
              </Character>
            </Box>
          </Characters>
          <Content>
            <Title>Frontend</Title>
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

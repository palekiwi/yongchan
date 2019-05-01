import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import { desktop } from "src/theme/media";
import { color, space, weight } from "src/theme";
import { royal } from "src/theme/typography";
import { Image } from "src/components/Image";
import { Container } from "src/components/Container";
import { Button } from "src/components/Button";
import { Yong, Chan } from "src/components/Hanzi";
import Faker from "faker";

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
  width: 100%;
  ${desktop(css`
    flex-direction: row;
    align-items: center;
  `)}
`;

const Photo = styled.div`
  z-index: 1;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 60px);
  overflow: hidden;
  ${desktop(css`
    width: 50%;
  `)}
`;

const PhotoFull = styled(Image)`
  display: none;
  ${desktop(css`
    display: block;
    width: 100%;
    height: 100%;
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
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  padding: ${space(2)};
  border: 1px solid red;
  align-items: center;
  ${desktop(css`
    position: static;
    padding: ${space(4)};
    width: 50%;
  `)}
`;

const Characters = styled.div`
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0;
  width: 100%;
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
  padding: ${space(3)};
  &:nth-child(2) {
    padding-top: 0;
  }
  width: 100%;
  height: 50%;
  ${desktop(css`
    padding: ${space(4)};
    height: 100%;
    width: 100%;
    &:nth-child(2) {
      padding-top: ${space(4)};
    }
  `)};
`;

const Character = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, transparent, ${color("divider.light")});
  border: 1px solid currentColor;
  padding: ${space(4)};
`;

const Title = styled.div`
  ${royal};
  padding: ${space(4)};
  text-transform: uppercase;
  font-weight: ${weight("bold")};
  color: ${color("text.dark")};
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
            <Title>{Faker.lorem.words()}</Title>
            <Button contained variant="white">
              More
            </Button>
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

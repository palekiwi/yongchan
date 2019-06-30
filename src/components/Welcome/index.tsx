import * as React from "react";
import styled, { css } from "styled-components";
import { tablet, desktop } from "src/theme/media";
import { color, space, weight } from "src/theme";
import { foolscap, trafalgar } from "src/theme/typography";
import { Container } from "src/components/Container";
import { Button } from "src/components/Button";
import { Yong, Chan } from "src/components/Hanzi";
import { PhotoWhole, PhotoHalf } from "src/components/Photo";

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

const ProfileWhole = styled(PhotoWhole)`
  display: none;
  ${desktop(css`
    display: block;
    width: 100%;
    height: 100%;
  `)}
`;

const ProfileHalf = styled(PhotoHalf)`
  width: auto;
  height: 100%;
  max-height: calc(100vh - 60px);
  ${desktop(css`
    display: none;
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

const Content = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: ${space(4)};
  align-items: flex-start;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.18);
  ${tablet(css`
    padding: ${space(5)};
  `)}
  ${desktop(css`
    position: static;
    padding: ${space(5)};
    width: 50%;
    height: 100%;
  `)}
`;

const Title = styled.div`
  ${foolscap};
  text-transform: uppercase;
  font-weight: ${weight("bold")};
  color: ${color("white.light")};
  margin-bottom: 0;
  ${tablet(css`
    color: ${color("primary.dark")};
  `)}
`;

const Subtitle = styled.div`
  ${trafalgar};
  font-weight: ${weight("thin")};
  color: ${color("text.main")};
`;

const Welcome: React.SFC<Props> = () => {
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
            <Title>FrontEnd</Title>
            <Subtitle>Functional Design</Subtitle>
            <Button to="/resume" contained variant="secondary">
              View Resume
            </Button>
          </Content>
          <Photo>
            <ProfileWhole />
            <ProfileHalf />
          </Photo>
        </Inner>
      </Container>
    </Root>
  );
};

export { Welcome };

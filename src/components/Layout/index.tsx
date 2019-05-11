import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { color, fonts } from "src/theme";
import Helmet from "react-helmet";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Background } from "src/components/Background";
import { useScrollbarWidth } from "src/hooks/useScrollbarWidth";

import { Normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    font-family: ${fonts.sans};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Root = styled.div`
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${color("background.main")};
`;

const Main = styled.div`
  z-index: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  flex-grow: 1;
  margin-top: 60px;
`;

interface Data {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

interface Props {}

export const Layout: React.SFC<Props> = ({ children }) => {
  const scw = useScrollbarWidth();
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data: Data) => {
        return (
          <Root>
            <Helmet
              link={[
                {
                  rel: "stylesheet",
                  href:
                    "https://fonts.googleapis.com/css?family=Lato:300,400,700",
                },
              ]}
            />
            <Normalize />
            <GlobalStyle />
            <Content>
              <Background pr={scw} />
              <Header pr={scw} />
              <Main>{children}</Main>
              <Footer />
            </Content>
          </Root>
        );
      }}
    />
  );
};

export default Layout;

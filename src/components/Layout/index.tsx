import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { color, fonts } from "src/theme";
import Helmet from "react-helmet";
import { Header } from "src/components/Header";

import { Normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    overflow-y: scroll;
    overflow-x: hidden;
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
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  background: ${color("background.main")};
  flex-grow: 1;
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
                    "https://fonts.googleapis.com/css?family=Muli:300,400,700",
                },
              ]}
            />
            <Normalize />
            <GlobalStyle />
            <Content>
              <Header />
              <Main>{children}</Main>
            </Content>
          </Root>
        );
      }}
    />
  );
};

export default Layout;

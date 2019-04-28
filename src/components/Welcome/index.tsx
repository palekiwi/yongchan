import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Image } from "src/components/Image";

interface Props {}

const Root = styled.div`
  display: flex;
`;
const Photo = styled.div`
  border: 1px solid green;
  width: 100%;
  height: auto%;
  max-height: calc(100vh - 60px);
`;
const Content = styled.div`
  width: 100%;
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
      <Photo>
        <Image
          imgStyle={{ objectFit: "contain" }}
          style={{ height: "100%", textAlign: "right" }}
          fluid={data.profileHalf}
        />
      </Photo>
      <Content />
    </Root>
  );
};

export { Welcome };

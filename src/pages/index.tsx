import * as React from "react";
import { graphql } from "gatsby";
import { SEO } from "src/components/SEO";
import { Welcome } from "src/components/Welcome";
import { Project, ProjectsList } from "src/components/Project";

export interface Props {
  data: {
    projects: {
      edges: { node: Project }[];
    };
  };
}

const IndexPage: React.SFC<Props> = ({ data }) => {
  return (
    <>
      <SEO title="chuj" />
      <Welcome />
      <ProjectsList projects={data.projects.edges} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    projects: allMarkdownRemark(
      filter: { fields: { type: { eq: "projects" } } }
    ) {
      edges {
        node {
          ...ProjectQueryFragment
        }
      }
    }
  }
`;

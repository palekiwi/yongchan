import * as React from "react";
import { graphql } from "gatsby";
import { SEO } from "src/components/SEO";
import { Project, ProjectsList } from "src/components/Project";

export interface Props {
  data: {
    projects: {
      edges: { node: Project }[];
    };
  };
}

const ProjectsPage: React.SFC<Props> = ({ data }) => {
  return (
    <>
      <SEO title="projects" />
      <ProjectsList projects={data.projects.edges} />
    </>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectsPageQuery {
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

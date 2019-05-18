import * as React from "react";
import { graphql } from "gatsby";
import { Project, ProjectPage } from "src/components/Project";

interface Props {
  data: {
    project: Project;
  };
}

const ProjectTemplate: React.FC<Props> = ({ data: { project } }) => (
  <ProjectPage project={project} />
);

export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date
        tags
        url
        repo
        tech
        image {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

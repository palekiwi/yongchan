import { graphql } from "gatsby";

export const projectQueryFragment = graphql`
  fragment ProjectQueryFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      date
      url
      repo
      tech
      tags
      image {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

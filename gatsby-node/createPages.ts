import path from "path";
import { GatsbyCreatePages } from "./types";

export const createPages: GatsbyCreatePages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fields: { type: { eq: "projects" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result: any) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.projects &&
      result.data.projects.edges.forEach(({ node }: any) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/projectTemplate.tsx`),
          context: {
            slug: node.fields.slug,
          },
        });
      });
    return result;
  });
};

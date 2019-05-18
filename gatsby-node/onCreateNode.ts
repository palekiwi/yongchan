import { GatsbyOnCreateNode } from "./types";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const parent = getNode(node.parent);
    const type = parent.sourceInstanceName;
    const slug =
      "/" + type + createFilePath({ node, getNode, basePath: "projects" });

    createNodeField({ node, name: "type", value: type });
    createNodeField({ node, name: "slug", value: slug });
  }
};

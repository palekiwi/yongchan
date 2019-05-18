import * as React from "react";
import { Project } from "./Project.d";

interface Props {
  project: Project;
}
const ProjectPage: React.FC<Props> = ({ project }) => (
  <div>{project.frontmatter.title}</div>
);

export { ProjectPage };

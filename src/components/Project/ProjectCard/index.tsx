import * as React from "react";
import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardActions,
} from "src/components/Card";
import styled from "styled-components";
import { color, space, radius } from "src/theme";

const Wrapper = styled(Card)`
  max-width: 400px;
  position: relative;
`;

const Tags = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  & > span {
    padding: ${space(1)} ${space(2)};
    background: ${color("primary.light")};
    border-radius: ${radius(2)};
  }
`;

export interface ProjectCardProps {
  project: {
    title: string;
    image: any;
    tags: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Wrapper>
    <Tags>
      {project.tags.map(t => (
        <span key={t}>{t}</span>
      ))}
    </Tags>
    <CardImage image={project.image} />
    <CardContent>
      <CardTitle>{project.title}</CardTitle>
    </CardContent>
    <CardActions>hi</CardActions>
  </Wrapper>
);

export { ProjectCard };

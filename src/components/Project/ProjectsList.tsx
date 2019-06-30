import * as React from "react";
import { Project } from "./Project.d";
import { ProjectCard } from "./ProjectCard";
import { Container } from "src/components/Container";
import styled, { css } from "styled-components";
import { tablet } from "src/theme/media";
import { color, space, weight } from "src/theme";
import { canon } from "src/theme/typography";

interface Props {
  projects: { node: Project }[];
}

const Wrapper = styled.section`
  padding: ${space(4)} 0;
`;

const Title = styled.h2`
  ${canon};
  text-align: center;
  text-transform: uppercase;
  font-weight: ${weight("thin")};
  color: ${color("primary.dark")};
`;

const Tiles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Tile = styled.div`
  padding: ${space(3)};
  width: 100%;
  ${tablet(css`
    width: 50%;
  `)}
`;

const ProjectsList: React.FC<Props> = ({ projects }) => (
  <Wrapper>
    <Container>
      <Title>Projects</Title>
      <Tiles>
        {projects.map(({ node }) => (
          <Tile key={node.fields.slug}>
            <ProjectCard project={node} />
          </Tile>
        ))}
      </Tiles>
    </Container>
  </Wrapper>
);

export { ProjectsList };

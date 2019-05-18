import * as React from "react";
import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardActions,
} from "src/components/Card";
import styled from "styled-components";
import { Button } from "src/components/Button";
import { Link } from "src/components/Link";
import { color, space, radius } from "src/theme";
import { brevier } from "src/theme/typography";
import { monthYear } from "src/utils/helpers";
import { Project } from "../Project.d";

const Wrapper = styled(Card)`
  position: relative;
`;

const ImageWrapper = styled(Link)`
  display: block;
  position: relative;
  z-index: 0;
  cursor: pointer;
`;

const Actions = styled(CardActions)``;

const When = styled.div`
  ${brevier};
  margin-bottom: 0;
  color: ${color("text.main")};
`;

const Tags = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: row;
  top: ${space(2)};
  right: ${space(2)};
  & > span {
    ${brevier};
    text-align: center;
    padding: ${space(1)} ${space(2)};
    background: rgba(0, 0, 0, 0.4);
    border-radius: ${radius(2)};
    color: ${color("white.light")};
    margin: ${space(1)};
  }
`;

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { frontmatter, fields },
}) => (
  <Wrapper>
    <ImageWrapper to={fields.slug}>
      <CardImage image={frontmatter.image} />
      <Tags>
        {frontmatter.tags.slice(0, 3).map(t => (
          <span key={t}>{t}</span>
        ))}
      </Tags>
    </ImageWrapper>
    <CardContent>
      <CardTitle>{frontmatter.title}</CardTitle>
      <When>{monthYear(frontmatter.date)}</When>
    </CardContent>
    <Actions>
      <Button to={fields.slug} variant="default">
        View Project
      </Button>
    </Actions>
  </Wrapper>
);

export { ProjectCard };

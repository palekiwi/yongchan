import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ProjectCard, ProjectCardProps } from "./index";
import Faker from "faker";

const stories = storiesOf("Components/Project/ProjectCard", module);

const project: ProjectCardProps["project"] = {
  title: Faker.commerce.productName(),
  image: { publicUrl: Faker.image.abstract() },
  tags: [Faker.commerce.productAdjective()],
};

stories.add("default", () => <ProjectCard project={project} />);

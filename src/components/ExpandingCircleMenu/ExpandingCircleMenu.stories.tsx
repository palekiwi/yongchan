import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ExpandingCircleMenu } from "./index";
import styled from "styled-components";

const stories = storiesOf("Components/ExpandingCircleMenu", module);

const Container = styled.div`
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60px;
  position: fixed;
  z-index: 99;
`;

stories.add("default", () => (
  <Container>
    <ExpandingCircleMenu
      navItems={[{ label: "Home", to: "/" }]}
      title={["Test", "Site"]}
    />
  </Container>
));

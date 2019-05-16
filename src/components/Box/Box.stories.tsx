import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";

const stories = storiesOf("Components/Box", module);

stories
  .addDecorator(f => (
    <div
      style={{
        display: "flex",
        margin: "4rem 0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {f()}
    </div>
  ))
  .add("default", () => <Box />);

import * as React from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import { Button } from "./index";

const stories = storiesOf("Components/Button", module);

stories
  .add("default", () => <Button>text</Button>)
  .add("outlined", () => <Button outlined>text</Button>);

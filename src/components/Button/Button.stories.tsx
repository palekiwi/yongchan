import * as React from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import { Button } from "./index";

const stories = storiesOf("Components", module);

stories.add("Button", () => <Button>text</Button>, { info: { inline: true } });

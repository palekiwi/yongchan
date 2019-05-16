import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Link } from "./index";

const stories = storiesOf("Elements/Link", module);

stories
  .add("unstyled", () => <Link to="/">Home</Link>)
  .add("styled", () => (
    <Link styled to="/">
      Home
    </Link>
  ));

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "./index";
import Faker from "faker";

const stories = storiesOf("Elements/Image", module);

const image = { publicUrl: Faker.image.abstract() };

stories
  .add("with publicUrl", () => (
    <Image style={{ width: 200, height: 200 }} image={image} />
  ))
  .add("with placeholder", () => <Image style={{ width: 200, height: 200 }} />);

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Card, CardTitle, CardSubtitle, CardImage, CardContent } from "./index";
import Faker from "faker";

const image = { publicUrl: Faker.image.abstract() };
const stories = storiesOf("Card", module);

stories.add("with an image", () => (
  <div style={{ padding: "3rem" }}>
    <Card>
      <CardImage image={image} height={50} />
      <CardContent>
        <CardTitle>Title</CardTitle>
        <CardSubtitle>Subtitle</CardSubtitle>
      </CardContent>
    </Card>
  </div>
));

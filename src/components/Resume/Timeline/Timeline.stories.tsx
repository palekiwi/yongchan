import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TimelineEventProps } from "./TimelineEvent";
import { Timeline } from "./Timeline";
import { Container } from "src/components/Container";
import Faker from "faker";

const stories = storiesOf("Components|Timeline/TimelineEvent", module);

const events: TimelineEventProps[] = [
  {
    date: "2013 - 2015",
    city: Faker.address.city(),
    country: "gb",
    organization: Faker.company.companyName(),
    position: Faker.company.catchPhrase(),
    description: [Faker.lorem.sentence()],
  },
  {
    date: "2012",
    city: Faker.address.city(),
    country: "cn",
    organization: Faker.company.companyName(),
    position: Faker.company.catchPhrase(),
    description: [Faker.lorem.sentence()],
  },
  {
    date: "2004 - 2012",
    city: Faker.address.city(),
    country: "tw",
    organization: Faker.company.companyName(),
    position: Faker.company.catchPhrase(),
    description: [Faker.lorem.sentence()],
  },
];

stories
  .addDecorator(f => <Container>{f()}</Container>)
  .add("default", () => <Timeline events={events} />);

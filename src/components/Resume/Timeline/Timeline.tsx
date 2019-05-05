import * as React from "react";
import { Line, Wrapper } from "./timelineStyles";
import { TimelineEvent, TimelineEventProps } from "./TimelineEvent";
import { TimelineMarker } from "./TimelineMarker";
import styled from "styled-components";

interface TimelineItem {
  node: {
    frontmatter: {
      date: React.ReactNode;
      title: React.ReactNode;
      customer: React.ReactNode;
      location: React.ReactNode;
    };
  };
}

interface Props {
  events: TimelineEventProps[];
}

const Events = styled.div``;

const Timeline: React.SFC<Props> = ({ events }) => (
  <Events>
    <Line>
      {events.map((event, i) => (
        <Wrapper key={i} i={i}>
          <TimelineMarker country={event.country} />
          <TimelineEvent idx={i} event={event} />
        </Wrapper>
      ))}
    </Line>
  </Events>
);

export { Timeline, TimelineItem };

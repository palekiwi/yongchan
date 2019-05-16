import * as React from "react";
import { Line, Wrapper } from "./timelineStyles";
import { TimelineEvent, TimelineEventProps } from "./TimelineEvent";
import { TimelineMarker } from "./TimelineMarker";
import styled from "styled-components";

interface Props {
  events: TimelineEventProps[];
}

const Events = styled.div`
  box-sizing: border-box;
  & * {
    box-sizing: border-box;
  }
  position: relative;
  width: 100%;
`;

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

export { Timeline };

import * as React from "react";
import { EventCard } from "./timelineStyles";
import styled from "styled-components";
import { space } from "src/theme";

export interface TimelineEventProps {
  date: string;
  city: string;
  country: string;
  organization: string;
  position: string;
  description?: string[];
}

interface Props {
  event: TimelineEventProps;
  idx: number;
}

const countries = {
  tw: "Taiwan",
  gb: "United Kingdom",
  il: "State of Israel",
  th: "Thailand",
  cn: "China",
};

const Inner = styled.div`
  padding: ${space(3)} ${space(4)};
`;

const TimelineEvent: React.SFC<Props> = ({ event, idx }) => (
  <EventCard i={idx}>
    <Inner>
      <div>{event.date}</div>
      <div>{event.position}</div>
      <div>{event.organization}</div>
      <div>{countries[event.country]}</div>
      {event.description && (
        <div>
          {event.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </Inner>
  </EventCard>
);

export { TimelineEvent };

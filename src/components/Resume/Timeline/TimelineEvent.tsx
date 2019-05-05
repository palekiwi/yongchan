import * as React from "react";
import { EventCard } from "./timelineStyles";

export interface TimelineEventProps {
  date: string;
  city: string;
  country: string;
  organization: string;
  position: string;
  description: string[];
}

interface Props {
  event: TimelineEventProps;
  idx: number;
}

const TimelineEvent: React.SFC<Props> = ({ event, idx }) => (
  <EventCard i={idx}>{event.country}</EventCard>
);

export { TimelineEvent };

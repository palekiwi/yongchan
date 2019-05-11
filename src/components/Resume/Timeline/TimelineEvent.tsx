import * as React from "react";
import { EventCard } from "./timelineStyles";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { longPrimer, pica, greatPrimer } from "src/theme/typography";
import { countries } from "src/data/countries";

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

const Inner = styled.div`
  padding: ${space(3)} ${space(4)};
  color: ${color("text.dark")};
  ${pica};
  margin-bottom: 0;
`;

const Time = styled.div`
  ${pica};
  margin-bottom: ${space(1)};
  color: ${color("secondary.main")};
`;

const Position = styled.div`
  ${greatPrimer};
  margin-bottom: ${space(1)};
  font-weight: ${weight("bold")};
  color: ${color("primary.dark")};
`;
const Org = styled.div``;
const Place = styled.div`
  margin-bottom: ${space(2)};
  color: ${color("primary.main")};
`;
const Desc = styled.ul`
  ${longPrimer};
  color: ${color("text.main")};
  margin-bottom: 0;
  li {
    margin-left: ${space(3)};
    list-style-type: circle;
  }
`;

const TimelineEvent: React.SFC<Props> = ({ event, idx }) => (
  <EventCard i={idx}>
    <Inner>
      <Time>{event.date}</Time>
      <Position>{event.position}</Position>
      <Org>{event.organization}</Org>
      <Place>
        {event.city}, {countries[event.country]}
      </Place>
      {event.description && (
        <Desc>
          {event.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Desc>
      )}
    </Inner>
  </EventCard>
);

export { TimelineEvent };

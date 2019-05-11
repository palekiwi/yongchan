import * as React from "react";
import styled, { css } from "styled-components";
import { color, space, weight } from "src/theme";
import { longPrimer, pica, greatPrimer } from "src/theme/typography";
import { Card } from "src/components/Card";
import { desktop } from "src/theme/media";
import { EducationItem } from "src/data/education";
import { countries } from "src/data/countries";

interface Props {
  item: EducationItem;
}

const Columns = styled.div`
  padding: ${space(3)} ${space(4)};
  display: flex;
  flex-direction: column;
  ${desktop(css`
    flex-direction: row;
  `)}
`;

const Column = styled.div`
  width: 100%;
  ${desktop(css`
    width: 50%;
  `)}
  &:nth-child(2) {
    ${longPrimer};
    margin-bottom: 0;
    color: ${color("text.dark")};
  }
`;

const Time = styled.div`
  ${pica};
  margin-bottom: ${space(1)};
  color: ${color("secondary.main")};
`;

const Degree = styled.div`
  ${greatPrimer};
  margin-bottom: ${space(1)};
  font-weight: ${weight("bold")};
  color: ${color("primary.dark")};
`;
const Org = styled.div``;
const Desc = styled.div`
  p {
    margin-bottom: ${space(2)};
  }
`;

const Place = styled.div`
  margin-bottom: ${space(2)};
  color: ${color("primary.main")};
`;

const Education: React.FC<Props> = ({ item }) => (
  <Card>
    <Columns>
      <Column>
        <Time>{item.date}</Time>
        <Degree>{item.degree}</Degree>
        <Org>{item.organization}</Org>
        <Place>
          {item.city}, {countries[item.country]}
        </Place>
      </Column>
      <Column>
        <Desc>
          {item.description.map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </Desc>
      </Column>
    </Columns>
  </Card>
);

export { Education };

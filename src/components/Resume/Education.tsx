import * as React from "react";
import styled, { css } from "styled-components";
import { color, space, weight } from "src/theme";
import { pica, greatPrimer } from "src/theme/typography";
import { Card } from "src/components/Card";
import { tablet } from "src/theme/media";
import { EducationItem } from "src/data/education";
import { countries } from "src/data/countries";

interface Props {
  item: EducationItem;
}

const Columns = styled.div`
  padding: ${space(3)} ${space(4)};
  display: flex;
  flex-direction: column;
  ${tablet(css`
    flex-direction: row;
  `)}
`;

const Column = styled.div`
  width: 100%;
  ${tablet(css`
    width: 50%;
  `)}
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
      <Column>{item.description}</Column>
    </Columns>
  </Card>
);

export { Education };

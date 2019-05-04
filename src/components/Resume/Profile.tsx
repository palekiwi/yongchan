import * as React from "react";
import styled, { css } from "styled-components";
import { color, radius, space, weight } from "src/theme";
import { pica } from "src/theme/typography";
import { tablet } from "src/theme/media";

const Wrapper = styled.div`
  margin: ${space(2)};
  background: ${color("white.light")};
  border-radius: ${radius(2)};
  border-bottom: 2px solid ${color("divider.dark")};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Info = styled.div`
  padding: ${space(3)};
  width: 100%;
`;

const Row = styled.div`
  text-align: center;
  ${pica};
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${color("divider.light")};
  padding: ${space(2)};
  padding-bottom: ${space(1)};
  &:first-child {
    padding-top: 0;
  }
  ${tablet(css`
    flex-direction: row;
    text-align: left;
  `)}
`;

const Key = styled.div`
  font-weight: ${weight("bold")};
  color: ${color("primary.dark")};
  width: 100%;
  ${tablet(css`
    width: 40%;
  `)}
`;

const Val = styled.div`
  width: 100%;
  color: ${color("text.dark")};
  ${tablet(css`
    width: 60%;
  `)}
`;

interface Props {}

const info = [
  { k: "Full Name", v: "Pawel Lisewski / 黎勇禪" },
  { k: "Born", v: "1987/11/05" },
  { k: "Nationality", v: "Republic of Poland" },
  { k: "Base", v: "Taiwan, R.O.C." },
  { k: "Status", v: "Permanent Resident" },
];

const Profile: React.SFC<Props> = ({}) => {
  return (
    <Wrapper>
      <Info>
        {info.map(i => (
          <Row key={i.k}>
            <Key>{i.k}</Key>
            <Val>{i.v}</Val>
          </Row>
        ))}
      </Info>
    </Wrapper>
  );
};

export { Profile };

import * as React from "react";
import { Card } from "src/components/Card";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { longPrimer, greatPrimer } from "src/theme/typography";
import { HaskellIcon } from "src/components/Icon/HaskellIcon";
import { ReactIcon } from "src/components/Icon/ReactIcon";
import { TypescriptIcon } from "src/components/Icon/TypescriptIcon";
import { NodeIcon } from "src/components/Icon/NodeIcon";
import { Star } from "styled-icons/material/Star";
import { StarBorder } from "styled-icons/material/StarBorder";

interface Props {}

const Inner = styled.div`
  padding: ${space(3)} ${space(4)};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  ${greatPrimer};
  color: ${color("primary.dark")};
  font-weight: ${weight("bold")};
`;

const TechWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${space(3)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  width: 20%;
  text-align: left;
  height: 24px;
  width: 24px;
`;

const Label = styled.div`
  ${longPrimer};
  margin-bottom: 0;
  width: 20%;
  margin-left: ${space(3)};
  color: ${color("text.dark")};
`;

const Rating = styled.div`
  color: ${color("secondary.main")};
  flex-grow: 1;
`;

const Tech: React.FC<{ icon: any; label: string }> = props => (
  <TechWrapper>
    <Icon>{props.icon}</Icon>
    <Label>{props.label}</Label>
    <Rating>
      <Star size={24} />
      <StarBorder size={24} />
    </Rating>
  </TechWrapper>
);

const tech = [
  { icon: <TypescriptIcon />, label: "Typescript" },
  { icon: <ReactIcon />, label: "React" },
  { icon: <NodeIcon />, label: "Node" },
  { icon: <HaskellIcon />, label: "Haskell" },
];

const Programming: React.SFC<Props> = () => {
  return (
    <Card style={{ height: "100%" }}>
      <Inner>
        <Title>Programming</Title>
        {tech.map(t => (
          <Tech key={t.label} icon={t.icon} label={t.label} />
        ))}
      </Inner>
    </Card>
  );
};

export { Programming };

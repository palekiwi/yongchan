import * as React from "react";
import { Card } from "src/components/Card";
import styled, { css } from "styled-components";
import { weight, color, space } from "src/theme";
import { tablet, desktop } from "src/theme/media";
import { longPrimer, greatPrimer } from "src/theme/typography";
import { PSIcon } from "src/components/Icon/PSIcon";
import { AIIcon } from "src/components/Icon/AIIcon";
import { IDIcon } from "src/components/Icon/IDIcon";
import { BlenderIcon } from "src/components/Icon/BlenderIcon";

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
    margin-bottom: ${space(1)};
  }
  ${tablet(css`
    width: 50%;
  `)}
  ${desktop(css`
    width: 100%;
  `)}
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
  width: 40%;
  margin-left: ${space(3)};
  color: ${color("text.dark")};
`;

const TechContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tech: React.FC<{ icon: any; label: string; level: number }> = props => (
  <TechWrapper>
    <Icon>{props.icon}</Icon>
    <Label>{props.label}</Label>
  </TechWrapper>
);

const tech = [
  { icon: <PSIcon />, label: "Photoshop" },
  { icon: <AIIcon />, label: "Illustrator" },
  { icon: <IDIcon />, label: "InDesign" },
  { icon: <BlenderIcon />, label: "Blender 3D" },
];

const Design: React.SFC<Props> = () => {
  return (
    <Card style={{ height: "100%" }}>
      <Inner>
        <Title>Design</Title>
        <TechContainer>
          {tech.map(t => (
            <Tech key={t.label} icon={t.icon} label={t.label} />
          ))}
        </TechContainer>
      </Inner>
    </Card>
  );
};

export { Design };

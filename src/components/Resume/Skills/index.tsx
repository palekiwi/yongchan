import * as React from "react";
import { Languages } from "./Languages";
import { Programming } from "./Programming";
import { Design } from "./Design";
import styled, { css } from "styled-components";
import { desktop } from "src/theme/media";
import { space } from "src/theme";
import { languages } from "src/data/skills";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${desktop(css`
    flex-direction: row;
  `)}
`;

const Pane = styled.div`
  width: 100%;
  padding: ${space(2)};
  ${desktop(css`
    width: 33%;
  `)}
`;

interface Props {}

const Skills: React.SFC<Props> = () => (
  <Wrapper>
    <Pane>
      <Programming />
    </Pane>
    <Pane>
      <Languages items={languages} />
    </Pane>
    <Pane>
      <Design />
    </Pane>
  </Wrapper>
);

export { Skills };

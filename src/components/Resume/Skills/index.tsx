import * as React from "react";
import { Languages } from "./Languages";
import styled, { css } from "styled-components";
import { desktop } from "src/theme/media";
import { space } from "src/theme";
import { languages } from "src/data/skills";

const Wrapper = styled.div`
  display: flex;
`;

const Pane = styled.div`
  width: 100%;
  padding: ${space(2)};
  ${desktop(css`
    width: 50%;
  `)}
`;

interface Props {}

const Skills: React.SFC<Props> = () => (
  <Wrapper>
    <Pane>
      <Languages items={languages} />
    </Pane>
  </Wrapper>
);

export { Skills };

import * as React from "react";
import styled from "styled-components";
import { color, space } from "src/theme";
import { PhotoWhole } from "src/components/Photo";

interface Props {}

const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid ${color("white.light")};
  width: 180px;
  height: 180px;
  padding: ${space(2)};
`;

const Pic = styled(PhotoWhole)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${color("divider.main")};
  margin: 0 auto;
  background: ${color("grey.100")};
  }
`;

const ResumePhoto: React.SFC<Props> = ({}) => (
  <Wrapper>
    <Pic />
  </Wrapper>
);

export { ResumePhoto };

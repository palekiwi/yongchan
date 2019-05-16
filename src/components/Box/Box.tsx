import * as React from "react";
import styled from "styled-components";
import { shadow, space } from "src/theme";

const StyledBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.05) 0px 5px 15px 0px;
  box-shadow: ${shadow(9)};
  padding: ${space(4)};
  border-radius: 4px;
  width: 256px;
`;

const Box: React.FC = () => (
  <StyledBox onClick={() => console.log("hi")}>Box</StyledBox>
);

export { Box };

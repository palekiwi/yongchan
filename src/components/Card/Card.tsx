import styled from "styled-components";
import { radius, shadow } from "src/theme";

export const Card = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: ${radius(2)};
  box-shadow: ${shadow(1)};
`;

import styled from "styled-components";
import { color, radius } from "src/theme";

export const Card = styled.div`
  overflow: visible;
  position: relative;
  border-radius: ${radius(2)};
  border-bottom: 2px solid ${color("divider.dark")};
  width: 100%;
  background: ${color("background.light")};
`;

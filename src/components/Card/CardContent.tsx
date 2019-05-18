import styled from "styled-components";
import { color, space, weight } from "src/theme";
import { doublePica, pica } from "src/theme/typography";

export const CardContent = styled.div`
  display: flex;
  padding: ${space(3)};
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  ${doublePica};
  font-weight: ${weight("bold")};
  margin-bottom: 0;
  color: ${color("text.dark")};
`;

export const CardSubtitle = styled.div`
  ${pica};
  margin-bottom: 0;
  margin-top: ${space(2)};
  color: ${color("text.dark")};
`;

import styled from "styled-components";
import { color, space } from "src/theme";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  & tr {
    border-bottom: 1px solid;
    border-color: ${color("divider.light")};
  }
  & th {
    padding: ${space(1)};
    text-align: left;
  }
  & td {
    padding: ${space(1)};
  }
`;

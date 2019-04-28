import * as React from "react";
import { ExpandingCircleMenu } from "src/components/ExpandingCircleMenu";
import styled from "styled-components";
import { color, space } from "src/theme";

interface Props {}

const Wrapper = styled.div`
  background: ${color("white.main")};
  border-bottom: 1px solid ${color("divider.light")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${space(2)} 0;
`;

const Header: React.SFC<Props> = () => {
  return (
    <Wrapper>
      <ExpandingCircleMenu bg={"white.light"} fg={"primary.main"} />
    </Wrapper>
  );
};

export { Header };

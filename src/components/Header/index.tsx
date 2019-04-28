import * as React from "react";
import { ExpandingCircleMenu } from "src/components/ExpandingCircleMenu";
import styled from "styled-components";
import { color, space } from "src/theme";

interface Props {}

const Wrapper = styled.div`
  background: ${color("white.main")};
  border-bottom: 1px solid ${color("divider.light")};
  width: 100%;
  height: 66px;
`;

const Header: React.SFC<Props> = () => {
  return (
    <Wrapper>
      <ExpandingCircleMenu bg={"white.light"} fg={"primary.main"} />
    </Wrapper>
  );
};

export { Header };

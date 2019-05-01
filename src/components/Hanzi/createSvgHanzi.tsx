import React from "react";
import { SvgHanzi, SvgHanziProps } from "./SvgHanzi";

export const createSvgHanzi = (children: React.ReactElement) => {
  const Component: React.SFC<SvgHanziProps> = React.memo(props => (
    <SvgHanzi {...props}>{children}</SvgHanzi>
  ));

  return Component;
};

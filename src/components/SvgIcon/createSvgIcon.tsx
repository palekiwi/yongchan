import React from "react";
import { SvgIcon } from "./SvgIcon";

export const createSvgIcon = (children: React.ReactElement) => {
  const Component = React.memo(props => (
    <SvgIcon {...props}>{children}</SvgIcon>
  ));

  return Component;
};

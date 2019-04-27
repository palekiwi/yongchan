import * as React from "react";
import { Layout } from "src/components/Layout";

export const DefaultLayout: React.SFC<{}> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default DefaultLayout;

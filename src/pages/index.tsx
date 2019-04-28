import * as React from "react";
import { SEO } from "src/components/SEO";
import { Welcome } from "src/components/Welcome";

export interface Props {}

const IndexPage: React.SFC<Props> = () => {
  return (
    <>
      <SEO title="chuj" />
      <Welcome />
      <div style={{ width: "100%", height: "50vh" }} />
    </>
  );
};

export default IndexPage;

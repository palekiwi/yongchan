import * as React from "react";
import { SEO } from "src/components/SEO";

export interface Props {}

const IndexPage: React.SFC<Props> = () => {
  return (
    <>
      <SEO title="chuj" />
      Index Page
    </>
  );
};

export default IndexPage;

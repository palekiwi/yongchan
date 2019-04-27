import * as React from "react";
import { Button } from "src/components/Button";

const NotFound: React.SFC<{}> = () => {
  return (
    <>
      <Button variant="secondary" to="/">
        hello
      </Button>
      404
    </>
  );
};

export default NotFound;

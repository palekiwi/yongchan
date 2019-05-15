import * as React from "react";
import { Header } from "./index";
import { render } from "react-testing-library";

it("renders correctly", () => {
  const { asFragment } = render(<Header pr={5} />);

  expect(asFragment).toMatchSnapshot();
});

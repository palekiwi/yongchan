import * as React from "react";
import { render } from "react-testing-library";
import { ExpandingCircle } from "./ExpandingCircle";

it("renders correctly", () => {
  const props = {
    open: false,
    toggleMenu: jest.fn(),
    bg: "primary.main",
    fg: "primary.dark",
  };
  const { asFragment } = render(
    <ExpandingCircle {...props} title={["A", "B"]} />
  );
  expect(asFragment).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";

import Show from "./show";

test("<Show />", function () {
  const tree = renderer.create(<Show />).toJSON();
  expect(tree).toMatchSnapshot();
});
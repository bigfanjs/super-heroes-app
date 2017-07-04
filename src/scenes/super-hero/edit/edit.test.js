import React from "react";
import renderer from "react-test-renderer";

import Edit from "./edit";

test("<Edit />", function () {
  const tree = renderer.create(<Edit />).toJSON();
  expect(tree).toMatchSnapshot();
});
import React from "react";
import renderer from "react-test-renderer";

import Field from "./field";

test("<Field />", function () {
  const tree = renderer.create(<Field />).toJSON();
  expect(tree).toMatchSnapshot();
});
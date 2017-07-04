import React from "react";
import renderer from "react-test-renderer";

import Input from "./input-field";

test("<Input />", function () {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
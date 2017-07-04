import React from "react";
import isEmpty from "lodash/isEmpty";

import Show from "../show";
import Edit from "../edit";

export default function (hero) {
  return isEmpty(hero) ? <Edit hero={{}} /> : <Show hero={hero} />;
}
import React from "react";

import InputBox from "../input-box";
import Paragraph from "../paragraph";

export default function ({prop, value}) {
  if (typeof value === "undefined") {
    return <InputBox prop={prop} value={value} />;
  }

  return <Paragraph prop={prop} value={value} />;
}
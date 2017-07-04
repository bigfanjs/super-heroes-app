import React from "react";

import KeyItem from "../../../components/key-item";

export default function (hero) {
  return (
    <ul>
      <KeyItem prop="Real name" value={hero.realname} />
      <KeyItem prop="Nick name" value={hero.nickname} />
    </ul>
  );
}
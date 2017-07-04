import React from "react";

import Input from "../../../components/input-field";

export default function (hero) {
  return (
    <form>
      <Input label="Real Name" value={hero.realname} />
      <Input label="Nick Name" value={hero.nickname} />
    </form>
  );
}
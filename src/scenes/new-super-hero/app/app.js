import React from "react";

import Input from "../input-field";

import "./app.css";

export default function () {
  return (
    <form className="new-super-hero">
      <Input label="Real Name" />
      <Input label="Nick Name" />
    </form>
  );
}
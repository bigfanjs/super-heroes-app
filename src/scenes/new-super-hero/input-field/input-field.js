import React from "react";

export default function ({type="text", label}) {
  return (
    <label>
      { label }:
      <input type={type} />
    </label>
  );
}
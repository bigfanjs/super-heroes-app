import React from "react";

export default function ({type="text", label, value}) {
  if (!label) {
    return <input type={type} value={value} />;
  }

  return (
    <label>
      { label }:
      <input type={type} />
    </label>
  );
}
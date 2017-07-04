import React from "react";

export default function ({prop, value}) {
  return (
    <div>
      <label htmlFor={prop}>{ prop }</label>
      <input id={prop} value={value} />
    </div>
  );
}
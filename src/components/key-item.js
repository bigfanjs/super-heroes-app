import React from "react";

export default function ({prop, value}) {
  return (
    <li>
      <h3>{ prop }</h3>
      <p>{ value }</p>
    </li>
  );
}
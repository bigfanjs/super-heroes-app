import React from "react";
import {TableRow, TableRowColumn} from "material-ui/Table";

export default function ({against, result, year}) {
  return (
    <TableRow>
      <TableRowColumn>{ against }</TableRowColumn>
      <TableRowColumn>{ result }</TableRowColumn>
      <TableRowColumn>{ year }</TableRowColumn>
    </TableRow>
  );
}
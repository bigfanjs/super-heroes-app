import React from "react";
import {TableRow, TableRowColumn} from "material-ui/Table";

export default function ({against, result, date}) {
  return (
    <TableRow>
      <TableRowColumn>{ against }</TableRowColumn>
      <TableRowColumn>{ result }</TableRowColumn>
      <TableRowColumn>{ date }</TableRowColumn>
    </TableRow>
  );
}
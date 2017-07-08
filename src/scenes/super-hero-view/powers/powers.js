import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
  TableRow
} from "material-ui/Table";

const styles = {
  margin: "20px",
  borderBottom: "2px solid #00bcd4",
  paddingBottom: "5px"
};

export default function ({ powers }) {
  return (
    <li>
      <h4 style={styles}>Powers</h4>
      <Table selectable={false}>
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>POWER</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          { powers.map((power, idx) => (
            <TableRow key={power}>
              <TableRowColumn>{ idx+1 }</TableRowColumn>
              <TableRowColumn>{ power }</TableRowColumn>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </li>
  );
}
import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui/Table";

import Battle from "../battle";

const styles = {
  margin: "20px",
  borderBottom: "2px solid #00bcd4",
  paddingBottom: "5px"
};

export default function ({ battles }) {
  return (
    <li>
      <h4 style={styles}>Battles</h4>
      <Table selectable={false}>
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Against</TableHeaderColumn>
            <TableHeaderColumn>Result</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { battles.map((battle, idx) => <Battle key={idx} {...battle} />) }
        </TableBody>
      </Table>
    </li>
  );
}
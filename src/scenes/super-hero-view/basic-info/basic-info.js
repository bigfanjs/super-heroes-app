import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";

const styles = {
  margin: "20px",
  borderBottom: "2px solid #00bcd4",
  paddingBottom: "5px"
};

export default function ({ hero }) {
  return (
    <li>
      <h4 style={styles}>Basic Info</h4>
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          { Object.keys(hero)
            .filter((key) => (
              key !== "powers" &&
              key !== "battles" &&
              key !== "id" &&
              typeof hero[key] !== "undefined"
            ))
            .map((key) => (
              <TableRow key={key}>
                <TableRowColumn><b>{ key }</b></TableRowColumn>
                <TableRowColumn><i>{ hero[key] }</i></TableRowColumn>
              </TableRow>
             ))
          }
        </TableBody>
      </Table>
    </li>
  );
}
import React from "react";
import { Table as MuiTable, TableBody, TableCell, TableRow } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    width: "80%",
    margin: "0 auto",
  },
  tableCell: {
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    margin: "30px auto ",
  },
});

interface Props {
  profiles: Profile[];
}

interface Profile {
  item: string;
  content: string;
}

export const Table: React.FCX<Props> = ({ profiles }) => {
  const classes = useStyles();
  return (
    <MuiTable className={classes.table}>
      <TableBody>
        {profiles.map((p) => (
          <TableRow key={p.item}>
            <TableCell className={classes.tableCell}>{p.item}</TableCell>
            <TableCell className={classes.tableCell}>{p.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

import { FCX } from "react";
import { Table as MuiTable, TableBody, TableCell, TableRow } from "@mui/material";

interface Props {
  profiles: Profile[];
}

interface Profile {
  item: string;
  content: string;
}

export const Table: FCX<Props> = ({ profiles }) => {
  return (
    <MuiTable
      sx={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <TableBody>
        {profiles.map((p) => (
          <TableRow key={p.item}>
            <TableCell
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {p.item}
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {p.content}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

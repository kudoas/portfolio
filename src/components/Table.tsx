import { FCX } from "react";
import { Table as MuiTable, TableBody, TableCell, TableRow } from "@mui/material";
import { Skill } from "@types";

interface Props {
  skills: Skill[];
}

export const Table: FCX<Props> = ({ skills }) => {
  return (
    <MuiTable
      sx={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <TableBody>
        {skills.map((p) => (
          <TableRow key={p.name}>
            <TableCell
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {p.name}
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {p.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

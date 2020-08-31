import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { StyledTable } from "../components/Table";
import { Title } from "../components/Title";
import { icon } from "../assets/index";

const useStyles = makeStyles({
  icon: {
    top: "50%",
    left: "50%",
  },
  img: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  },
  tableCell: {
    textAlign: "center",
    fontSize: "1.5rem",
  },
});

const About: React.FCX = ({ className }) => {
  const classes = useStyles();
  const tableLists = [
    [["Name"], ["工藤 大地 (Daichi Kudo)"]],
    [["University"], ["明治薬科大学"]],
    [["GitHub"], ["Kudoas", "https://github.com/Kudoas"]],
    [["AtCoder"], ["kudoa", "https://atcoder.jp/users/kudoa"]],
    [["Hatena Blog"], ["kudoa", "https://kudoa.hatenablog.com/"]],
  ];

  const profiles = [
    { item: "Name", content: "Daichi Kudo" },
    { item: "Twitter", content: <a href="https://twitter.com/kudoadd">kudoadd</a> },
    { item: "GitHub", content: <a href="https://github.com/Kudoas">Kudoas</a> },
    { item: "AtCoder", content: <a href="https://atcoder.jp/users/kudoa">Kudoa</a> },
    { item: "Hatena Blog", content: <a href="https://kudoa.hatenablog.com">クド戦記</a> },
  ];

  return (
    <section className={className + " " + "#about"}>
      <Title tag="h2">About</Title>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} className={classes.icon}>
          <img className={classes.img} src={icon} alt="icon" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper>
            <TableContainer>
              <Table>
                <TableBody>
                  {profiles.map((p) => (
                    <TableRow key={p.item}>
                      <TableCell className={classes.tableCell}>{p.item}</TableCell>
                      <TableCell className={classes.tableCell}>{p.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;

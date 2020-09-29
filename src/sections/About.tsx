import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Section from "../styles/Section";
import { StyledTitle } from "../components/Title";
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

const profiles = [
  { item: "Name", content: "Daichi Kudo" },
  { item: "Twitter", content: <a href="https://twitter.com/kudoadd">kudoadd</a> },
  { item: "GitHub", content: <a href="https://github.com/Kudoas">Kudoas</a> },
  { item: "AtCoder", content: <a href="https://atcoder.jp/users/kudoa">Kudoa</a> },
  { item: "Hatena Blog", content: <a href="https://kudoa.hatenablog.com">クド戦記</a> },
];

const About: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section inView={inView} className="#about" ref={ref}>
      <StyledTitle>About</StyledTitle>
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
    </Section>
  );
};

export default About;

import React from "react";

import { Typography, Container, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.primary.main,
    padding: theme.spacing(3, 2),
    textAlign: "center",
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Footer: React.FCX = () => {
  const classes = useStyles();
  return (
    <footer className={"#footer" + " " + classes.footer}>
      <Container maxWidth="xs">
        <Typography variant="body1">
          Copyright©2020. Daichi Kudo.{" "}
          <Link href="https://github.com/Kudoas/Portfolio">Source Code</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

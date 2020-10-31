import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

import { atcoder } from "../assets/index";
import { StyledTitle } from "../components/Title";
import { Thumbnail } from "../components/Thumbnail";
import { Table } from "../components/Table";
import Section from "../styles/Section";

const useStyles = makeStyles({
  icon: {
    top: "50%",
    left: "50%",
  },
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

const profiles = [
  { item: "Name", content: "工藤大地（Daichi Kudo）" },
  { item: "University", content: "明治薬科大学/薬学部（22卒）" },
  { item: "Hobby", content: "Cycling, Shogi, PodCast, Refactoring" },
];

const links = [
  {
    item: "Twitter",
    content: (
      <a href="https://twitter.com/kudoadd" key="1">
        <TwitterIcon style={{ fontSize: "30px" }} />
      </a>
    ),
  },
  {
    item: "GitHub",
    content: (
      <a href="https://github.com/Kudoas" key="2">
        <GitHubIcon style={{ fontSize: "30px" }} />
      </a>
    ),
  },
  {
    item: "Hatena Blog",
    content: (
      <a href="https://kudolog.net/" key="4">
        <i className="fa-hatena" style={{ fontSize: "25px" }}></i>
      </a>
    ),
  },
  {
    item: "AtCoder",
    content: (
      <a href="https://atcoder.jp/users/kudoa" key="3">
        <img src={atcoder} alt="atcoder" style={{ width: "30px" }} />
      </a>
    ),
  },
];

export const About: React.FCX = ({ className }) => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section inView={inView} className={className + " " + "#about"} ref={ref}>
      <StyledTitle>About</StyledTitle>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
          <Thumbnail />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Table profiles={profiles} />
        </Grid>
      </Grid>
      <div className={classes.links}>{links.map((i) => i.content)}</div>
    </Section>
  );
};

export const StyledAbout = styled(About)`
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
`;

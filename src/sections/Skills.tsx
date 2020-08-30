import React from "react";
import styled from "@emotion/styled";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { StyledTitle } from "../components/Title";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingLeft: "15px",
    display: "block",
    textAlign: "left",
  },
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    padding: theme.spacing(4),
  },
}));

export const Skills: React.FCX = ({ className }) => {
  const classes = useStyles();
  const languages = [
    { skill: "Python (Django)", content: "Web開発、競技プログラミング" },
    {
      skill: "JavaScript (React.js, Node.js, Express.js, Gatsby.js)",
      content: "個人開発：Webアプリ、API",
    },
    { skill: "TypeScript (React.js, Node.js, Express.js)", content: "個人開発：Webアプリ、API" },
    { skill: "Golang", content: "プロダクト開発型インターン" },
    { skill: "Google Apps Script", content: "slack bot (積読管理、記事レコメンド)" },
  ];
  const databases = [{ skill: "MySQL, PostgresQL, MongoDB", content: "Web開発のDB" }];
  const clouds = [
    { skill: "Heroku, AWS S3, Netlify, Firebase", content: "インフラ、ホスティング" },
  ];
  const tools = [{ skill: "Googla Analytics", content: "マーケティング" }];

  const skillLists = [
    { skill: "Python (Django)", content: "Web開発、競技プログラミング" },
    {
      skill: "JavaScript (React.js, Node.js, Express.js, Gatsby.js)",
      content: "個人開発：Webアプリ、API",
    },
    { skill: "TypeScript (React.js, Node.js, Express.js)", content: "個人開発：Webアプリ、API" },
    { skill: "Golang", content: "プロダクト開発型インターン" },
    { skill: "Google Apps Script", content: "slack bot (積読管理、記事レコメンド)" },
    { skill: "HTML5 ＆ CSS3", content: "フロントデザイン、Styled Component" },
    { skill: "PostgresQL, MongoDB", content: "Web開発のDB" },
    { skill: "Heroku, AWS S3, Netlify, Firebase", content: "インフラ、ホスティング" },
    { skill: "Googla Analytics", content: "マーケティング" },
  ];

  return (
    <section className={className + " " + "#skills"}>
      <StyledTitle tag="h2">Skills</StyledTitle>
      <Paper className={classes.paper}>
        <TableContainer>
          <Typography
            component="h3"
            variant="h5"
            color="primary"
            gutterBottom
            className={classes.title}
          >
            Programming Language, Database, Cloud, Devtools, etc.
          </Typography>
          <Table>
            <TableBody>
              {skillLists.map((sk) => (
                <TableRow key={sk.skill}>
                  <TableCell>{sk.skill}</TableCell>
                  <TableCell>{sk.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </section>
  );
};

export const StyledSkills = styled(Skills)`
  table {
    text-align: left;
    margin: 0 auto;
  }
`;

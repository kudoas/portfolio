import React from "react";
import styled from "@emotion/styled";

import { StyledTitle } from "../components/Title";
import { StyledTable } from "../components/Table";

export const Skills: React.FCX = ({ className }) => {
  const skillLists = [
    [["Python (Django)"], ["Web開発、競技プログラミング"]],
    [["JavaScript (React.js, Node.js, Express.js, Gatsby.js)"], ["個人開発：Webアプリ、API"]],
    [["TypeScript (React.js, Node.js, Express.js)"], ["個人開発：Webアプリ、API"]],
    [["Golang"], ["プロダクト開発型インターン"]],
    [["Google Apps Script"], ["slack bot (積読管理、記事レコメンド)"]],
    [["HTML5 ＆ CSS3"], ["フロントデザイン、Styled Component"]],
    [["PostgresQL, MongoDB"], ["Web開発のDB"]],
    [["Heroku, AWS S3, Netlify, Firebase"], ["インフラ、ホスティング"]],
    [["Googla Analytics"], ["マーケティング"]],
  ];

  return (
    <section className={className + " " + "#skills"}>
      <StyledTitle tag="h2">Skills</StyledTitle>
      <StyledTable tableLists={skillLists} />
    </section>
  );
};

export const StyledSkills = styled(Skills)`
  table {
    text-align: left;
    margin: 0 auto;
  }
`;

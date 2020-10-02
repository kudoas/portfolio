import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

import Section from "../styles/Section";
import { Table } from "../components/Table";
import { StyledTitle } from "../components/Title";

const skillLists = [
  {
    item: "Python: Django, Flask, Pandas",
    content: "Webアプリ, 競技プログラミング, 医療系データの解析",
  },
  { item: "TypeScript: React.js, Node.js, Express.js", content: "Webアプリ、API" },
  {
    item: "JavaScript: React.js, Node.js, Express.js, Gatsby.js",
    content: "Webアプリ、API",
  },
  { item: "Go", content: "API開発" },
  { item: "Google Apps Script", content: "slack bot開発：積読管理、記事レコメンド)" },
  { item: "HTML5 ＆ CSS3", content: "フロントデザイン, Styled Component" },
  { item: "MySQL, PostgresQL, MongoDB", content: "Webサービスのデータベース" },
  { item: "Heroku, AWS S3, Netlify, Firebase", content: "インフラ" },
  { item: "Googla Analytics", content: "モニタリング" },
];

export const Skills: React.FCX = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section className={className + " " + "#skills"} ref={ref} inView={inView}>
      <StyledTitle>Skills</StyledTitle>
      <Table profiles={skillLists} />
    </Section>
  );
};

export const StyledSkills = styled(Skills)`
  table {
    text-align: left;
    margin: 0 auto;
  }
`;

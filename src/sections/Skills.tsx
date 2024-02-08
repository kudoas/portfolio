import { FCX, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

import Section from "../styles/Section";
import { Table } from "../components/Table";
import { StyledTitle } from "../components/Title";

const skillLists = [
  {
    title: "Python: Django, Flask, Pandas",
    content: "Webアプリ, 競技プログラミング, 医療系データの解析",
  },
  { title: "TypeScript: React.js, Node.js, Express.js", content: "Webアプリ、API" },
  {
    title: "JavaScript: React.js, Node.js, Express.js, Gatsby.js",
    content: "Webアプリ、API",
  },
  { title: "Go", content: "API開発" },
  { title: "HTML / CSS", content: "フロントデザイン, Styled Component" },
  { title: "MySQL, PostgresQL, MongoDB", content: "Webサービスのデータベース" },
  { title: "Heroku, AWS S3, Netlify, Firebase", content: "インフラ" },
  { title: "Google Apps Script", content: "slack bot開発：積読管理、記事レコメンド)" },
  { title: "Google Analytics", content: "モニタリング" },
];

export const Skills: FCX = ({ className }) => {
  const [skills, setSkills] = useState(skillLists);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setSkills(skillLists);
  }, [skills]);

  return (
    <Section className={className + " " + "#skills"} ref={ref} inView={inView}>
      <StyledTitle>Skills</StyledTitle>
      <Table profiles={skills} />
    </Section>
  );
};

export const StyledSkills = styled(Skills)`
  table {
    text-align: left;
    margin: 0 auto;
  }
`;

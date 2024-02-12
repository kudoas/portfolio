import { FCX } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

import Section from "../styles/Section";
import { StyledTitle } from "./Title";
import Card from "./Card";
import { blog, burgerBuilder, board, htmlTableCreator, slack, cookle, slimline } from "../assets";

const cardItems = [
  {
    title: "HTML Table Creator",
    image: htmlTableCreator,
    detail: "HTMLの<TABLE>タグをGUIで作成できるWebアプリ",
    skills: ["React.js", "TypeScript", "Context API", "Netlify Form"],
    repoLink: (
      <a href="https://github.com/Kudoas/html-table-creator" target="_break">
        REPO
      </a>
    ),
    url: (
      <a href="https://html-table-creator.netlify.app/" target="_break">
        URL
      </a>
    ),
  },
  {
    title: "SlimLine",
    image: slimline,
    detail:
      "オンラインでパーソナルトレーニングを行いたいトレーナーのためのサービス。講師が自分のサイトを持てるようWebサイトを簡単に作成でき、決済・予約・オンラインルームの作成をサービスで全て行える。Treasureで出会った4人で作成した。",
    skills: [
      "Go",
      "PAY.jp",
      "SendGrid",
      "Zoom API",
      "Firebase Authentication",
      "TypeScript",
      "React.js",
      "EC2",
      "ECS",
      "Docker",
      "New Relic",
    ],
    repoLink: (
      <a href="https://github.com/kudoas/slimline" target="_break">
        PUBLIC REPO
      </a>
    ),
  },
  {
    title: "Cookle",
    image: cookle,
    detail: "自炊のモチベーション管理を目的したSNS型アプリ。楽天インターン期間中に6名で作成した。",
    skills: ["Flask", "React.js", "GCP", "S3", "SQLite"],
    repoLink: (
      <a href="https://github.com/Kudoas/Cookle" target="_break">
        PUBLIC REPO
      </a>
    ),
  },
  {
    title: "（旧ブログ）Kudoaの自習室",
    image: blog,
    detail: "日々学習したことや知見を共有するためのブログ",
    skills: ["gatsby.js", "GraphQL", "S3", "Netlify"],
    repoLink: (
      <a href="https://github.com/Kudoas/portofolio-site" target="_break">
        REPO
      </a>
    ),
    url: (
      <a href="https://kudolog.netlify.app" target="_break">
        URL
      </a>
    ),
  },
  {
    title: "Burger Builder",
    image: burgerBuilder,
    detail: "オーダーメイドのハンバーガーを注文できるデモアプリ",
    skills: [
      "Responsive Design",
      "React.js",
      "Redux",
      "Firebase Realtime Database",
      "Firebase Authentication",
    ],
    repoLink: (
      <a href="https://github.com/Kudoas/burger-builder" target="_break">
        REPO
      </a>
    ),
    url: (
      <a href="https://react-my-burger-b6f23.firebaseapp.com/" target="_break">
        URL
      </a>
    ),
  },
  {
    title: "積読管理用のSlack Bot",
    image: slack,
    detail: "週に一回登録した本を通知してくれるslack bot",
    skills: ["GAS", "SlackWebhook API", "SpreadSheet API"],
    repoLink: (
      <a href="https://github.com/Kudoas/book-recommendation-bot" target="_break">
        REPO
      </a>
    ),
  },
  {
    title: "Simpleな掲示板",
    image: board,
    detail: "初めて作成したWebアプリ。フレームワークにのった開発やデータモデリングをここで学んだ。",
    skills: ["Django", "BootStrap4", "PostgresQL", "S3", "Docker", "Heroku", "AWS S3"],
    repoLink: (
      <a href="https://github.com/Kudoas/KudoLog" target="_break">
        REPO
      </a>
    ),
    url: (
      <a href="https://kudolog.herokuapp.com/" target="_break">
        URL
      </a>
    ),
  },
];

export const Works: FCX = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section className={className + " " + "#works"} ref={ref} inView={inView}>
      <StyledTitle>Works</StyledTitle>
      <Grid container spacing={3} alignItems="center">
        {cardItems.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Card
                title={item.title}
                image={item.image}
                detail={item.detail}
                skills={item.skills}
                repoLink={item.repoLink}
                url={item.url}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export const StyledWorks = styled(Works)`
  .grid {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    div {
      margin: 0 auto;
    }
  }
`;

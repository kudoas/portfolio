import React from "react";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Title } from "../components/Title";
import Card from "../components/Card";
import { blog, burgerBuilder, board, htmlTableCreator, slackIcon, slack } from "./../assets";

const useStyles = makeStyles({
  grid: {
    textAlign: "center",
  },
  card: {
    fontSize: "1.6rem",
  },
});

export const Works: React.FCX = ({ className }) => {
  const classes = useStyles();
  const cardItems = [
    {
      title: "個人メディア",
      image: blog,
      detail: "日々学習したことや知見を共有するためのブログ",
      skills: "gatsby, google analytics",
    },
    {
      title: "Burger Builder",
      image: burgerBuilder,
      detail: "(デモ)オーダーメイドのハンバーガーを注文できるアプリ",
      skills: "React.js Redux",
    },
    {
      title: "掲示板",
      image: board,
      detail: "Django製の掲示板アプリ",
      skills: "Django, PostgresQL, S3",
    },
    {
      title: "HTML Table Creator",
      image: htmlTableCreator,
      detail: "HTMLを作成するツール",
      skills: "React.js TypeScript ContextAPI",
    },
    {
      title: "積読管理用bot",
      image: slack,
      detail: "週に一回登録した本を通知してくれるslack bot",
      skills: "GAS, Webhook API, Spread Sheet",
    },
  ];

  return (
    <section className="#works">
      <Title tag="h2">Works</Title>
      <Grid container spacing={3} alignItems="center" justify="center">
        {cardItems.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Card
                className={classes.card}
                title={item.title}
                image={item.image}
                detail={item.detail}
                skills={item.skills}
              />
            </Grid>
          );
        })}
      </Grid>
    </section>
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

import React from "react";
import styled from "@emotion/styled";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import SchoolIcon from "@material-ui/icons/School";

import { StyledTitle } from "../components/Title";

export const Expreience: React.FCX = ({ className }) => {
  const myExperiences = [
    {
      title: "楽天インターン",
      icon: <DirectionsRunIcon style={{ color: "blue" }} />,
      period: "2020/09",
      content: "新規プロトタイプ開発インターン",
      link: "#",
    },
    {
      title: "VOYAGE GROUP Treasure",
      icon: <DirectionsRunIcon style={{ color: "blue" }} />,
      period: "2020/08",
      content: "事前講義を含む、プロダクト開発型インターン",
      link: "#",
    },
    {
      title: " Milliman, Inc. systematic review",
      icon: <CreateIcon style={{ color: "black" }} />,
      period: "2019/07 - 2019/12",
      content: "糖尿病関連の論文を調査し、データをまとめるアルバイト",
      link: "#",
    },
    {
      title: "公衆衛生・疫学研究室 配属",
      icon: <VpnKeyIcon style={{ color: "orange" }} />,
      period: "2019/04",
      content:
        "医療系データ（レセプト、検診データ等）を使用し、薬剤の費用対効果の探索や治療実態の調査を行う",
      link: "#",
    },
    {
      title: "Darn My Engineering Life",
      icon: <FavoriteIcon style={{ color: "red" }} />,
      period: "2019/02",
      content: "エンジニアリングの楽しさに気付き、学習を開始する",
      link: "#",
    },
    {
      title: "Master’s degree, Department of Pharmacy, Meiji Pharmaceutical University, Japan",
      icon: <SchoolIcon style={{ color: "brown" }} />,
      period: "2017/04 - expected 2022/03",
      link: "#",
    },
  ];

  return (
    <section className={className + " " + "#experiences"}>
      <StyledTitle tag="h2">Experiences</StyledTitle>
      <Timeline>
        {myExperiences.map((ex) => {
          return (
            <TimelineEvent
              key={ex.title}
              title={ex.title}
              createdAt={ex.period}
              icon={ex.icon}
              iconColor="#09f"
            >
              {ex.content ? (
                <Typography key={ex.title} component="p" variant="inherit">
                  {ex.content}
                </Typography>
              ) : null}
            </TimelineEvent>
          );
        })}
      </Timeline>
    </section>
  );
};

export const StyledExpreience = styled(Expreience)`
  .intern {
    text-align: center;
  }
`;

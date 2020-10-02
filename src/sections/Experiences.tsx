import React from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

import LocalMallIcon from "@material-ui/icons/LocalMall";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import SchoolIcon from "@material-ui/icons/School";

import Section from "../styles/Section";
import { StyledTitle } from "../components/Title";
import { StyledTimeline } from "../components/Timeline/Timeline";

const myExperiences = [
  {
    title: "技育展 登壇",
    icon: <EmojiPeopleIcon />,
    date: "2020/09/26",
    content:
      "「未来の技術者を育てる」ことを目的とし自らのアウトプットを「展示」する学生向けテックカンファレンス。インターンで作成したWebアプリ「SlimLine」を追加開発し、チームメンバーと登壇した。",
    color: "#00CC00",
    link: (
      <a href="https://speakerdeck.com/kudoas/slimline">登壇資料/ SlimLineというサービスについて</a>
    ),
  },
  {
    title: "楽天 インターン",
    icon: <LocalMallIcon />,
    date: "2020/09/01 - 2020/09/11",
    content:
      "6人1チームで「オンラインで人と人を繋ぐ」というテーマのもと新規プロトタイプ開発インターン。サービスのアイデアの構築、言語や使用するサービスの選定、システム・DB・API設計、開発とQAまで2週間で行い、最終プレゼンを英語で行った。",
    color: "rgb(33, 150, 243)",
  },
  {
    title: "VOYAGE GROUP Treasure",
    icon: <LocalMallIcon />,
    date: "2020/08",
    content:
      "Goを使用したAPI開発とエンドポイント・データベース設計やReactやWebRTCを使用したフロントエンド開発、インフラまで含めた事前講義と、学生4人＋サポーター3人での2週間のチーム開発の約1か月のインターン",
    color: "rgb(33, 150, 243)",
    link: (
      <a href="https://kudoa.hatenablog.com/entry/2020/10/01/120757">
        ブログ/ VOYAGE GROUPのインターン「Treasure」に参加して
      </a>
    ),
  },
  {
    title: " Milliman, Inc. Systematic Review",
    icon: <LocalMallIcon />,
    date: "2019/07 - 2019/12",
    content: "糖尿病に関するシステマティックレビューのバイト",
    color: "rgb(33, 150, 243)",
  },
  {
    title: "公衆衛生・疫学研究室 配属",
    icon: <VpnKeyIcon />,
    date: "2019/04",
    content:
      "医療系データ（レセプト、検診データ等）を使用し、薬剤の費用対効果の探索や治療実態の調査を行う",
    color: "#0066FF",
    link: <a href="https://u-lab.my-pharm.ac.jp/~pharmepi/index.html">URL/ 公衆衛生・疫学研究室</a>,
  },
  {
    title: "Darn My Engineering Life",
    icon: <FavoriteIcon />,
    date: "2019/02",
    content: "エンジニアリングの楽しさに気付きのめり込む",
    color: "#FF3399",
  },
  {
    title: "Master’s degree, Department of Pharmacy, Meiji Pharmaceutical University, Japan",
    icon: <SchoolIcon />,
    date: "2017/04 - expected 2022/03",
    color: "#993333",
  },
];

export const Expreience: React.FCX = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section className={className + " " + "#experiences"} ref={ref} inView={inView}>
      <StyledTitle>Experiences</StyledTitle>
      <StyledTimeline experieces={myExperiences} />
    </Section>
  );
};

export const StyledExpreience = styled(Expreience)`
  .intern {
    text-align: center;
  }
`;

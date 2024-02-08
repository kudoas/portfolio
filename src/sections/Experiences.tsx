import { FCX } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SchoolIcon from "@mui/icons-material/School";

import Section from "../styles/Section";
import { StyledTitle } from "../components/Title";
import { StyledTimeline } from "../components/Timeline/Timeline";

const myExperiences = [
  {
    title: "YUMEMI Intern",
    icon: <LocalMallIcon />,
    date: "2020/11/16 - 2020/11/20",
    content:
      "jsを使用したプロトタイプ作成、管理しやすいコンポーネントの設計、CI/CDの導入を経験、純粋なstyled-componentによるデザイニングを経験した。",
    color: "rgb(33, 150, 243)",
    link: (
      <a href="https://kudolog.net/posts/yumemi-intern/">ブログ/ ゆめみのインターンに参加して</a>
    ),
  },
  {
    title: "技育展 登壇",
    icon: <EmojiPeopleIcon />,
    date: "2020/09/26",
    content:
      "「未来の技術者を育てる」ことを目的とし自らのアウトプットを「展示」する学生向けテックカンファレンス。インターンで作成したWebアプリ「SlimLine」を追加開発し、チームメンバーと登壇した。",
    color: "#00CC00",
    link: <a href="https://speakerdeck.com/kudoas/slimline">プレゼン資料/ SlimLine</a>,
  },
  {
    title: "Rakuten Intern",
    icon: <LocalMallIcon />,
    date: "2020/09/01 - 2020/09/11",
    content:
      "6人1チームで「オンラインで人と人を繋ぐ」というテーマのもと新規プロトタイプ開発インターン。サービスのアイデアの構築、言語や使用するサービスの選定、システム・DB・API設計、開発とQAまで2週間で行い、最終プレゼンを英語で行った。結果は7チーム中3位であった。",
    color: "rgb(33, 150, 243)",
    link: <a href="https://speakerdeck.com/kudoas/cookle">プレゼン資料/ Cookle</a>,
  },
  {
    title: "VOYAGE GROUP Intern Treasure",
    icon: <LocalMallIcon />,
    date: "2020/08",
    content:
      "Goを使用したAPI開発とエンドポイント・データベース設計やReactやWebRTCを使用したフロントエンド開発、インフラまで含めた事前講義と、学生4人＋サポーター3人での2週間のチーム開発の約1か月のインターン。アイデアや異常系（エラーハンドリング）の実装、サービスの完成度が評価され、UI/UX賞・アイデア賞・グランプリを受賞した。",
    color: "rgb(33, 150, 243)",
    link: (
      <a href="https://kudolog.net/posts/treasure/">
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

export const Experience: FCX = ({ className }) => {
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

export const StyledExperience = styled(Experience)`
  .intern {
    text-align: center;
  }
`;

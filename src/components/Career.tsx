import { FCX } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

import Section from "./Section";
import { StyledTitle } from "./Title";

const careers = [
  {
    title: "Classi Corp. Software Engineer",
    date: "2022/04 -",
  },
  {
    title: "Master’s degree, Department of Pharmacy, Meiji Pharmaceutical University, Japan",
    date: "2022/03",
  },
  {
    title: "YUMEMI Intern",
    date: "2020/11/16 - 2020/11/20",
    content:
      "jsを使用したプロトタイプ作成、管理しやすいコンポーネントの設計、CI/CDの導入、styled-component によるデザイニングを経験した。",
    link: (
      <a href="https://blog.da1chi.net/posts/yumemi-intern/">
        ブログ/ ゆめみのインターンに参加して
      </a>
    ),
  },
  {
    title: "Rakuten Intern",
    date: "2020/09/01 - 2020/09/11",
    content:
      "6人1チームで「オンラインで人と人を繋ぐ」というテーマのもと新規プロトタイプ開発インターン。サービスのアイデアの構築、言語や使用するサービスの選定、システム・DB・API設計、開発とQAまで2週間で行った",
    link: <a href="https://speakerdeck.com/kudoas/cookle">プレゼン資料/ Cookle</a>,
  },
  {
    title: "VOYAGE GROUP Intern Treasure",
    date: "2020/08",
    content:
      "エンドポイント・データベース設計, WebRTC を使用したフロントエンド, インフラの事前講義と、学生4人＋サポーター3人での2週間のチーム開発の約1か月のインターン。UI/UX賞・アイデア賞・グランプリを受賞した。",
    link: (
      <a href="https://blog.da1chi.net/posts/treasure/">
        ブログ/ VOYAGE GROUPのインターン「Treasure」に参加して
      </a>
    ),
  },
];

export const Career: FCX = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section className={className + " " + "#career"} ref={ref} inView={inView}>
      <StyledTitle>Career</StyledTitle>
      <div>
        {careers.map((career, i) => (
          <div key={i}>
            <table>
              <tr>
                <td>
                  <div className="date">{career.date}</div>
                  <h3>{career.title}</h3>
                </td>
                {career.content && (
                  <td>
                    <div>{career.content}</div>
                    {career.link}
                  </td>
                )}
              </tr>
            </table>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const StyledCareer = styled(Career)`
  .date {
    color: #666;
  }
  h3 {
    margin: 10px 0;
  }
  td {
    padding: 20px 0;
  }
  td:nth-of-type(1) {
    width: 40%;
  }
  a {
    display: block;
    margin: 10px 0;
  }
`;

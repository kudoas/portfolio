import { css, Global } from "@emotion/react";

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
        body {
          font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "游ゴシック Medium",
            "Yu Gothic Medium", "游ゴシック体", YuGothic, "メイリオ", Meiryo, Osaka,
            "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
          /* はてなブログアイコン */
          .fa-hatena {
            &:before {
              content: "B!";
              font-style: normal;
              font-family: Verdana;
              font-weight: bold;
            }
          }
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 1.5;
          color: #4a4a4a;
          a:link {
            color: #0044cc;
          }
          a:visited {
            color: #0044cc;
          }
          h1 {
            font-size: 4rem;
            margin: 12rem 1.25rem 2.5rem 1.25rem;
          }
          @media screen and (max-width: 768px) {
            h1 {
              font-size: 3rem;
              margin: 6rem 1.25rem 2.5rem 1.25rem;
            }
          }
          @media screen and (max-width: 480px) {
          }
          @media screen and (max-height: 430px) {
          }
          h2 {
            font-size: 3.4rem;
          }
          h3 {
            font-size: 2rem;
          }
          h1,
          h2,
          h3 {
            display: inline-block;
          }
          a {
            text-decoration: none;
          }
          section {
            width: 60%;
            margin: 0 auto;
          }
          @media screen and (max-width: 768px) {
            section {
              width: 90%;
            }
          }
        }
      }
    `}
  />
);

export default GlobalCSS;

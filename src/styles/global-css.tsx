import React from "react";

import { css, Global } from "@emotion/core";

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
        body {
          font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "游ゴシック Medium",
            "Yu Gothic Medium", "游ゴシック体", YuGothic, "メイリオ", Meiryo, Osaka,
            "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
          font-size: 1.6em;
          color: #09090f;
          background: rgba(243, 244, 245, 1);
          h1 {
            font-size: 5rem;
          }
          h2 {
            display: inline-block;
            margin: 20px 5%;
            font-size: 3.4rem;
            text-align: center;
          }
          h2::after {
            display: block;
            height: 2px;
            content: "";
            background: #09f;
          }
          a {
            text-decoration: none;
          }
          section {
            width: 80%;
            margin: 0 auto;
            text-align: center;
          }
        }
      }
    `}
  />
);

export default GlobalCSS;

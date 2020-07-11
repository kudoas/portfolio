import React from "react";

import { css, Global } from "@emotion/core";

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
        body {
          color: #09090f;
          font-size: 1.6em;
          h2 {
            font-size: 3.4rem;
            text-align: center;
          }
          a {
            text-decoration: none;
          }
        }
      }
    `}
  />
);

export default GlobalCSS;

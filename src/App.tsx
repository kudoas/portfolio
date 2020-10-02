import React from "react";

import { ThemeProvider as MaterialThemeProvider, StylesProvider } from "@material-ui/styles";

import { theme } from "./theme/theme";
import { GlobalCSS, ResetCSS } from "./styles";
import { Home } from "./pages/Home";

// assets
import "./assets/atcoder.png";
import "./assets/blog.png";
import "./assets/board.png";
import "./assets/burger-builder.png";
import "./assets/cookle.png";
import "./assets/html-table-creator.png";
import "./assets/icon.png";
import "./assets/slack.png";
import "./assets/slimline.png";

const App: React.FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <ResetCSS />
          <GlobalCSS />
          <Home />
        </MaterialThemeProvider>
      </StylesProvider>
    </>
  );
};

export default App;

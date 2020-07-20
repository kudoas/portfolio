import React from "react";
import ReactDOM from "react-dom";

import { GlobalCSS, ResetCSS } from "./styles";
import { Main } from "./pages";

// assets
import "./assets/icon.png";
import "./assets/works/blog.png";
import "./assets/works/board.png";
import "./assets/works/burger-builder.png";
import "./assets/works/html-table-creator.png";
import "./assets/works/slack-icon.png";

const App: React.FC = () => {
  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Main />
    </>
  );
};

const target = document.getElementById("app");

ReactDOM.render(<App />, target);

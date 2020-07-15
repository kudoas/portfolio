import React from "react";
import ReactDOM from "react-dom";

import { GlobalCSS, ResetCSS } from "./styles";
import { Main } from "./Main";

// assets
import "./assets/imgs/icon.png";
import "./assets/imgs/works/blog.png";
import "./assets/imgs/works/board.png";
import "./assets/imgs/works/burger-builder.png";
import "./assets/imgs/works/html-table-creator.png";

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

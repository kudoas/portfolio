import React from "react";
import ReactDOM from "react-dom";

import { GlobalCSS, ResetCSS } from "./styles";
import { Main } from "./Main";

import "./assets/imgs/icon.png";

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

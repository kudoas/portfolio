import React from "react";

import { GlobalCSS, ResetCSS } from "./styles";
import { Main } from "./pages";

const App: React.FC = () => {
  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Main />
    </>
  );
};

export default App;

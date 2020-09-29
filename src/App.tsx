import React from "react";

import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";

import { theme } from "./theme/theme";
import { GlobalCSS, ResetCSS } from "./styles";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <MaterialThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalCSS />
        <Home />
      </MaterialThemeProvider>
    </>
  );
};

export default App;

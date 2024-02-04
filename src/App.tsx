import React from "react";

import { ThemeProvider as MaterialThemeProvider, StylesProvider } from "@material-ui/styles";

import { theme } from "./theme/theme";
import { GlobalCSS, ResetCSS } from "./styles";
import { Home } from "./pages/Home";

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

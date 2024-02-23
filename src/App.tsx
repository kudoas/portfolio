import { FC } from "react";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { VercelAnalytics } from "./observable/vercel";

import { theme } from "./theme/theme";
import { GlobalCSS, ResetCSS } from "./styles";
import { Home } from "./pages/Home";

const App: FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <ResetCSS />
          <GlobalCSS />
          <Home />
        </MaterialThemeProvider>
      </StylesProvider>
      <VercelAnalytics />
    </>
  );
};

export default App;

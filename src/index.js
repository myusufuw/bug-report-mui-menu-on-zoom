import { createRoot } from "react-dom/client";

// COMPONENTS
import App from "./App";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";

// CONSTANTS
import customTheme from "constants/customTheme";

// MUIS
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={customTheme}>
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      <App />
    </StyledEngineProvider>
  </ThemeProvider>
);

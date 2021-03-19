import React from "react";
import ReactDOM from "react-dom";

// custom theme for material-ui
import { ThemeProvider } from "@material-ui/styles";
import theme from "./MyTheme";

// entry point
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

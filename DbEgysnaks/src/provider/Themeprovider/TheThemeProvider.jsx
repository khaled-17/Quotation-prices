import { ThemeProvider, createTheme } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import { getDesignTokens } from "./theme";

export const ThemeContext = createContext("");

function TheThemeProvider({ children }) {
  // const [mode, setMode] = React.useState(localStorage.getItem("currentMode")?localStorage.getItem("currentMode"):"light");
  const [mode, setMode] = useState("light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider    value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
  
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default TheThemeProvider;

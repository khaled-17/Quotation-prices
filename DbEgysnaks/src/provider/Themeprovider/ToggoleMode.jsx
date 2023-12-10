import { IconButton, useTheme } from "@mui/material";
import  { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { ThemeContext } from "./TheThemeProvider";

export default function ToggoleMode() {
  const { mode, setMode } = useContext(ThemeContext);

  const theme = useTheme();

function checkMode(params) {
  return theme.palette.mode
}

const setLocalStorage=()=>{
  localStorage.setItem(
    "currentMode",
    checkMode() === "dark" ? "light" : "dark"
  );
  setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
 
}

  return (
    <>
      {checkMode() == "light" ? (
        <IconButton onClick={setLocalStorage}color="inherit"        >
          <LightModeOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton onClick={setLocalStorage}color="inherit"        >
          <DarkModeOutlinedIcon />
        </IconButton>
      )}
    </>
  );
}

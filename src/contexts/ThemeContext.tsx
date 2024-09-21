import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  mode: "light" | "dark" | "system";
  setMode: (mode: "light" | "dark" | "system") => void;
  theme: any;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark" | "system">("system");

  // Lógica para o modo "sistema"
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  useEffect(() => {
    if (mode === "system") {
      setMode(getSystemTheme());
    }
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode: mode === "system" ? getSystemTheme() : mode,
    },
  });

  useEffect(() => {
    // Aplicar cor de fundo e texto ao body conforme o tema
    if (mode === "dark") {
      document.body.style.backgroundColor = "#121212"; // Cor do modo escuro
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white"; // Cor do modo claro
      document.body.style.color = "black";
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

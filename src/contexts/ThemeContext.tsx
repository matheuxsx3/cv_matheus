import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ThemeContextProps {
  mode: "system" | "light" | "dark";
  setMode: (mode: "system" | "light" | "dark") => void;
  textColor: string;
  backgroundColor: string;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"system" | "light" | "dark">("system");

  // Efeito para aplicar o tema no body e definir cores
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const themeMode =
      mode === "system" ? (prefersDarkMode ? "dark" : "light") : mode;

    document.body.className =
      themeMode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  }, [mode]);

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const textColor =
    mode === "dark" || (mode === "system" && prefersDarkMode)
      ? "white"
      : "black";
  const backgroundColor =
    mode === "dark" || (mode === "system" && prefersDarkMode)
      ? "gray.800"
      : "white";

  return (
    <ThemeContext.Provider
      value={{ mode, setMode, textColor, backgroundColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return context;
}

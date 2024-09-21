import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";

function ChooseTheme() {
  const { mode, setMode } = useThemeContext();

  const textColor = mode === "dark" ? "white" : "black";
  const backgroundColor = mode === "dark" ? "#424242" : "white";

  return (
    <div className="flex items-center rounded-md p-2">
      <FormControl fullWidth>
        <InputLabel id="theme" sx={{ color: textColor }}>
          Tema
        </InputLabel>
        <Select
          labelId="theme"
          id="theme"
          value={mode}
          label="Tema"
          onChange={(event) =>
            setMode(event.target.value as "system" | "light" | "dark")
          }
          sx={{
            color: textColor,
            bgcolor: backgroundColor,
            "& .MuiSelect-icon": {
              color: textColor,
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                color: textColor,
              },
            },
          }}
        >
          <MenuItem value="system">
            {mode === "dark" ? "System" : "System"}
          </MenuItem>
          <MenuItem value="light">
            {mode === "dark" ? "Claro" : "Claro"}
          </MenuItem>
          <MenuItem value="dark">
            {mode === "dark" ? "Escuro" : "Escuro"}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ChooseTheme;

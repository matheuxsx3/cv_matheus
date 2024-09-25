import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext"; // Usar o hook

function ChooseTheme() {
  const { mode, setMode } = useThemeContext(); // Usa o hook para acessar o contexto

  const textColor = mode === "dark" ? "white" : "black";
  const backgroundColor = mode === "dark" ? "#121212" : "white";
  const selectBackgroundColor = mode === "dark" ? "#121212" : "white"; // Cor de fundo para o select

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
            backgroundColor: selectBackgroundColor,
            "& .MuiSelect-icon": {
              color: textColor, 
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                color: textColor, 
                bgcolor: backgroundColor, 
              },
            },
          }}
        >
          <MenuItem value="light">Claro</MenuItem>
          <MenuItem value="dark">Escuro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ChooseTheme;

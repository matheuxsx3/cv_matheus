import { alpha, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChooseTheme from "./ChooseTheme";
import { useState } from "react";
import ImageModal from "./ImageModal";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";
import { useThemeContext } from "../../contexts/ThemeContext";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme } = useThemeContext();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Função para navegar até a seção ao clicar em um botão
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: 0,
            }}
          >
            {/* Navbar para Desktop */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <ImageModal />
                <Button
                  variant="text"
                  size="small"
                  className="flex flex-col items-center"
                  sx={{ color: theme.palette.text.primary }}
                  onClick={() => handleScrollToSection("apresentacao")}
                >
                  <WavingHandOutlinedIcon />
                  <span>Apresentação</span>
                </Button>
                <Button
                  variant="text"
                  size="small"
                  className="flex flex-col items-center"
                  sx={{ color: theme.palette.text.primary }}
                  onClick={() => handleScrollToSection("educacao")}
                >
                  <SchoolOutlinedIcon />
                  <span>Educação</span>
                </Button>

                <Button
                  variant="text"
                  size="small"
                  className="flex flex-col items-center"
                  sx={{ color: theme.palette.text.primary }}
                  onClick={() => handleScrollToSection("experiencia")}
                >
                  <WorkHistoryOutlinedIcon />
                  <span>Experiência</span>
                </Button>

                <Button
                  variant="text"
                  size="small"
                  className="flex flex-col items-center"
                  sx={{ color: theme.palette.text.primary }}
                  onClick={() => handleScrollToSection("portfolio")}
                >
                  <CodeOutlinedIcon />
                  <span>Portfólio</span>
                </Button>

                <Button
                  variant="text"
                  size="small"
                  className="flex flex-col items-center"
                  sx={{ color: theme.palette.text.primary }}
                  onClick={() => handleScrollToSection("contato")}
                >
                  <ContactPageOutlinedIcon />
                  <span>Contato</span>
                </Button>

                <Button
                  variant="text"
                  size="small"
                  className="flex flex-col items-center"
                  sx={{ color: theme.palette.text.primary }}
                  onClick={() => handleScrollToSection("certificacoes")}
                >
                  <WorkspacePremiumOutlinedIcon />
                  <span>Certificações</span>
                </Button>

                <ChooseTheme />
              </Box>
            </Box>

            {/* Navbar para Mobile */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Imagem no início */}
              <Box>
                <ImageModal />
              </Box>

              {/* Ícone de menu no final */}
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>

              {/* Drawer para Mobile */}
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  <Divider sx={{ my: 3 }} />

                  {/* Itens do Menu para Mobile */}
                  <MenuItem
                    onClick={() => {
                      handleScrollToSection("apresentacao");
                      toggleDrawer(false)();
                    }}
                  >
                    Apresentação
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleScrollToSection("educacao");
                      toggleDrawer(false)();
                    }}
                  >
                    Educação
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleScrollToSection("experiencia");
                      toggleDrawer(false)();
                    }}
                  >
                    Experiência
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleScrollToSection("portfolio");
                      toggleDrawer(false)();
                    }}
                  >
                    Portfólio
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleScrollToSection("contato");
                      toggleDrawer(false)();
                    }}
                  >
                    Contato
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleScrollToSection("certificacoes");
                      toggleDrawer(false)();
                    }}
                  >
                    Certificações
                  </MenuItem>

                  <Box>
                    <ChooseTheme />
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

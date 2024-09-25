import { alpha, styled } from "@mui/material/styles";
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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Alinhamento correto entre os itens
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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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

                <Button variant="text" color="info" size="small">
                  Sobre Mim
                </Button>
                <Button variant="text" color="info" size="small">
                  Educação
                </Button>
                <Button variant="text" color="info" size="small">
                  Experiência
                </Button>
                <Button variant="text" color="info" size="small">
                  Portfólio
                </Button>
                <Button variant="text" color="info" size="small">
                  Contato
                </Button>
                <Button variant="text" color="info" size="small">
                  Certificações
                </Button>
                <ChooseTheme />
              </Box>
            </Box>

            {/* Navbar para Mobile */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between", // Garante que a imagem fique no início e o menu no final
                alignItems: "center", // Centraliza verticalmente
                width: "100%", // Garante que ocupe toda a largura do AppBar
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
                  <MenuItem>Sobre Mim</MenuItem>
                  <MenuItem>Educação</MenuItem>
                  <MenuItem>Experiência</MenuItem>
                  <MenuItem>Portfólio</MenuItem>
                  <MenuItem>Contato</MenuItem>
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

import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChooseTheme from "./ChooseTheme"; // Certifique-se de ajustar o caminho
import { Button, ButtonGroup } from "@mui/material";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para habilitar/desabilitar o scroll da página
  useEffect(() => {
    if (isOpen) {
      // Desabilitar scroll do body
      document.body.style.overflow = "hidden";
    } else {
      // Reabilitar scroll do body
      document.body.style.overflow = "";
    }

    // Limpeza quando o componente desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md ">
      <div className="container flex justify-between items-center">
        <ButtonGroup
          className="flex justify-start align-middle"
          variant="text"
          aria-label="Basic button group"
        >
          <Button>Sobre mim</Button>
          <Button>Contato</Button>
          <Button>Tecnologias</Button>
          <Button>Tecnologias</Button>
          <Button>Educação</Button>
          <Button>Certificados</Button>
        </ButtonGroup>

        <div className="flex items-center space-x-4">
          <ChooseTheme />
          <button
            onClick={toggleMenu}
            className="md:hidden text-black dark:text-white focus:outline-none"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu para dispositivos móveis */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-700 fixed inset-0 z-40 overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="p-4">
            <a href="#sobre" className="block p-4 text-black dark:text-white">
              Sobre mim
            </a>
            <a href="#contato" className="block p-4 text-black dark:text-white">
              Contato
            </a>
            <a
              href="#tecnologias"
              className="block p-4 text-black dark:text-white"
            >
              Tecnologias
            </a>
            <a
              href="#educacao"
              className="block p-4 text-black dark:text-white"
            >
              Educação
            </a>
            <a
              href="#experiencia"
              className="block p-4 text-black dark:text-white"
            >
              Experiência
            </a>
            <a
              href="#certificados"
              className="block p-4 text-black dark:text-white"
            >
              Certificados
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

export default function ImageModal() {
  const [modal, setModal] = useState(false);
  const handleModalOpen = () => setModal(true);
  const handleModalClose = () => setModal(false);

  return (
    <>
      <Button onClick={handleModalOpen}>
        <img
          className=" w-20 h-20"
          src="https://github.com/matheuxsx3/cv_matheus/blob/main/conteudo/NoBgMatheus.png?raw=true"
          alt="image of Matheus Pereira da Silva"
        />
      </Button>

      <Modal open={modal} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            maxWidth: "100%",
            bgcolor: "#121212",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <img
            src="https://github.com/matheuxsx3/cv_matheus/blob/main/conteudo/NoBgMatheus.png?raw=true"
            alt="image of Matheus Pereira da Silva"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Modal>
    </>
  );
}

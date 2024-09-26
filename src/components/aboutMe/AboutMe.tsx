import { Box, Container, Typography, Link, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import ImageCarousel from "./Carousel";

// Animação para as seções
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const section = document.getElementById(id!);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("click", handleScroll);
    return () => window.removeEventListener("click", handleScroll);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 17, pb: 1 }}>
      {/* Apresentação */}
      <motion.section
        id="apresentacao"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <Box sx={{ py: 5 }}>
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p>Bem-vindo! eu sou... </p>
                <h1 className="mt-5 text-4xl font-bold">
                  Matheus Pereira da Silva
                </h1>
                <p className="mb-5"> 20 anos | Rio de Janeiro</p>
                <p>Desenvolvedor de Software Full-Stack</p>

                <div className="mt-5 flex">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://web.whatsapp.com/send/?phone=5521990433085&text&type=phone_number&app_absent=0",
                        "_blank"
                      )
                    }
                    color="info"
                  >
                    <WhatsAppIcon />
                  </Button>
                  <Button
                    onClick={() => window.open("https://github.com/matheuxsx3")}
                    color="info"
                  >
                    <GitHubIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      window.location.href = "mailto:matheus.s280604@gmail.com";
                    }}
                  >
                    <EmailIcon />
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/matheus-ps-dev/",
                        "_blank"
                      )
                    }
                    color="info"
                  >
                    <LinkedInIcon />
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/matheuxsx3/",
                        "_blank"
                      )
                    }
                    color="info"
                  >
                    <InstagramIcon />
                  </Button>
                </div>
              </div>

              <ImageCarousel />
            </div>
          </div>
        </Box>
      </motion.section>

      {/* Objetivo Profissional */}
      <motion.section
        id="objetivo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <Box sx={{ my: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            OBJETIVO PROFISSIONAL
          </Typography>
          <Typography variant="body1" component="p">
            Atuar na área de TI, especialmente no desenvolvimento de softwares.
          </Typography>
        </Box>
      </motion.section>

      {/* Resumo Profissional */}
      <motion.section
        id="resumo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={sectionVariants}
      >
        <Box sx={{ my: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            RESUMO PROFISSIONAL
          </Typography>
          <Typography variant="body1" component="p">
            Suporte comercial PJ (6 meses). Graduando em Gestão da Tecnologia da
            Informação. Bootcamp de programação (447 horas) na ONG Generation
            Brasil. Hackaton de programação (42 RIO). Tecnologias: Java 17,
            Spring (Boot, Security (jwt), JPA, MVC), Apache Kafka, SQL, NoSQL,
            Docker e docker-compose, React (Typescript), HTML, CSS (Tailwind),
            Git, GitHub, Scrum e Kanban.
          </Typography>
        </Box>
      </motion.section>

      {/* Educação */}
      <motion.section
        id="educacao"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        variants={sectionVariants}
      >
        <Box sx={{ my: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            EDUCAÇÃO
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Graduação - Gestão da Tecnologia da Informação</strong>{" "}
            <br />
            Data de conclusão prevista: 03/2025 <br />
            Universidade Santo Amaro
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            <strong>Bootcamp - Desenvolvedor Full Stack Junior</strong> <br />
            Data de conclusão: 11/2023 <br />
            Generation Brasil
          </Typography>
        </Box>
      </motion.section>

      {/* Experiências Profissionais */}
      <motion.section
        id="experiencia"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={sectionVariants}
      >
        <Box sx={{ my: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            EXPERIÊNCIAS PROFISSIONAIS
          </Typography>
          <Typography variant="body1" component="p">
            <strong>
              Youngest - Suporte Comercial (PJ) | 11/2023 – 05/2024
            </strong>{" "}
            <br />
            Desenvolvimento de software da empresa utilizando WordPress da
            Hostinger. Revenda B2B de produtos de informática através de
            licitações e compras diretas. Certificações em plataformas de
            distribuidores e fabricantes. Comunicação com clientes. Suporte
            técnico, esclarecendo dúvidas e garantindo a satisfação do cliente.
          </Typography>
        </Box>
      </motion.section>

      {/* Portfólio */}
      <motion.section
        id="portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
        variants={sectionVariants}
      >
        <Box sx={{ my: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            PORTFÓLIO
          </Typography>
          <Typography variant="body1" component="p">
            BANCO DIGITAL - Sistema de microsserviços baseado no padrão Saga,
            orquestrado com Apache Kafka. <br />
            <Link
              href="https://github.com/matheuxsx3/banco-digital"
              target="_blank"
            >
              Banco Digital
            </Link>
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            MERCADELA - Sistema de Marketplace que visa fomentar a igualdade de
            gênero e o empoderamento feminino com base em empreendedorismo.{" "}
            <br />
            <Link href="https://github.com/Grupo4-Generation" target="_blank">
              Mercadela
            </Link>
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            CV-MATHEUS - Currículo desenvolvido em React. <br />
            <Link
              href="https://github.com/matheuxsx3/cv_matheus"
              target="_blank"
            >
              Dev
            </Link>{" "}
            |{" "}
            <Link
              href="https://matheuxsx3.github.io/cv_matheus/"
              target="_blank"
            >
              Prod
            </Link>
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            BLOG PESSOAL <br />
            <Link
              href="https://github.com/matheuxsx3/blogpessoal-BACKEND"
              target="_blank"
            >
              Blog Pessoal
            </Link>
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            PADARIA - Sistema básico offline de "E-commerce". <br />
            <Link href="https://github.com/matheuxsx3/Padaria" target="_blank">
              Padaria
            </Link>
          </Typography>
        </Box>
      </motion.section>

      {/* Certificações */}
      <motion.section
        id="certificacoes"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.4 }}
        variants={sectionVariants}
      >
        <Box sx={{ my: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            CURSOS EXTRACURRICULARES & CERTIFICAÇÕES
          </Typography>
          <Typography variant="body1" component="p">
            ARQUITETURA DE MICROSSERVIÇOS: PADRÃO SAGA ORQUESTRADO - UDEMY -
            2024 <br />
            AWS CUSTOMER-CENTRIC – TD SYNNEX – 2024 <br />
            HACKATHON DEMO DAY – 42 RIO - 2023 <br />
            AWS CLOUD PRACTITIONER ESSENTIALS – 4H - 2023 <br />
            AWS CLOUD FOR FINANCE PROFESSIONALS (PORTUGUESE) - AWS – 17H – 2023{" "}
            <br />
            AWS CLOUD ECONOMIC FOR STARTUPS – AWS – 10H - 2023 <br />
            JAVA - ROCKETSEAT - 2022 <br />
            HTML | CSS | JAVASCRIPT - ROCKETSEAT - 2021
          </Typography>
        </Box>
      </motion.section>
    </Container>
  );
}

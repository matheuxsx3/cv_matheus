export default function AboutMe() {
  return (
    <div className="flex flex-col mx-1 mt-28 w-full relative z-10">
      <div className="flex mb-3">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-1">MATHEUS PEREIRA DA SILVA</h2>
          <p className="text-base mb-3">
            20 anos | São Gonçalo – RJ
            <br />
            Telefone: (21) 99043-3085
            <br />
            E-mail:{" "}
            <a
              href="mailto:matheus.s280604@gmail.com"
              className="text-blue-500 hover:underline"
            >
              matheus.s280604@gmail.com
            </a>
            <br />
            GitHub:{" "}
            <a
              href="https://github.com/matheuxsx3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://github.com/matheuxsx3
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/matheus-ps-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.linkedin.com/in/matheus-ps-dev/
            </a>
          </p>
        </div>

        {/* Coluna da direita - Imagem */}
        <div className="w-1/3 flex items-center justify-center">
          <img
            className="w-32 h-32"
            src="https://github.com/matheuxsx3/cv_matheus/blob/main/conteudo/NoBgMatheus.png?raw=true"
            alt="imagem de Matheus Pereira da Silva"
          />
        </div>
      </div>

      {/* Conteúdo restante organizado em uma coluna */}
      <div className="flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">OBJETIVO PROFISSIONAL</h3>
          <p>
            Atuar na área de TI, especialmente no desenvolvimento de softwares.
          </p>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">RESUMO PROFISSIONAL</h3>
          <p>
            Suporte comercial PJ (6 meses). Graduando em Gestão da Tecnologia da
            Informação. Bootcamp de programação (447 horas) na ONG Generation
            Brasil. Hackaton de programação (42 RIO). Tecnologias: Java 17,
            Spring (Boot, Security (jwt), JPA, MVC), Apache Kafka, SQL, NoSQL,
            Docker e docker-compose, React (Typescript), HTML, CSS (Tailwind),
            Git, GitHub, Scrum e Kanban. Portfólio: Marketplace, Blog Pessoal e
            um banco digital em desenvolvimento.
          </p>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">
            EXPERIÊNCIAS PROFISSIONAIS
          </h3>
          <p>
            <strong>
              Youngest - Suporte Comercial (PJ) | 11/2023 – 05/2024
            </strong>
            <br />
            Desenvolvimento de software da empresa utilizando WordPress da
            Hostinger. Revenda B2B de produtos de informática através de
            licitações e compras diretas. Certificações em plataformas de
            distribuidores e fabricantes. Comunicação com clientes. Suporte
            técnico, esclarecendo dúvidas e garantindo a satisfação do cliente.
          </p>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">EDUCAÇÃO</h3>
          <p>
            <strong>Graduação - Gestão da Tecnologia da Informação</strong> |
            Data de conclusão prevista: 03/2025
            <br />
            Instituição: Universidade Santo Amaro
            <br />
            <strong>Bootcamp - Desenvolvedor Full Stack Junior.</strong> | Data
            de conclusão: 11/2023
            <br />
            Instituição: Generation Brasil
          </p>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">IDIOMAS</h3>
          <p>
            Inglês - Básico | boa leitura, escrita e conversação.
            <br />
            Espanhol - Básico
          </p>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">PORTFÓLIO</h3>
          <div>
            <p>
              <strong>BANCO DIGITAL</strong> - Sistema de microsserviços baseado
              no padrão Saga, orquestrado com Apache Kafka. A arquitetura
              utiliza APIs REST desenvolvidas em Java (Spring) e front-end em
              JavaScript (React + TypeScript), com armazenamento de dados em
              MongoDB e PostgreSQL.
            </p>
            <a
              href="https://github.com/matheuxsx3/banco-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://github.com/matheuxsx3/banco-digital
            </a>
          </div>
          <div>
            <p>
              <strong>MERCADELA</strong> - Sistema de Marketplace que visa
              fomentar a igualdade de gênero e o empoderamento feminino com base
              em empreendedorismo.
              <br />
              <a
                href="https://github.com/Grupo4-Generation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://github.com/Grupo4-Generation
              </a>
            </p>
          </div>
          <div>
            <p>
              <strong>CV-MATHEUS</strong> - Currículo desenvolvido em React.
            </p>
            <p>
              Dev:
              <a
                href="https://github.com/matheuxsx3/cv_matheus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://github.com/matheuxsx3/cv_matheus
              </a>
            </p>
            <p>
              Prod:
              <a
                href="https://matheuxsx3.github.io/cv_matheus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://matheuxsx3.github.io/cv_matheus/
              </a>
            </p>
          </div>
          <div>
            <p>
              <strong>BLOG PESSOAL</strong>
              <br />
              <a
                href="https://github.com/matheuxsx3/blogpessoal-BACKEND"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://github.com/matheuxsx3/blogpessoal-BACKEND
              </a>
            </p>
          </div>
          <div>
            <p>
              <strong>PADARIA</strong> - Sistema básico offline de “E-commerce”,
              criado com Java sem uso de frameworks, com intuito de treinar a
              lógica de programação utilizando os conceitos da API REST.
            </p>
            <a
              href="https://github.com/matheuxsx3/Padaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://github.com/matheuxsx3/Padaria
            </a>
          </div>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">
            CURSOS EXTRACURRICULARES & CERTIFICAÇÕES
          </h3>
          <p>
            ARQUITETURA DE MICROSSERVIÇOS: PADRÃO SAGA ORQUESTRADO - UDEMY -
            2024
            <br />
            AWS CUSTOMER-CENTRIC – TD SYNNEX – 2024
            <br />
            HACKATHON DEMO DAY – 42 RIO - 2023
            <br />
            AWS CLOUD PRACTITIONER ESSENTIALS – 4H - 2023
            <br />
            AWS CLOUD FOR FINANCE PROFESSIONALS (PORTUGUESE) - AWS – 17H – 2023
            <br />
            AWS CLOUD ECONOMIC FOR STARTUPS – AWS – 10H - 2023
            <br />
            JAVA - ROCKETSEAT - 2022
            <br />
            HTML | CSS | JAVASCRIPT - ROCKETSEAT - 2021
          </p>
        </div>
      </div>
    </div>
  );
}

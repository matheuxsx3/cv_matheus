const AboutMe = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-hidden p-4">
        <Header />
        <ProfessionalObjective />
        <ProfessionalSummary />
        <Experience />
        <Education />
        <Languages />
        <Portfolio />
        <Certifications />
      </div>
    </div>
  );
};

const Header = () => (
  <div className="mb-6">
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
);

const ProfessionalObjective = () => (
  <div className="mb-3">
    <h3 className="text-lg font-semibold mb-1">OBJETIVO PROFISSIONAL</h3>
    <p>Atuar na área de TI, especialmente no desenvolvimento de softwares.</p>
  </div>
);

const ProfessionalSummary = () => (
  <div className="mb-3">
    <h3 className="text-lg font-semibold mb-1">RESUMO PROFISSIONAL</h3>
    <p>
      Suporte comercial PJ (6 meses). Graduando em Gestão da Tecnologia da
      Informação. Bootcamp de programação (447 horas) na ONG Generation Brasil.
      Hackaton de programação (42 RIO). Tecnologias: Java 17, Spring (Boot,
      Security (jwt), JPA, MVC), Apache Kafka, SQL, NoSQL, Docker e
      docker-compose, React (Typescript), HTML, CSS (Tailwind), Git, GitHub,
      Scrum e Kanban. Portfólio: Marketplace, Blog Pessoal e um banco digital em
      desenvolvimento.
    </p>
  </div>
);

const Experience = () => (
  <div className="mb-3">
    <h3 className="text-lg font-semibold mb-1">EXPERIÊNCIAS PROFISSIONAIS</h3>
    <p>
      <strong>Youngest - Suporte Comercial (PJ) | 11/2023 – 05/2024</strong>
      <br />
      Desenvolvimento de software da empresa utilizando WordPress da Hostinger.
      Revenda B2B de produtos de informática através de licitações e compras
      diretas. Certificações em plataformas de distribuidores e fabricantes.
      Comunicação com clientes. Suporte técnico, esclarecendo dúvidas e
      garantindo a satisfação do cliente.
    </p>
  </div>
);

const Education = () => (
  <div className="mb-3">
    <h3 className="text-lg font-semibold mb-1">EDUCAÇÃO</h3>
    <p>
      <strong>Graduação - Gestão da Tecnologia da Informação</strong> | Data de
      conclusão prevista: 03/2025
      <br />
      Instituição: Universidade Santo Amaro
      <br />
      <strong>Bootcamp - Desenvolvedor Full Stack Junior.</strong> | Data de
      conclusão: 11/2023
      <br />
      Instituição: Generation Brasil
    </p>
  </div>
);

const Languages = () => (
  <div className="mb-3">
    <h3 className="text-lg font-semibold mb-1">IDIOMAS</h3>
    <p>
      Inglês - Básico | boa leitura, escrita e conversação.
      <br />
      Espanhol - Básico
    </p>
  </div>
);

const Portfolio = () => (
  <div className="mb-3">
    <h3 className="text-lg font-semibold mb-1">PORTFÓLIO</h3>
    {/* Adicione os detalhes do portfólio aqui, como links para projetos */}
  </div>
);

const Certifications = () => (
  <div className="mb-3">
    <h3 className="text-lg font-semibold mb-1">
      CURSOS EXTRACURRICULARES & CERTIFICAÇÕES
    </h3>
    <p>
      ARQUITETURA DE MICROSSERVIÇOS: PADRÃO SAGA ORQUESTRADO - UDEMY- 2024
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
      HTML | CSS | JAVASCRIPT - ROCKESEAT - 2021
    </p>
  </div>
);

export default AboutMe;

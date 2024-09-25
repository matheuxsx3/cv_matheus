import Nav from "./components/navigation/Nav";
import "./index.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Cena from "./components/teste/Cena";

function App() {
  return (
    <div className="relative">
      {/* Cena como fundo */}
      <div className="absolute inset-0 z-0">
        <Cena />
      </div>

      {/* Navegação e conteúdo sobreposto */}
      <div className="relative z-10">
        <Nav />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

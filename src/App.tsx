import Nav from "./components/navigation/Nav";
import "./index.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Cena from "./components/teste/Cena";

function App() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Cena />
      </div>
      <div className="relative z-10">
        <Nav />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

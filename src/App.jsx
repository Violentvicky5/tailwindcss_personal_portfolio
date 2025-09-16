import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import CertificationsSection from "./components/Certifications";

function App() {
  return (
    <div>
      <div id="home" />
      <Navbar />
      <Hero />
      <Skill />
      <About />
      <CertificationsSection />
      <Projects />
    </div>
  );
}

export default App;

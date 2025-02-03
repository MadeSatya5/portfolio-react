import Experience from "./section/experience/Experience.jsx";
import Footer from "./section/footer/Footer.jsx";
import Hero from "./section/hero/Hero.jsx";
import Hobby from "./section/hobby/Hobby.jsx";
import Navbar from "./section/nav/Navbar.jsx";
import Project from "./section/project/Project.jsx";
import { useRef, useState } from "react";

function App() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const [isSelected, setIsSelected] = useState("About Me");

  function scrollToRef(ref) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Menempatkan elemen di bagian atas
      inline: "start",
    });
  }

  return (
    <>
      <div className="min-h-screen bg-black scrollbar overflow-x-clip">
        <Navbar
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          scrollToHero={() => scrollToRef(heroRef)}
          scrollToExperience={() => scrollToRef(experienceRef)}
          scrollToProject={() => scrollToRef(projectRef)}
        />
        <Hero heroRef={heroRef} />
        <Hobby />
        <Experience experienceRef={experienceRef} />
        <Project projectRef={projectRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;

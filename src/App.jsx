import Experience from "./section/experience/Experience.jsx";
import Footer from "./section/footer/Footer.jsx";
import Hero from "./section/hero/Hero.jsx";
import Hobby from "./section/hobby/Hobby.jsx";
import Navbar from "./section/nav/Navbar.jsx";
import Project from "./section/project/Project.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const [isSelected, setIsSelected] = useState("About Me");

  function scrollToRef(ref) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const sections = [
      { id: "About Me", ref: heroRef },
      { id: "Experience", ref: experienceRef },
      { id: "Project", ref: projectRef },
    ];

    const observerOptions = {
      root: null,
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSelected(entry.target.dataset.section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id, ref }) => {
      if (ref.current) {
        ref.current.dataset.section = id;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

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

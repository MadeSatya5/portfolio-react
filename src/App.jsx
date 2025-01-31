import Experience from "./section/experience/Experience.jsx";
import Hero from "./section/hero/Hero.jsx";
import Hobby from "./section/hobby/Hobby.jsx";
import Navbar from "./section/nav/Navbar.jsx";
import Project from "./section/project/Project.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black scrollbar">
        <Navbar />
        <Hero />
        <Hobby />
        <Experience />
        <Project />
      </div>
    </>
  );
}

export default App;

import Experience from "./components/experience/Experience.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/nav/Navbar.jsx";
import Project from "./components/project/Project.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black ">
        <Navbar />
        <Hero />
        <Experience />
        <Project />
      </div>
    </>
  );
}

export default App;

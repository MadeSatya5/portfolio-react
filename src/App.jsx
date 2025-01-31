import Experience from "./components/experience/Experience.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/nav/Navbar.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black ">
        <Navbar />
        <Hero />
        <Experience />
      </div>
    </>
  );
}

export default App;

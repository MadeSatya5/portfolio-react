import { ChakraProvider } from "@chakra-ui/react";
import Experience from "./components/experience/Experience.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/nav/Navbar.jsx";

function App() {
  return (
    <>
      <ChakraProvider>
        <div className="min-h-screen bg-black ">
          <Navbar />
          <Hero />
          <Experience />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;

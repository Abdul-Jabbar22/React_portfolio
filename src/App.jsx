import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SideBar from "./components/SideBar";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Education from "./components/Education";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SideBar />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

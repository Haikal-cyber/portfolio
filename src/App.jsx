import { useEffect, useState } from "react";
import Lanyard from "./components/Lanyard.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import AboutEducation from "./components/AboutEducation.jsx";
import Experience from "./components/Experience.jsx";
import ProjectsBook from "./components/ProjectsBook.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="page">
      <div className="stage">
        {!isMobile && (
          <div className="stage__lanyard">
            <Lanyard
              frontImage="/card-front.svg"
              backImage="/card-back.svg"
              imageFit="cover"
              cardColor="#ffffff"
              finish="matte"
              cornerRadius={0.1}
              size={0.5}
              anchor="right"
              strapLength={0.55}
              strapColor="#ff6f1e"
              metal="silver"
              breeze={0.6}
              global
            />
          </div>
        )}
        <Nav />
        <Hero />
      </div>
      <main>
        <AboutEducation />
        <Experience />
        <ProjectsBook />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
import Lanyard from "./components/Lanyard.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Focus from "./components/Focus.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="stage">
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
        <Nav />
        <Hero />
      </div>
      <main>
        <About />
        <Focus />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
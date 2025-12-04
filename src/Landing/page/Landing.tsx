import React from "react";
import Header from "../../common/header/header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Landing: React.FC = () => {
  return (
    // Contenedor de toda la pantalla
    <div className="h-screen bg-white flex flex-col">
      {/* HEADER (ya no fijo aquí, lo maneja su propio componente) */}
      <Header />

      {/* CONTENEDOR DE PÁGINAS CON SCROLL-SNAP */}
      <main 
        className="flex-1 overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
        style={{
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Cada sección debe tener: snap-start min-h-full */}
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Landing;

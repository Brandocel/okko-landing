// src/Landing/components/HeroSection.tsx
import React from "react";
import heroImg from "../../assets/Home/Edificio.png";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative           /* 👈 necesario para la máscara absoluta */
        snap-start
        min-h-screen
        bg-[#f5f5f5]
        flex
        items-end
        px-6 md:px-24
        pb-16
      "
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",   // edificio ocupa toda la altura
        backgroundPosition: "right top",
      }}
    >
      {/* MÁSCARA BLANCA */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-white/55       /* opacidad ~55%, ajústala a tu gusto */
        "
      />

      {/* CONTENIDO (encima de la máscara) */}
      <div className="relative max-w-[760px] pb-10 md:pb-16">
        {/* TÍTULO */}
        <h1
          className="
            font-uchen
            text-[48px] md:text-[80px]
            leading-[110%]
            tracking-[-0.02em]
            text-black
          "
        >
          A NEW WAY OF
          <br />
          CREATING AND
          <br />
          ADDING VALUE
        </h1>

        {/* REDES SOCIALES */}
        <div
          className="
            mt-2
            font-inter
            text-[12px]
            leading-[110%]
            tracking-normal
            text-black
          "
        >
          <a href="https://www.instagram.com/okko_corp/" className="underline mr-6">
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61579715151118" className="underline">
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

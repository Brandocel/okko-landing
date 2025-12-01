// src/Landing/components/HeroSection.tsx
import React from "react";
import heroImg from "../../assets/Home/Edificio.png";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="
        snap-start
        min-h-[calc(100vh-72px)]
        bg-[#f5f5f5]
        bg-no-repeat
        bg-right-top
        bg-contain
        flex
        items-end
        px-6 md:px-16
        pb-12
      "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="max-w-3xl">
        <h1
          className="
            font-serif
            text-[40px] md:text-[64px]
            leading-tight
            tracking-[0.18em]
          "
        >
          A NEW WAY OF
          <br />
          CREATING AND
          <br />
          ADDING VALUE
        </h1>

        <div className="mt-8 text-[11px] md:text-xs">
          <a href="#" className="underline mr-4">
            Instagram
          </a>
          <a href="#" className="underline">
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

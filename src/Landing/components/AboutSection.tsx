// src/Landing/components/AboutSection.tsx
import React from "react";
import selvaImg from "../../assets/ABOUT US/SELVA.png";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="
        snap-start
        relative
        min-h-screen
        w-full
        flex
        items-end
        justify-end
        px-6 md:px-24
        pb-20 md:pb-28
        bg-[#101820]
      "
      style={{
        backgroundImage: `url(${selvaImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p
        className="
          max-w-[780px]
          text-right
          font-uchen
          text-white
          uppercase
          leading-[1.2]
          tracking-[-0.02em]
          text-[28px]
          md:text-[47px]
        "
      >
        OKKO HOLDING REPRESENTS A
        <br />
        MULTIDISCIPLINARY COMPANY
        <br />
        THAT MERGES DESIGN, AND
        <br />
        CRAFTSMANSHIP INTO A SINGLE
        <br />
        CREATIVE ECOSYSTEM.
      </p>
    </section>
  );
};

export default AboutSection;

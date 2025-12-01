import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="
        snap-start
        min-h-[calc(100vh-72px)]
        bg-[#101820]
        text-white
        flex
        items-center
        justify-center
        px-6 md:px-16
      "
    >
      <p className="max-w-3xl text-center text-sm md:text-base tracking-[0.22em] uppercase leading-relaxed">
        OKKO HOLDING REPRESENTS A MULTIDISCIPLINARY COMPANY THAT MERGES DESIGN,
        AND CRAFTSMANSHIP INTO A SINGLE CREATIVE ECOSYSTEM.
      </p>
    </section>
  );
};

export default AboutSection;

import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="
        snap-start
        min-h-[calc(100vh-72px)]
        bg-[#6b6a3d]
        text-white
        flex
        flex-col
        justify-center
        px-6 md:px-24
      "
    >
      <p className="max-w-3xl mx-auto mb-16 text-center text-sm leading-relaxed">
        Through its three divisions, OKKO builds structures that endure, designs
        interiors that inspire, and crafts furniture that embodies intention and
        precision.
      </p>

      <div className="max-w-3xl mx-auto text-2xl md:text-3xl font-serif">
        <div className="border-t border-white/40 py-4">CONSTRUCTION</div>
        <div className="border-t border-white/40 py-4 flex items-center justify-between text-[#ffe600]">
          <span>INTERIORISM</span>
          <span className="text-3xl">→</span>
        </div>
        <div className="border-t border-white/40 py-4 border-b border-white/40">
          FURNITURE
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

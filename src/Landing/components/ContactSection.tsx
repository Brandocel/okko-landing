import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        snap-start
        min-h-[calc(100vh-72px)]
        bg-[#605f41]
        text-white
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="text-center">
        <h2 className="font-serif text-2xl md:text-3xl mb-3">CONTACT</h2>
        <p className="text-sm md:text-base">info@okkoholding.com</p>
      </div>
    </section>
  );
};

export default ContactSection;

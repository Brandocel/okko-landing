// src/Landing/components/ContactSection.tsx
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        snap-start
        min-h-screen          /* ocupa toda la altura visible */
        bg-[#D5CFC4]          /* máscara / fondo completo */
        flex
        items-center
        px-6 md:px-24
      "
    >
      <div
        className="
          mx-auto
          w-full max-w-6xl
          grid
          gap-16
          md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
        "
      >
        {/* COLUMNA IZQUIERDA: TÍTULO + FORMULARIO */}
        <div className="flex flex-col">
          {/* CONTACT US */}
          <h2
            className="
              font-uchen
              text-[32px] md:text-[40px]
              leading-[110%]
              tracking-[-0.02em]
              text-[#2D2C29]
              mb-12
            "
          >
            CONTACT&nbsp;US
          </h2>

          {/* FORM */}
          <form className="space-y-10">
            {/* NAME */}
            <div>
              <label
                className="
                  font-inter
                  text-[12px]
                  leading-[140%]
                  tracking-[0]
                  text-black
                  block
                  mb-2
                "
              >
                NAME
              </label>
              <input
                type="text"
                className="
                  w-full
                  border-b border-black
                  bg-transparent
                  outline-none
                  py-2
                  text-sm
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                className="
                  font-inter
                  text-[12px]
                  leading-[140%]
                  tracking-[0]
                  text-black
                  block
                  mb-2
                "
              >
                YOUR EMAIL
              </label>
              <input
                type="email"
                className="
                  w-full
                  border-b border-black
                  bg-transparent
                  outline-none
                  py-2
                  text-sm
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                className="
                  font-inter
                  text-[12px]
                  leading-[140%]
                  tracking-[0]
                  text-black
                  block
                  mb-2
                "
              >
                YOUR MESSAGE...
              </label>
              <textarea
                rows={3}
                className="
                  w-full
                  border-b border-black
                  bg-transparent
                  outline-none
                  py-2
                  text-sm
                  resize-none
                "
              />
            </div>

            {/* BOTÓN SEND alineado a la derecha */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="
                  px-10
                  py-3
                  bg-[#CCD51D]
                  text-black
                  font-inter
                  text-[14px]
                  uppercase
                  tracking-[0]
                "
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        {/* COLUMNA DERECHA: TEXTO BEST-IN-CLASS */}
        <div className="flex items-center justify-end">
          <p
            className="
              font-uchen
              text-[32px] md:text-[44px]
              leading-[120%]
              tracking-[-0.02em]
              text-[#2D2C29]
              text-right
              max-w-md
              mr-[4vw]
            "
          >
            BEST-IN-CLASS
            <br />
            ENTREPRENEURIAL
            <br />
            COMPANY
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

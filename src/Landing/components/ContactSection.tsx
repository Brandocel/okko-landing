// src/Landing/components/ContactSection.tsx
import React from "react";
import Footer from "../../common/footer/footer";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        snap-start
        min-h-screen
        bg-[#D5CFC4]
        flex
        flex-col
      "
    >
      <div
        className="flex-1 flex items-center px-6 md:px-16"
        style={{
          paddingTop: "clamp(32px, 5vw, 64px)",
          paddingBottom: "clamp(32px, 5vw, 64px)",
        }}
      >
      <div
        className="
          w-full
          grid
          md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
        "
        style={{ gap: "clamp(20px, 4vw, 60px)" }}
      >
        {/* COLUMNA IZQUIERDA: TÍTULO + FORMULARIO */}
        <div className="flex flex-col">
          {/* CONTACT US */}
          <h2
            className="
              font-uchen
              leading-[110%]
              tracking-[-0.02em]
              text-[#2D2C29]
              mb-[clamp(20px,3.5vw,44px)]
            "
            style={{
              fontSize: "clamp(28px, 2.5vw, 40px)",
            }}
          >
            CONTACT&nbsp;US
          </h2>

          {/* FORM */}
          <form className="space-y-6 md:space-y-9">
            {/* NAME */}
            <div>
              <label
                className="
                  font-inter
                  text-[clamp(11px,1vw,12px)]
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
                  text-[clamp(11px,1vw,12px)]
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
                  text-[clamp(11px,1vw,12px)]
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
              leading-[120%]
              tracking-[-0.02em]
              text-[#2D2C29]
              text-right
              max-w-md
            "
            style={{ fontSize: "clamp(26px, 2.6vw, 44px)" }}
          >
            BEST-IN-CLASS
            <br />
            ENTREPRENEURIAL
            <br />
            COMPANY
          </p>
        </div>
      </div>

      {/* FOOTER */}
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;

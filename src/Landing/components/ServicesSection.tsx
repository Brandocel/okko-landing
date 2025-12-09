import React, { useRef, useState } from "react";
import flechaI from "../../assets/services/flecha-izquierda.svg";
import flechaD from "../../assets/services/flecha-izquierdaB.svg";

// 🔹 BACKGROUNDS
import bckCircular from "../../assets/services/bckcircular.png";
import bckGarage from "../../assets/services/bckgarage.png";
import bckNeroli from "../../assets/services/bckneroli.png";

// 🔹 LOGOS (ajusta las rutas reales)
import logoCircular from "../../assets/services/circular-logo.svg";
import logoGarage from "../../assets/services/garage-logo.svg";
import logoNeroli from "../../assets/services/neroli-logo.svg";

type ServiceIndex = 0 | 1 | 2;

type DetailFooterProps = {
  logoSrc: string;
  logoAlt: string;
  href: string;
};

const DetailFooter: React.FC<DetailFooterProps> = ({ logoSrc, logoAlt, href }) => (
  <div 
    className="w-screen border-t border-white/40 mt-8 flex items-center justify-between -mx-6 md:-mx-16 px-6 md:px-16"
    style={{ height: "clamp(95px, 10.56vh, 152px)" }}
  >
    {/* Logo específico de la división */}
    <div className="flex items-center gap-3">
      <img
        src={logoSrc}
        alt={logoAlt}
        className="h-8 md:h-10 w-auto object-contain"
      />
    </div>

    {/* Botón MORE INFO (195x53 @1440x900 con clamp) */}
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        uppercase
        transition-transform duration-200
        hover:scale-[1.03]
      "
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(18px, 1.25vw, 24px)",
        lineHeight: "1.4",
        letterSpacing: "0",
        backgroundColor: "#CCD51D",
        color: "#000000",
        // 195x53 @ 1440x900 -> usamos clamp para mantener proporciones
        width: "clamp(140px, 13.54vw, 260px)",
        height: "clamp(40px, 5.9vh, 70px)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      MORE INFO
    </a>
  </div>
);

const ServicesSection: React.FC = () => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  const [lastScrollY, setLastScrollY] = useState<number | null>(null);

  const navigateToService = (index: ServiceIndex) => {
    setLastScrollY(window.scrollY);

    if (horizontalScrollRef.current) {
      const container = horizontalScrollRef.current;
      const targetScroll = (index + 1) * container.offsetWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const goBack = () => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }

    if (lastScrollY !== null) {
      window.scrollTo({
        top: lastScrollY,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById("services");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="services"
      className="snap-start h-screen w-screen bg-[#6b6a3d] text-white overflow-hidden"
    >
      {/* Contenedor horizontal: vista principal + 3 detalles */}
      <div
        ref={horizontalScrollRef}
        className="h-full flex overflow-x-hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* VISTA PRINCIPAL */}
        <div
          className="min-w-full h-full flex flex-col justify-between"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Texto central */}
          <div className="flex-1 flex items-center justify-center px-6 md:px-16">
            <p
              className="text-center"
              style={{
                maxWidth: "clamp(495px, 68.75vw, 990px)",
                fontSize: "clamp(14px, 1.94vw, 28px)",
                lineHeight: "1.4",
                fontFamily: "Uchen, serif",
                fontWeight: 400,
              }}
            >
              Through its three divisions, OKKO builds structures that endure,
              designs interiors that inspire, and crafts furniture that embodies
              intention and precision.
            </p>
          </div>

          {/* NAV PRINCIPAL (anclado abajo, full width) */}
          <nav className="w-screen text-2xl md:text-3xl font-serif">
            <ul>
              <li
                onClick={() => navigateToService(0)}
                className="border-t border-white/40 py-4 w-full flex items-center justify-between group cursor-pointer px-6 md:px-16"
              >
                <span
                  className="text-[55px] leading-[130%] tracking-[-0.02em] font-normal transition-colors duration-200 group-hover:text-[#ffe600]"
                  style={{ fontFamily: "Uchen, serif" }}
                >
                  CONSTRUCTION
                </span>
                <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <img src={flechaI} alt="Arrow" />
                </span>
              </li>

              <li
                onClick={() => navigateToService(1)}
                className="border-t border-white/40 py-4 w-full flex items-center justify-between group cursor-pointer px-6 md:px-16"
              >
                <span
                  className="text-[55px] leading-[130%] tracking-[-0.02em] font-normal transition-colors duration-200 group-hover:text-[#ffe600]"
                  style={{ fontFamily: "Uchen, serif" }}
                >
                  INTERIORISM
                </span>
                <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <img src={flechaI} alt="Arrow" />
                </span>
              </li>

              <li
                onClick={() => navigateToService(2)}
                className="border-t border-white/40 py-4 w-full flex items-center justify-between group cursor-pointer px-6 md:px-16"
              >
                <span
                  className="text-[55px] leading-[130%] tracking-[-0.02em] font-normal transition-colors duration-200 group-hover:text-[#ffe600]"
                  style={{ fontFamily: "Uchen, serif" }}
                >
                  FURNITURE
                </span>
                <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <img src={flechaI} alt="Arrow" />
                </span>
              </li>
            </ul>
          </nav>
        </div>

        {/* DETALLES */}

        {/* CONSTRUCTION */}
        <div
          className="
            min-w-full h-full
            flex flex-col items-end justify-end
            px-6 md:px-16
            relative
          "
          style={{
            scrollSnapAlign: "start",
            backgroundImage: `url(${bckCircular})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={goBack}
            className="absolute right-6 md:right-16 text-white hover:text-[#ffe600] transition-colors duration-200 flex items-center gap-2"
            style={{
              fontFamily: "Uchen, serif",
              fontSize: "clamp(7.5px, 1.04vw, 15px)",
              top: "clamp(104px, 8.33vw, 120px)",
            }}
          >
            <span><img src={flechaD} alt="Arrow" /></span>
            <span className="underline">BACK</span>
          </button>

          {/* Contenedor de texto alineado a la derecha */}
          <div
            className="text-right"
            style={{
              width: "clamp(567.5px, 78.82vw, 1135px)",
              maxWidth: "100%",
            }}
          >
            <p
              style={{
                fontFamily: "Uchen, serif",
                fontSize: "clamp(27.5px, 3.82vw, 55px)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              WITH A COMMITMENT TO PRECISION, INNOVATION, AND STRUCTURE, IT
              TRANSFORMS VISION INTO ENDURING REALITY — CONSTRUCTING NOT ONLY
              SPACES, BUT LEGACY.
            </p>
          </div>

          {/* Footer full-width debajo del texto */}
          <DetailFooter
            logoSrc={logoCircular}
            logoAlt="Circular Studio logo"
            href="https://circular.uno/"
          />
        </div>

        {/* INTERIORISM */}
        <div
          className="
            min-w-full h-full
            flex flex-col items-end justify-end
            px-6 md:px-16
            relative
          "
          style={{
            scrollSnapAlign: "start",
            backgroundImage: `url(${bckGarage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={goBack}
            className="absolute right-6 md:right-16 text-white hover:text-[#ffe600] transition-colors duration-200 flex items-center gap-2"
            style={{
              fontFamily: "Uchen, serif",
              fontSize: "15px",
              top: "clamp(104px, 8.33vw, 120px)",
            }}
          >
            <span>←</span>
            <span>BACK</span>
          </button>

          <div
            className="text-right"
            style={{
              width: "clamp(567.5px, 78.82vw, 1135px)",
              maxWidth: "100%",
            }}
          >
            <p
              style={{
                fontFamily: "Uchen, serif",
                fontSize: "clamp(27.5px, 3.82vw, 55px)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              FROM CORPORATE SPACES TO HOSPITALITY AND RETAIL CONCEPTS, WE BLEND
              INDUSTRIAL AESTHETICS WITH FUNCTIONALITY, CREATING ATMOSPHERES
              WHERE DESIGN AND EXPERIENCE COEXIST SEAMLESSLY.
            </p>
          </div>

          <DetailFooter
            logoSrc={logoGarage}
            logoAlt="Garage logo"
            href="https://somosgarage.com/"
          />
        </div>

        {/* FURNITURE */}
        <div
          className="
            min-w-full h-full
            flex flex-col items-end justify-end
            px-6 md:px-16
            relative
          "
          style={{
            scrollSnapAlign: "start",
            backgroundImage: `url(${bckNeroli})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={goBack}
            className="absolute right-6 md:right-16 text-white hover:text-[#ffe600] transition-colors duration-200 flex items-center gap-2"
            style={{
              fontFamily: "Uchen, serif",
              fontSize: "15px",
              top: "clamp(104px, 8.33vw, 120px)",
            }}
          >
            <span>←</span>
            <span>BACK</span>
          </button>

          <div
            className="text-right"
            style={{
              width: "clamp(567.5px, 78.82vw, 1135px)",
              maxWidth: "100%",
            }}
          >
            <p
              style={{
                fontFamily: "Uchen, serif",
                fontSize: "clamp(27.5px, 3.82vw, 55px)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              EACH OBJECT IS BUILT TO EVOKE EMOTION AND ELEVATE SPACES THROUGH
              REFINED SIMPLICITY AND ARTISANAL PRECISION. LUXURY, FOR US, IS NOT
              EXCESS — IT'S ESSENCE.
            </p>
          </div>

          <DetailFooter
            logoSrc={logoNeroli}
            logoAlt="Neroli logo"
            href="https://nerolihome.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

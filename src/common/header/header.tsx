// src/common/header/header.tsx
import React, { useEffect, useState } from "react";
import OkkoLogo from "../../assets/OKKO.svg";

type NavItem = {
  label: string;
  href: string;      // #home, #about, etc.
};

const navItems: NavItem[] = [
  { label: "HOME",        href: "#home" },
  { label: "ABOUT US",    href: "#about" },
  { label: "SERVICES",    href: "#services" },
  { label: "OUR PROJECTS", href: "#projects" },
  { label: "CONTACT",     href: "#contact" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll suave al hacer clic en el menú
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detectar qué sección está en pantalla para resaltar el nav
  useEffect(() => {
    const sectionIds = ["home", "about", "services", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // cuando ~50% de la sección es visible
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-30
        bg-transparent
        border-b border-black/10
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          px-8
          py-6
        "
      >
        {/* LOGO */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center">
          <img src={OkkoLogo} alt="OKKO" className="h-10 w-auto" />
        </a>

        {/* NAV */}
        <nav className="flex items-center gap-10 text-xs tracking-[0.18em] text-neutral-900 uppercase">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  pb-1 cursor-pointer
                  hover:text-black
                  transition-colors
                  ${
                    isActive
                      ? "border-b border-black"
                      : "border-b border-transparent"
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;

// src/common/header/header.tsx
import React, { useEffect, useState } from "react";
import OkkoLogo from "../../assets/OKKO.svg";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "OUR PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Secciones donde el header va en blanco (sobre fondo oscuro)
  const lightOnDarkSections = ["about", "services", "projects"];
  const useLightTheme = lightOnDarkSections.includes(activeSection);

  useEffect(() => {
    const ids = ["home", "about", "services", "projects", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-30
        bg-transparent
        border-b
        ${useLightTheme ? "border-white/40" : "border-black/10"}
        transition-colors duration-300
      `}
    >
      <div className="flex w-full items-center justify-between px-6 md:px-16 py-6">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center"
        >
          <img
            src={OkkoLogo}
            alt="OKKO"
            className={`
              h-10 w-auto
              transition
              ${useLightTheme ? "invert" : ""}
            `}
          />
        </a>

        {/* NAV */}
        <nav
          className={`
            flex items-center gap-10
            font-inter text-[18px] leading-[140%] tracking-normal
            uppercase
            ${useLightTheme ? "text-white" : "text-black"}
          `}
        >
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            const activeColor = useLightTheme ? "text-white" : "text-black";
            const inactiveColor = useLightTheme
              ? "text-white/70"
              : "text-neutral-700";
            const activeBorder = useLightTheme
              ? "border-white"
              : "border-black";

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  pb-1 cursor-pointer transition-colors
                  ${
                    isActive
                      ? `${activeColor} border-b ${activeBorder}`
                      : `${inactiveColor} border-b border-transparent`
                  }
                  hover:${activeColor}
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

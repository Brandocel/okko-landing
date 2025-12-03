import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#F3F1EE] flex items-center justify-between px-6 md:px-24"
      style={{
        height: "clamp(39px, 3.61vh, 56px)",
      }}
    >
      {/* Left: Copyright */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(12px, 0.83vw, 16px)",
          lineHeight: "1.1",
          letterSpacing: "0",
          color: "#000000",
        }}
      >
        OKKO © All Rights Reserved
      </p>

      {/* Center: Social Links */}
      <div
        className="flex gap-6"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(12px, 0.83vw, 16px)",
          lineHeight: "1.1",
          letterSpacing: "0",
        }}
      >
        <a
          href="https://www.instagram.com/okko_corp/"
          target="_blank"
          rel="noreferrer"
          className="text-black underline hover:opacity-70 transition-opacity"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61579715151118"
          target="_blank"
          rel="noreferrer"
          className="text-black underline hover:opacity-70 transition-opacity"
        >
          Facebook
        </a>
      </div>

      {/* Right: Policy Links */}
      <div
        className="flex gap-6"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(12px, 0.83vw, 16px)",
          lineHeight: "1.1",
          letterSpacing: "0",
        }}
      >
        <a
          href="#"
          className="text-black underline hover:opacity-70 transition-opacity"
        >
          Policy Privacy
        </a>
        <a
          href="#"
          className="text-black underline hover:opacity-70 transition-opacity"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import img1 from "../../assets/proyect/Mask group (1).png";
import img2 from "../../assets/proyect/Mask group (2).png";
import img3 from "../../assets/proyect/Mask group (3).png";

type ProjectItemProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
}) => {
  return (
    <div
      className="
        snap-start
        h-screen
        w-screen
        bg-[#252a23]
        text-white
        flex
        items-center
        justify-center
        px-6 md:px-16
      "
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        className={`grid gap-6 md:gap-8 md:grid-cols-2 items-center w-full ${
          imagePosition === "left" ? "md:grid-flow-dense" : ""
        }`}
        
      >
        {/* TEXTO */}
        <div className={imagePosition === "left" ? "md:col-start-2" : ""}>
          <div
            style={{
              maxWidth: "clamp(595px, 41.32vw, 950px)",
              margin: "0 auto",
            }}
          >
            <h2
              className="uppercase text-center"
              style={{
                fontFamily: "Uchen, serif",
                fontWeight: 400,
                fontSize: "clamp(55px, 3.82vw, 80px)",
                lineHeight: "1.3",
                letterSpacing: "-0.02em",
                marginBottom: "clamp(12px, 1.11vw, 16px)",
                borderBottom: "1px solid #ffffff",
                paddingBottom: "clamp(8px, 0.7vw, 12px)",
              }}
            >
              {title}
            </h2>
            <p
              className="text-center"
              style={{
                fontFamily: "Uchen, serif",
                fontWeight: 400,
                fontSize: "clamp(26px, 1.8vw, 36px)",
                lineHeight: "1.4",
                letterSpacing: "0",
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* IMAGEN */}
        <div
          className={
            imagePosition === "left" ? "md:col-start-1 md:row-start-1" : ""
          }
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: "clamp(595px, 49.5vw, 950px)",
              height: "clamp(417px, 54.5vh, 666px)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "CONSTRUCTION",
      description:
        "Through design and planning we build structures that transform the initial concept with a vision of functionality, durability, and modern aesthetics.",
      imageSrc: img1,
      imageAlt: "Construction",
      imagePosition: "right" as const,
    },
    {
      title: "INTERIORISM",
      description:
        "Translating the concept into a functional space involving intuitive design choices that bring the project’s essence to life.",
      imageSrc: img2,
      imageAlt: "Interiorism",
      imagePosition: "left" as const,
    },
    {
      title: "FURNITURE",
      description:
        "Inspired by a timeless vision we create functionality reflecting experiences and values with aesthetics that shape meaningful environments.",
      imageSrc: img3,
      imageAlt: "Furniture",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section id="projects" className="contents">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          imagePosition={project.imagePosition}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;

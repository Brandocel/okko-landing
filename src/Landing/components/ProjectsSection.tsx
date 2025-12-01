import React from "react";
import constructionImg from "../../assets/Home/Edificio.png"; // pon tu imagen

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="
        snap-start
        min-h-[calc(100vh-72px)]
        bg-[#252a23]
        text-white
        flex
        items-center
        justify-center
        px-6 md:px-16
      "
    >
      <div className="grid max-w-5xl gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl mb-4">CONSTRUCTION</h2>
          <p className="text-sm leading-relaxed">
            Through design and planning we build structures that transform the
            initial concept with a vision of functionality, durability, and
            modern aesthetics.
          </p>
        </div>

        <div>
          <img
            src={constructionImg}
            alt="Construction"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

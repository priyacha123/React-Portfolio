import React from "react";
import ExpandableCardDemo from "../ui/expandable-card-demo-standard";
import ExpandableCardDemoGrid from "../ui/expandable-card-demo-grid";

const Projects = () => {
  return (
    <section id="projects" className=" w-full px-6 py-20 md:px-16 bg-[#f8fafc]">

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          My Projects
        </h2>

        <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-8xl mx-auto">
        <div className="hidden md:block">
          <ExpandableCardDemoGrid />
        </div>

        <div className="block md:hidden">
          <ExpandableCardDemo />
        </div>
      </div>

    </section>
  );
};

export default Projects;

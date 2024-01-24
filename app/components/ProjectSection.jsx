"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chip-8 Emulator",
    description: "A simple chip-8 emulator implementation using c++ and sdl.",
    image: "/images/projects/1.png",
    tag: ["All", "C++"],
    gitUrl: "https://github.com/sdey02/Chip_8_Emulator",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ray_Tracing_Software",
    description: "A C++ implementation of a ray tracer.",
    image: "/images/projects/2.png",
    tag: ["All", "C++"],
    gitUrl: "https://github.com/sdey02/Ray_Tracing_Software",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Trading_Bot",
    description: "A trading bot built using Oanda and Python.",
    image: "/images/projects/3.png",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "TMMC_Vision_Challenge_Software",
    description: "Our code for the Toyota Vision challenge, where we trained a vision model to identify stickers and holes.",
    image: "/images/projects/4.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/sdey02/TMMC_Challenge_Software",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="C++"
          isSelected={tag === "C++"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
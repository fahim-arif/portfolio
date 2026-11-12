import React, { useRef } from "react";
import gsap from "gsap";
import Thumbnail from "./component/Thumbnail";
import { projects } from "./projectsData";
import CustomTilt from "@/common/elements/CustomTilt";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";

const ProjectSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useRevealOnScroll(sectionRef, () => {
    gsap.killTweensOf(".project-animate-heading, .project-animate-item");
    const tl = gsap.timeline();
    tl.fromTo(
      ".project-animate-heading",
      { scale: 0.6, opacity: 0 },
      { duration: 1, scale: 1, opacity: 1, ease: "power2.out" }
    );
    tl.fromTo(
      ".project-animate-item",
      { scale: 0.6, opacity: 0 },
      { duration: 1.5, scale: 1, opacity: 1, ease: "power2.out", stagger: 0.2 },
      "-=0.5"
    );
  });

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full h-full xl:mt-20 relative overflow-hidden pb-12 pt-12 scroll-mt-4"
      ref={sectionRef}
    >
      <h2
        id="projects-heading"
        className="px-4 text-center text-heading3-bold lg:text-heading2-bold mb-12 project-animate-heading"
      >
        Projects
      </h2>

      <div className="max-w-5xl mx-auto sm:px-8 px-4 md:px-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li key={project.slug}>
              <CustomTilt
                perspective={500}
                scale={1.03}
                className="hover:z-10 relative h-full"
              >
                <div className="project-animate-item shadow-xl rounded-xl h-full">
                  <Thumbnail project={project} />
                </div>
              </CustomTilt>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;

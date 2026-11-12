import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { Projects } from "@/common/types";
import CustomTilt from "@/common/elements/CustomTilt";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";

// "Other projects" strip shown at the bottom of a project page.
const RandomSuggestion = ({ projects }: { projects: Projects }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const key = projects.map((p) => p.slug).join(",");

  useRevealOnScroll(
    sectionRef,
    () => {
      gsap.fromTo(
        ".animate-random-suggestion",
        { scale: 0.6, opacity: 0 },
        { duration: 1, scale: 1, opacity: 1, stagger: 0.25, ease: "power2.out" }
      );
    },
    0.05,
    [key]
  );

  if (projects.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="other-projects-heading"
      className="my-16 max-w-7xl mx-auto px-6"
    >
      <h2
        id="other-projects-heading"
        className="text-heading3-bold mb-8 text-center"
      >
        Other projects
      </h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {projects.map((project) => (
          <li key={project.slug} className="w-full sm:w-80">
            <CustomTilt
              perspective={500}
              scale={1.05}
              className="hover:z-10 relative shadow-2xl animate-random-suggestion h-full"
            >
              <Link
                className="p-8 h-full lg:min-h-[15rem] bg-gray-50 cursor-pointer grow-on-hover flex flex-col justify-between gap-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary"
                href={`/project/${project.slug}`}
              >
                <div>
                  {project.company && (
                    <p className="text-sm font-semibold tracking-widest uppercase text-gray-600">
                      {project.company}
                    </p>
                  )}
                  <h3 className="text-heading3-bold tracking-wider break-words">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600">{project.subtitle}</p>
                <span className="text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1 self-start">
                  Read the case study
                </span>
              </Link>
            </CustomTilt>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RandomSuggestion;

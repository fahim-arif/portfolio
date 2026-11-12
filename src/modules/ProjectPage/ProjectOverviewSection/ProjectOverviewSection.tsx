import React, { useRef } from "react";
import gsap from "gsap";
import { CONTACT } from "@/common/constants/contact";
import { Project } from "@/common/types";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";

const ProjectOverviewSection = ({ project }: { project: Project }) => {
  const overviewRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useRevealOnScroll(
    overviewRef,
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".zoom-in-item-project-overview",
        { scale: 0.7, opacity: 0 },
        { duration: 0.75, scale: 1, opacity: 1, stagger: 0.3, ease: "power2.inOut" }
      );
      tl.fromTo(
        ".slide-in-item-project-overview",
        { x: "50%", opacity: 0 },
        { duration: 1, x: "0%", opacity: 1, stagger: 0.2, ease: "power2.inOut" }
      );
    },
    0.1,
    [project.slug]
  );

  useRevealOnScroll(
    highlightsRef,
    () => {
      gsap.fromTo(
        ".slide-in-item-takeaway",
        { x: "-50%", opacity: 0 },
        { duration: 1, x: "0%", opacity: 1, stagger: 0.25, ease: "power2.inOut" }
      );
    },
    0.1,
    [project.slug]
  );

  useRevealOnScroll(
    ctaRef,
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".slide-in-work-together",
        { x: "-50%", opacity: 0 },
        { duration: 1, x: "0%", opacity: 1, ease: "power2.inOut" }
      );
      tl.fromTo(
        ".zoom-in-work-together",
        { scale: 0.7, opacity: 0 },
        { duration: 0.75, scale: 1, opacity: 1, stagger: 0.3, ease: "power2.inOut" }
      );
    },
    0.1,
    [project.slug]
  );

  const hasOverview = project.overview.length > 0;
  const hasHighlights = project.highlights.length > 0;

  const cs = project.caseStudy;
  const caseStudyBlocks = cs
    ? [
        { id: "problem", heading: "The problem", items: cs.problem, list: false },
        { id: "investigation", heading: "How I found it", items: cs.investigation, list: false },
        { id: "changes", heading: "What I changed", items: cs.changes, list: true },
        { id: "outcome", heading: "Result", items: cs.outcome, list: false },
      ].filter((block) => block.items.length > 0)
    : [];

  return (
    <div className="bg-background relative z-0 overflow-x-clip">
      <section
        ref={overviewRef}
        aria-labelledby={
          caseStudyBlocks.length > 0
            ? `${caseStudyBlocks[0].id}-heading`
            : "overview-heading"
        }
        className="flex flex-col lg:flex-row max-w-6xl mx-auto py-8"
      >
        <div className="max-w-2xl p-8 lg:p-12 flex-1">
          {caseStudyBlocks.length > 0 ? (
            caseStudyBlocks.map((block) => (
              <div key={block.id} className="mb-10 last:mb-0">
                <h2
                  id={`${block.id}-heading`}
                  className="text-heading3-bold font-bold text-white zoom-in-item-project-overview"
                >
                  {block.heading}
                </h2>
                {block.items.length > 1 || block.list ? (
                  <ul className="mt-4 space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="text-lg text-gray-300 border-l-4 border-primary pl-4 zoom-in-item-project-overview"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="pt-4 text-lg md:text-xl text-gray-300 font-medium zoom-in-item-project-overview">
                    {block.items[0]}
                  </p>
                )}
              </div>
            ))
          ) : (
            <>
              <h2
                id="overview-heading"
                className="text-heading3-bold font-bold text-white zoom-in-item-project-overview"
              >
                Overview
              </h2>
              {(hasOverview ? project.overview : [project.subtitle]).map((paragraph) => (
                <p
                  key={paragraph}
                  className="pt-4 text-lg md:text-xl text-gray-300 font-medium zoom-in-item-project-overview"
                >
                  {paragraph}
                </p>
              ))}
            </>
          )}
        </div>
        {(project.role || project.period || project.technologies.length > 0) && (
          <dl className="py-8 px-8 lg:px-0 lg:w-72">
            {project.role && (
              <div className="mb-6 slide-in-item-project-overview">
                <dt className="text-gray-400 text-body-semibold tracking-widest uppercase">Role</dt>
                <dd className="text-white border-b-2 border-gray-700 pb-2 mt-2">{project.role}</dd>
              </div>
            )}
            {project.period && (
              <div className="mb-6 slide-in-item-project-overview">
                <dt className="text-gray-400 text-body-semibold tracking-widest uppercase">Period</dt>
                <dd className="text-white border-b-2 border-gray-700 pb-2 mt-2">{project.period}</dd>
              </div>
            )}
            {project.technologies.length > 0 && (
              <div className="slide-in-item-project-overview">
                <dt className="text-gray-400 text-body-semibold tracking-widest uppercase">Stack</dt>
                {project.technologies.map((tech) => (
                  <dd key={tech} className="text-white border-b-2 border-gray-700 py-2">
                    {tech}
                  </dd>
                ))}
              </div>
            )}
          </dl>
        )}
      </section>

      {hasHighlights && (
        <section
          ref={highlightsRef}
          aria-labelledby="highlights-heading"
          className="max-w-6xl mx-auto px-8 lg:px-12 py-12"
        >
          <h2
            id="highlights-heading"
            className="text-heading3-bold text-white slide-in-item-takeaway"
          >
            What I built
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="text-white border-l-4 border-primary pl-4 py-2 slide-in-item-takeaway"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section
        ref={ctaRef}
        aria-label="Contact"
        className="flex justify-center py-12 px-6 relative z-20 my-12"
      >
        <div className="bg-gradient-primary-secondary p-10 md:p-20 flex justify-center flex-col slide-in-work-together">
          <h2 className="text-heading3-bold text-white font-bold tracking-wider zoom-in-work-together">
            Hiring for a backend or full-stack role?
          </h2>
          <a
            href={CONTACT.mailto}
            className="text-center text-white mt-12 tracking-wider border-2 border-gray-300 p-1 py-2 font-semibold zoom-in-work-together focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            Email me
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectOverviewSection;

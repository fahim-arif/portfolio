import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Project } from "@/common/types";
import { prefersReducedMotion } from "@/common/hooks/useRevealOnScroll";
import { TitleTile } from "@/modules/LandingPage/components/ProjectSection/component/Thumbnail/Thumbnail";

const HeroSection = ({ project }: { project: Project }) => {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const tl = gsap.timeline();
    tl.fromTo(
      ".zoom-in-item-project-hero",
      { scale: 0.6, opacity: 0 },
      { duration: 1, scale: 1, opacity: 1, stagger: 0.5, ease: "power2.out" }
    );
    tl.fromTo(
      ".fade-in-image",
      { x: "100%", opacity: 0 },
      { duration: 2, x: "0%", opacity: 1, ease: "power2.inOut" },
      "-=1.25"
    );
    return () => {
      tl.kill();
    };
  }, [project.slug]);

  return (
    <section className="h-auto relative max-w-7xl mx-auto px-8 md:px-10 my-20 overflow-x-clip">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-md">
          {project.company && (
            <p className="text-primary font-semibold tracking-widest uppercase mb-2 zoom-in-item-project-hero">
              {project.company}
            </p>
          )}
          <h1 className="text-heading3-bold md:text-heading2-bold font-bold zoom-in-item-project-hero break-words">
            {project.title}
          </h1>
          <p className="text-xl mt-8 text-gray-600 md:font-semibold zoom-in-item-project-hero">
            {project.subtitle}
          </p>
          {(project.role || project.period) && (
            <p className="mt-4 text-gray-600 zoom-in-item-project-hero">
              {[project.role, project.period].filter(Boolean).join(" · ")}
            </p>
          )}
          <div className="flex flex-wrap gap-4 my-8">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-background text-white h-12 md:h-14 text-base-bold tracking-wider font-semibold grow-on-hover px-8 zoom-in-item-project-hero focus:outline-none focus-visible:ring-4 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {project.image ? (
          <div className="w-full md:w-1/2">
            <Image
              className="fade-in-image w-full h-auto rounded-lg shadow-2xl"
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={project.image.alt}
              priority
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="fade-in-image w-full md:w-1/2 aspect-[13/10] bg-background rounded-lg shadow-2xl flex items-center justify-center p-8"
          >
            <TitleTile project={project} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

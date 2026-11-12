import React, { useRef } from "react";
import gsap from "gsap";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";
import { EDUCATION, EXPERIENCE } from "@/content/profile";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useRevealOnScroll(
    sectionRef,
    () => {
      gsap.killTweensOf(".experience-animate-item");
      gsap.fromTo(
        ".experience-animate-item",
        { x: "-10%", opacity: 0 },
        { duration: 0.8, x: "0%", opacity: 1, ease: "power2.out", stagger: 0.15 }
      );
    },
    0.05
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="my-16 max-w-4xl mx-auto px-6 scroll-mt-4"
    >
      <h2
        id="experience-heading"
        className="text-center text-heading3-bold lg:text-heading2-bold mb-12"
      >
        Experience
      </h2>

      <ol className="relative border-l-2 border-primary ml-3">
        {EXPERIENCE.map((job) => (
          <li
            key={`${job.company}-${job.start}`}
            className="mb-10 ml-8 experience-animate-item"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-primary ring-4 ring-white"
            />
            <div className="p-6 bg-gray-50 shadow-xl rounded-lg">
              <h3 className="text-heading4-bold tracking-wider">
                {job.role ? `${job.role}, ` : ""}
                {job.company}
              </h3>
              <p className="mt-1 text-gray-600">
                <time>{job.start}</time> – <time>{job.end}</time>
                {job.employment ? ` · ${job.employment}` : ""} · Remote
              </p>
              {job.bullets.length > 0 && (
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="text-heading4-bold tracking-wider mt-16 mb-6 text-center">
        Education
      </h3>
      <div className="p-6 bg-gray-50 shadow-xl rounded-lg experience-animate-item">
        <p className="text-heading4-bold tracking-wider">{EDUCATION.degree}</p>
        <p className="mt-1 text-gray-600">
          {EDUCATION.school} · <time>{EDUCATION.start}</time> –{" "}
          <time>{EDUCATION.end}</time>
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;

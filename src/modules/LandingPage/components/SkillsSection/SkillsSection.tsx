import React, { useRef } from "react";
import gsap from "gsap";
import CustomTilt from "@/common/elements/CustomTilt";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";
import { SKILLS } from "@/content/profile";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useRevealOnScroll(
    sectionRef,
    () => {
      gsap.killTweensOf(".skills-animate-heading, .skills-animate-item");
      const tl = gsap.timeline();
      tl.fromTo(
        ".skills-animate-heading",
        { scale: 0.6, opacity: 0 },
        { duration: 1, scale: 1, opacity: 1, ease: "power2.out" }
      );
      tl.fromTo(
        ".skills-animate-item",
        { scale: 0.6, opacity: 0 },
        { duration: 1, scale: 1, opacity: 1, ease: "power2.out", stagger: 0.15 },
        "-=0.5"
      );
    },
    0.05
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="my-16 max-w-6xl mx-auto px-4 scroll-mt-4"
    >
      <h2
        id="skills-heading"
        className="text-center text-heading3-bold lg:text-heading2-bold mb-12 skills-animate-heading"
      >
        Skills
      </h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1">
        {SKILLS.map(({ group, items }) => (
          <li key={group}>
            <CustomTilt perspective={500} scale={1.03} className="hover:z-10 relative h-full">
              <div className="flex flex-col h-full p-8 bg-gray-50 skills-animate-item shadow-2xl rounded-lg">
                <h3 className="text-heading4-bold tracking-wider mb-4">{group}</h3>
                <ul className="flex flex-wrap gap-2" aria-label={`${group} skills`}>
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CustomTilt>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;

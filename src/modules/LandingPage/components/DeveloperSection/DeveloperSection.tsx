import React, { useRef } from "react";
import gsap from "gsap";
import { CONTACT } from "@/common/constants/contact";
import { PROFILE } from "@/content/profile";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";

// The "About" section. It keeps the original developer-section look:
// full-width photo background with a dark panel on the left.
const DeveloperSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useRevealOnScroll(sectionRef, () => {
    gsap.killTweensOf(".developer-background-animate, .zoom-in-elements");
    const tl = gsap.timeline();
    tl.fromTo(
      ".developer-background-animate",
      { x: "-100%" },
      { duration: 1.5, x: "0%", ease: "Power2.easeOut" }
    );
    tl.fromTo(
      ".zoom-in-elements",
      { scale: 0.8, opacity: 0 },
      { duration: 1.5, scale: 1, opacity: 1, ease: "Power2.easeOut" }
    );
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
      className="developer-background !h-auto min-h-[650px] relative developer-background-animate scroll-mt-4"
    >
      <div className="max-w-7xl px-6 md:px-10 mx-auto">
        <div className="py-16 w-full md:w-1/2 relative z-10">
          <h2
            id="about-heading"
            className="text-heading3-bold lg:text-heading2-bold mb-8 text-white zoom-in-elements"
          >
            About me
          </h2>
          {PROFILE.about.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base-semibold text-md text-white max-w-md mb-4 zoom-in-elements"
            >
              {paragraph}
            </p>
          ))}
          <a
            href={CONTACT.mailto}
            className="inline-block mt-8 border-2 border-primary p-4 px-8 text-white text-base-bold grow-on-hover font-semibold zoom-in-elements focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            Email me
          </a>
        </div>
        <div
          aria-hidden="true"
          className="absolute w-full md:w-1/2 h-full bg-gray-900 bg-opacity-80 top-0 left-0"
        ></div>
      </div>
    </section>
  );
};

export default DeveloperSection;

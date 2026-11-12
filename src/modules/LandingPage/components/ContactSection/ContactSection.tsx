import React, { useRef } from "react";
import gsap from "gsap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "@/common/constants/contact";
import { PROFILE } from "@/content/profile";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";

const buttonClass =
  "inline-flex items-center gap-3 p-4 px-8 text-white text-base-bold tracking-wider border-2 border-primary grow-on-hover font-semibold cta-animate-item focus:outline-none focus-visible:ring-4 focus-visible:ring-white";

// Uses the look of the former CallToAction band: dark panel, centred title,
// outlined buttons.
const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useRevealOnScroll(sectionRef, () => {
    gsap.killTweensOf(".cta-animate-background, .cta-animate-item");
    const tl = gsap.timeline();
    tl.fromTo(
      ".cta-animate-background",
      { x: "-100%", opacity: 0 },
      { duration: 1, x: 0, opacity: 1, ease: "power2.out" }
    );
    tl.fromTo(
      ".cta-animate-item",
      { scale: 0.6, opacity: 0 },
      { duration: 1, scale: 1, opacity: 1, ease: "power2.out", stagger: 0.2 }
    );
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="my-16 px-4 overflow-x-clip scroll-mt-4"
    >
      <div className="max-w-7xl px-6 md:px-20 py-12 md:py-16 bg-background mx-auto cta-animate-background text-center">
        <h2
          id="contact-heading"
          className="text-white text-heading3-bold lg:text-heading2-bold cta-animate-item"
        >
          Contact
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto cta-animate-item">
          Email is the fastest way to reach me. I&apos;m in {PROFILE.location},
          working remotely with 4+ hours of overlap with US Eastern.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          <li>
            <a href={CONTACT.mailto} className={buttonClass}>
              <FaEnvelope aria-hidden="true" />
              {CONTACT.email}
            </a>
          </li>
          <li>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;

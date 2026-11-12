import React, { useRef } from "react";
import gsap from "gsap";
import { useRevealOnScroll } from "@/common/hooks/useRevealOnScroll";
import { TESTIMONIALS } from "@/content/profile";

// Permission status per quote is noted in src/content/profile.ts.
const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useRevealOnScroll(sectionRef, () => {
    gsap.killTweensOf(".testimonial-animate-item");
    gsap.fromTo(
      ".testimonial-animate-item",
      { x: "10%", opacity: 0 },
      { duration: 1, x: "0%", opacity: 1, stagger: 0.3, ease: "power2.inOut" }
    );
  });

  if (TESTIMONIALS.length === 0) return null;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className="bg-background py-16 px-6 overflow-x-clip scroll-mt-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="testimonials-heading"
          className="text-center text-white text-heading3-bold lg:text-heading2-bold mb-12"
        >
          Testimonials
        </h2>
        <ul className="grid gap-10 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="testimonial-animate-item">
              <figure className="h-full border-l-4 border-primary pl-6">
                <blockquote className="text-heading4-bold text-yellow-400 italic">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-4">
                  <span className="block text-white font-semibold">{t.name}</span>
                  <span className="block text-gray-300">{t.designation}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;

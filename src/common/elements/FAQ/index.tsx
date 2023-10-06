import { IFAQ } from "@/common/types";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface IProps {
  faqs: IFAQ[];
  isGerman: boolean;
}

const FAQ = ({ faqs, isGerman }: IProps) => {
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".question, .answer, .faq-heading");

          const tl = gsap.timeline({
            stagger: 0.5,
          });

          tl.from(".faq-heading", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });

          faqs.forEach((_, index) => {
            tl.from(`.question-${index}`, {
              x: "-100%",
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            }).from(
              `.answer-${index}`,
              {
                x: "100%",
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              },
              `-=${0.5}`
            );
          });
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);
  return (
    <div ref={faqRef} className="max-w-7xl mx-auto px-8 md:px-20">
      <h2 className="text-heading3-bold md:text-heading2-bold text-center my-8 py-8 pb-0 md:pb-8 faq-heading">
        {isGerman ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {faqs.map((faq, index) => (
          <>
            <h6
              className={`text-body-bold pr-8 md:pr-12 md:text-right question question-${index}`}
            >
              {faq.question}
            </h6>
            <p
              className={`pr-8 md:pr-20 text-gray-600 font-medium answer answer-${index}`}
            >
              {faq.answer}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

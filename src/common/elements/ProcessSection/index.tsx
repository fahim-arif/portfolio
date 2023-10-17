import { useTranslations } from "next-intl";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProcessSection = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);

          const tl = gsap.timeline();

          // Step 1: Zoom in animation for title and subTitle
          tl.fromTo(
            ".zoom-in-animate-item",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.3,
            }
          );

          // Step 2: Slide in animations
          tl.fromTo(
            ".slide-in-animate-item-1",
            { x: "-100%", opacity: 0 },
            {
              duration: 0.5,
              x: "0%",
              opacity: 1,
              ease: "power2.out",
            }
          );
          tl.fromTo(
            ".slide-in-animate-item-2",
            { x: "100%", opacity: 0 },
            {
              duration: 0.5,
              x: "0%",
              opacity: 1,
              ease: "power2.out",
            }
          );
          tl.fromTo(
            ".slide-in-animate-item-3",
            { x: "-100%", opacity: 0 },
            {
              duration: 0.5,
              x: "0%",
              opacity: 1,
              ease: "power2.out",
            }
          );

          // Step 3: Zoom in animations for h3 and p elements
          tl.fromTo(
            ".content-zoom-in-animate-item",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.3,
            }
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const t = useTranslations("existingProject");
  return (
    <div ref={sectionRef} className="process-bg-container">
      <div className="max-w-7xl px-8 md:px-20 mx-auto">
        <h2 className="text-heading3-bold md:text-heading2-bold font-bold text-white text-center pt-20 zoom-in-animate-item">
          {t("processSection.title")}
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-subtle-large mt-8 mb-20  text-gray-200 font-semibold text-center zoom-in-animate-item">
            {t("processSection.subTitle")}
          </p>
        </div>
        <div className="flex flex-col relative py-20">
          <div className="max-w-md bg-background px-14 py-8 self-center lg:self-baseline slide-in-animate-item-1">
            <h3 className="text-heading3-bold text-primary pb-8 content-zoom-in-animate-item">
              {t("processSection.step1.title")}
            </h3>
            <p className="text-gray-100 text-body-normal lg:text-right content-zoom-in-animate-item">
              {t("processSection.step1.description")}
            </p>
          </div>
          <div className="max-w-md bg-background px-14 py-8 self-center lg:self-end mt-8 slide-in-animate-item-2">
            <h3 className="text-heading3-bold text-primary pb-8 content-zoom-in-animate-item">
              {t("processSection.step2.title")}
            </h3>
            <p className="text-gray-100 text-body-normal content-zoom-in-animate-item">
              {t("processSection.step2.description")}
            </p>
          </div>
          <div className="max-w-md bg-background px-14 py-8 self-center  lg:self-baseline mt-8 slide-in-animate-item-3">
            <h3 className="text-heading3-bold text-primary pb-8 content-zoom-in-animate-item">
              {" "}
              {t("processSection.step3.title")}
            </h3>
            <p className="text-gray-100 text-body-normal lg:text-right content-zoom-in-animate-item">
              {t("processSection.step3.description")}
            </p>
          </div>
          <div className="absolute hidden lg:block w-0.5 bg-slate-100 left-1/2 h-full z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

import { Projects } from "@/common/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomTilt from "../../../common/elements/CustomTilt";

const RandomSuggestion = ({ projects }: { projects: Projects }) => {
  const { id } = useRouter().query;
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".animate-heading, .animate-item");
          const tl = gsap.timeline();

          tl.fromTo(
            ".animate-random-suggestion",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              stagger: 0.25,
              ease: "power2.out",
            }
          );

          tl.fromTo(
            ".animate-item-random-suggestion",
            { scale: 0.6, opacity: 0 },
            {
              duration: 2,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.5,
            },
            "-=0.5"
          );
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.05,
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
  }, [id]);
  return (
    <div ref={sectionRef} className="my-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <CustomTilt
            key={project.id}
            perspective={500}
            scale={1.15}
            className="hover:z-10 relative shadow-2xl animate-random-suggestion"
          >
            <Link
              key={project.id}
              className="p-8 lg:h-60 bg-gray-50 cursor-pointer grow-on-hover flex flex-col justify-between"
              href={`/project/${project.id}`}
            >
              <h4 className="text-heading3-bold tracking-wider">
                {project.title}
              </h4>
              <p className="text-gray-500">{project.subtitle}</p>
              <div>
                <button className="text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
                  Learn More
                </button>
              </div>
            </Link>
          </CustomTilt>
        ))}
      </div>
    </div>
  );
};

export default RandomSuggestion;

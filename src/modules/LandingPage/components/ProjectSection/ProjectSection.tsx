import React, { useEffect, useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Thumbnail from "./component/Thumbnail";
import { projects } from "./projectsData";
import NavigationTab from "./component/NavigationTab";
import { Category } from "@/common/types";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";

interface IProps {
  title: string;
}

const categories = Object.values(Category);

const ProjectSection = React.forwardRef((props: IProps, ref: any) => {
  const [parent] = useAutoAnimate();

  const [tab, setTab] = useState(Category.All);

  const selectedProjects = useMemo(() => {
    return tab === Category.All
      ? projects
      : projects.filter((project) => project.category === tab);
  }, [tab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(
            ".project-animate-heading, .project-animate-navigation, .project-animate-item"
          );

          const tl = gsap.timeline();

          tl.fromTo(
            ".project-animate-heading",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
            }
          );

          tl.fromTo(
            ".project-animate-navigation",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
            },
            "-=0.5"
          );

          tl.fromTo(
            ".project-animate-item",
            { scale: 0.6, opacity: 0 },
            {
              duration: 2,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.2,
            }
          );
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className="w-full h-full xl:mt-20 relative overflow-hidden pb-12 pt-12"
      ref={ref}
    >
      {/* Title */}
      <h2 className="px-4 text-center text-heading3-bold lg:text-heading2-bold mb-16 project-animate-heading">
        {props.title}
      </h2>

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-16 sm:px-8 px-4 md:px-12">
        {/* Navigation bar */}
        <div className="flex justify-center flex-col sm:flex-row project-animate-navigation">
          {categories.map((category) => (
            <NavigationTab
              key={category}
              name={category}
              selected={tab === category}
              setTab={setTab}
            />
          ))}
        </div>

        {/* Projects view */}
        <div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          ref={parent}
        >
          {selectedProjects.map((project) => (
            <Tilt
              key={project.id}
              perspective={500}
              scale={1.05}
              className="hover:z-10 relative"
            >
              <div className="project-animate-item shadow-xl rounded-lg">
                <Thumbnail project={project} />
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectSection;

ProjectSection.displayName = "ProjectSection";

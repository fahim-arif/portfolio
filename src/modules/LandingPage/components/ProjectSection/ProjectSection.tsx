import React, { useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Thumbnail from "./component/Thumbnail";
import { projects } from "./projectsData";
import NavigationTab from "./component/NavigationTab";
import { Category } from "@/common/types";

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

  return (
    <div
      className="w-full h-full xl:mt-20 relative overflow-hidden pb-12 pt-12"
      ref={ref}
    >
      {/* Title */}
      <h2 className="px-4 text-center text-heading3-bold lg:text-heading2-bold mb-16">
        {props.title}
      </h2>

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-16 sm:px-8 px-4 md:px-12">
        {/* Navigation bar */}
        <div className="flex justify-center flex-col sm:flex-row">
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
            <Thumbnail key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectSection;

ProjectSection.displayName = "ProjectSection";

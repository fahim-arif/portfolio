import { Projects } from "@/common/types";
import Link from "next/link";
import React from "react";

const RandomSuggestion = ({ projects }: { projects: Projects }) => {
  return (
    <div className="my-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
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
        ))}
      </div>
    </div>
  );
};

export default RandomSuggestion;

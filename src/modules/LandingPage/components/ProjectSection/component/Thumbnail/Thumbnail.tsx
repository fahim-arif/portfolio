import Image from "next/image";
import Link from "next/link";
import { Project } from "@/common/types";

export const TitleTile = ({ project }: { project: Project }) => (
  <div className="flex flex-col items-center justify-center gap-3 px-6 text-center">
    {project.company && (
      <span className="text-primary text-sm font-semibold tracking-widest uppercase">
        {project.company}
      </span>
    )}
    <span className="font-mono text-heading4-bold text-white break-words">
      {project.title}
    </span>
  </div>
);

const Thumbnail = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group flex flex-col h-full bg-white rounded-xl overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-primary"
    >
      <div className="relative aspect-[13/10] bg-background flex justify-center items-center">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 390px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <TitleTile project={project} />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {project.company && (
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-600">
            {project.company}
          </p>
        )}
        <h3 className="text-heading4-bold tracking-wider group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-600 flex-1">{project.subtitle}</p>
        <span className="self-start mt-4 text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
          Read the case study
          <span className="sr-only">: {project.company ? `${project.company}, ` : ""}{project.title}</span>
        </span>
      </div>
    </Link>
  );
};

export default Thumbnail;

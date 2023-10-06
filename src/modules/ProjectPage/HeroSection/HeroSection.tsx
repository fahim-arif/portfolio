import { Project } from "@/common/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

interface IProps {
  project: Project;
  btnText: string;
}

const HeroSection = ({ project, btnText }: IProps) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const { id } = useRouter().query;

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".zoom-in-item-project-hero",
      { scale: 0.6, opacity: 0 },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        stagger: 0.5,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      ".fade-in-image",
      { x: "100%", opacity: 0 },
      {
        duration: 2,
        x: "0%",
        opacity: 1,
        ease: "power2.inOut",
      },
      "-=1.25"
    );
  }, [id]);

  return (
    <div className="h-auto relative max-w-7xl mx-auto px-8 md:px-10 my-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-0 md:my-40 max-w-md">
          <h1 className="text-heading3-bold md:text-heading2-bold font-bold zoom-in-item-project-hero">
            {project?.title}
          </h1>
          <p className="text-xl mt-8 text-gray-500 md:font-semibold zoom-in-item-project-hero">
            {project?.subtitle}
          </p>
          {project?.webUrl && (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={project.webUrl}
            >
              <button className="bg-background text-white my-8  h-12 text-base-bold  tracking-wider md:h-14 font-semibold grow-on-hover px-8 zoom-in-item-project-hero">
                {btnText}
              </button>
            </Link>
          )}
        </div>
        <div className="pt-12 relative">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}
          <Image
            className="fade-in-image"
            src={project?.images[0]}
            height={700}
            width={700}
            alt={project.title}
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

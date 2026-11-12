import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Footer from "@/common/elements/Footer";
import Navbar from "@/common/elements/Navbar";
import { HtmlHead } from "@/common/elements/HtmlHead";
import { PROFILE } from "@/content/profile";
import {
  Project,
  projects,
} from "@/modules/LandingPage/components/ProjectSection/projectsData";
import HeroSection from "@/modules/ProjectPage/HeroSection/HeroSection";
import ProjectOverviewSection from "@/modules/ProjectPage/ProjectOverviewSection/ProjectOverviewSection";
import RandomSuggestion from "@/modules/ProjectPage/RandomSuggestion/RandomSuggestion";

interface Props {
  slug: string;
}

const ProjectPage = ({ slug }: Props) => {
  const project = projects.find((p) => p.slug === slug) as Project;
  const others = projects.filter((p) => p.slug !== slug);

  return (
    <>
      <HtmlHead
        title={`${project.company ? `${project.company}: ` : ""}${project.title} | ${PROFILE.name}`}
        description={project.subtitle}
        imagePath={project.image?.src}
      />
      <Navbar />
      <main>
        <HeroSection project={project} />
        <ProjectOverviewSection project={project} />
        <RandomSuggestion projects={others} />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { slug: String(params?.slug) },
});

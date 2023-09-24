import React, { useEffect, useState } from "react";
import Footer from "@/common/elements/Footer/Footer";
import { HtmlHead } from "@/common/elements/HtmlHead";
import Navbar from "@/common/elements/Navbar/Navbar";
import { SkeletonCard } from "@/common/elements/Skeleton";
import { getRandomProjects } from "@/common/utils";
import CallToAction from "@/common/elements/CallToAction";
import {
  projects,
  projectsGerman,
} from "@/modules/LandingPage/components/ProjectSection/projectsData";
import HeroSection from "@/modules/ProjectPage/HeroSection/HeroSection";
import ProcessSection from "@/modules/ProjectPage/ProjectOverviewSection/ProjectOverviewSection";
import RandomSuggestion from "@/modules/ProjectPage/RandomSuggestion/RandomSuggestion";
import { useRouter } from "next/router";
import { Projects } from "@/common/types";
import { GetStaticPropsContext } from "next";

const ProjectPage = () => {
  const [randProjects, setRandProjects] = useState<Projects>([]);
  const router = useRouter();
  const id = router.query.id as string;

  const isGerman = router.locale === "de";

  const project = isGerman
    ? projectsGerman.find((p) => p.id === parseInt(id))
    : projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    setRandProjects(getRandomProjects(3, !isGerman));
  }, [id, isGerman]);

  return (
    <>
      <HtmlHead
        title={`${project?.title} - Novawork Software Development`}
        content="Las Vegas, Nevada, based, onshore, Custom Web & App Development company fully remote offering website consultation and software development projects."
      />
      {project ? (
        <>
          <Navbar />
          <HeroSection
            project={project}
            btnText={
              isGerman ? "Besuchen Sie die Live-Site" : "Visit Live Site"
            }
          />
          <ProcessSection
            project={project}
            title1={isGerman ? "Projektübersicht" : "Project Overview"}
            title2={isGerman ? "Technologielösung" : "Technology Solution"}
            title3={isGerman ? "Die zentralen Thesen" : "Key Takeaways"}
            title4={
              isGerman ? "Lass uns zusammen arbeiten" : "Let's Work Together"
            }
            btnText={isGerman ? "Kontakt aufnehmen" : "Get in Touch"}
            serviceTitle={isGerman ? "DIENSTLEISTUNGEN" : "SERVICES"}
            serviceBtnText={
              isGerman ? "Alle Dienste anzeigen" : "See All Services"
            }
          />
          <CallToAction
            title={
              isGerman
                ? "Bereit, Ihr Projekt zu starten?"
                : "Ready to start your project?"
            }
            actionBtnText={isGerman ? "In Kontakt kommenn" : "Get in Touch"}
            showHelpSection={false}
          />
          <RandomSuggestion projects={randProjects} />
          <Footer />
        </>
      ) : (
        <div className="w-full max-w-7xl">
          <SkeletonCard />
        </div>
      )}
    </>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  // Get all the possible paths for the English projects
  const englishPaths = projects.map((project) => ({
    params: { id: project.id.toString() },
    locale: "en",
  }));

  // Get all the possible paths for the German projects
  const germanPaths = projectsGerman.map((project) => ({
    params: { id: project.id.toString() },
    locale: "de",
  }));

  return {
    paths: [...englishPaths, ...germanPaths],
    fallback: false,
  };
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

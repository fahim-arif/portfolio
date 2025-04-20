import React, { Suspense, useEffect } from "react";
import Navbar from "@/common/elements/Navbar";
import HeroSection from "@/modules/LandingPage/components/HeroSection";
import FeedbackSection from "@/modules/LandingPage/components/FeedBackSection/FeedbackSection";
import Footer from "@/common/elements/Footer";
import ProjectSection from "@/modules/LandingPage/components/ProjectSection";
import HelpSection from "@/modules/LandingPage/components/HelpSection/HelpSection";
import DeveloperSection from "@/modules/LandingPage/components/DeveloperSection/DeveloperSection";
import ClientSection from "@/modules/LandingPage/components/ClientSection/ClientSection";
import { SkeletonCard } from "@/common/elements/Skeleton";
import { HtmlHead } from "@/common/elements/HtmlHead";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

function HomePage() {
  const ref = React.useRef<HTMLDivElement>(null);

  const projectRef = React.useRef<HTMLDivElement>(null);

  const aboutRef = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  const query = router.query.scroll;

  const scrollToProjects = query === "projects";

  const scrollToReviews = query === "reviews";

  const scrollToServiceSection = () => {
    if (!ref.current?.scroll) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutSection = () => {
    if (!aboutRef.current?.scroll) return;
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjectSection = () => {
    if (!projectRef.current?.scroll) return;
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollToProjects) {
      scrollToProjectSection();
    } else if (scrollToReviews) {
      scrollToAboutSection();
    }
  }, [query]);

  const t = useTranslations("home");

  return (
    <>
      <HtmlHead
        title="Software Development"
        content="I'm passionate about delivering quality software beyond expectations. Let's build applications together."
      />
      <Suspense fallback={<SkeletonCard />}>
        <Navbar />
        <HeroSection
          scrollToProjectSection={scrollToProjectSection}
          title="YOUR ULTIMATE DIGITAL PARTNER"
          subTitle="Building Technologies Innovating Through Collaboration To Address Global Challenges Delivering Quality Service Beyond Expectations."
        />
        <HelpSection />
        <ProjectSection title={t("projectSection.title")} ref={projectRef} />
        <FeedbackSection title={t("feedbackSection.title")} ref={aboutRef} />
        <DeveloperSection
          title={t("developerSection.title")}
          description={t("developerSection.description")}
          btnText={t("developerSection.btnText")}
        />
        <ClientSection
          title={t("bottomSection.title")}
          description={t("bottomSection.description")}
          btnText={t("bottomSection.btnText")}
        />
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

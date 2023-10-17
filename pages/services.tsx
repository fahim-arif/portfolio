import React, { Suspense } from "react";
import Navbar from "@/common/elements/Navbar";
import Footer from "@/common/elements/Footer";
import HelpSection from "@/modules/LandingPage/components/HelpSection/HelpSection";
import { SkeletonCard } from "@/common/elements/Skeleton";
import { HtmlHead } from "@/common/elements/HtmlHead";
import HeroSection from "@/modules/ServicesPage/HeroSection";
import MidSection from "@/modules/ServicesPage/MidSection";
import CallToAction from "@/common/elements/CallToAction";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

function ServicesPage() {
  const ref = React.useRef<HTMLDivElement>(null);

  const aboutRef = React.useRef<HTMLDivElement>(null);

  const scrollToServiceSection = () => {
    if (!ref.current?.scroll) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutSection = () => {
    if (!aboutRef.current?.scroll) return;
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const t = useTranslations("service");

  return (
    <>
      <HtmlHead
        title="Software Development Services - Novawork Las Vegas, Nevadaa"
        content="Software development is our core. Take a look at the list of technologies we use to deliver production-quality applications at Novawork."
      />
      <Suspense fallback={<SkeletonCard />}>
        <Navbar />

        <HeroSection
          title={t("heroSection.title")}
          description={t("heroSection.description")}
          btnText={t("heroSection.btnText")}
        />
        <MidSection
          title={t("midSection.title")}
          description={t("midSection.description")}
        />
        <CallToAction
          title={t("callToAction.title")}
          actionBtnText={t("callToAction.btnText")}
          showHelpSection={false}
        />
        <HelpSection />
        <Footer />
      </Suspense>
    </>
  );
}

export default ServicesPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

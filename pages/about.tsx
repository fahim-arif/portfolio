import React from "react";
import Navbar from "@/common/elements/Navbar";
import Footer from "@/common/elements/Footer";
import AboutNovawork from "@/modules/AboutPage/components/AboutTechshore";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

function AboutPage() {
  const t = useTranslations("about");
  return (
    <>
      <Navbar />
      <AboutNovawork title={t("heading")} description={t("description")} />
      <Footer />
    </>
  );
}

export default AboutPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

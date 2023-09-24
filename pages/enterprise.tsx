import React from "react";
import CallToAction from "@/common/elements/CallToAction";
import FAQ from "@/common/elements/FAQ";
import Footer from "@/common/elements/Footer/Footer";
import { HtmlHead } from "@/common/elements/HtmlHead";
import Navbar from "@/common/elements/Navbar/Navbar";
import HeroSection from "@/common/elements/HeroSection";
import ReviewSection from "@/common/elements/ReviewSection";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const heroImage = {
  src: "/images/HCA-QM-Desktop.png",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const reviewImage = {
  src: "/images/Healthcare-Dashboard-CareHere.jpg",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const client = {
  review:
    "We effortlessly integrate with your development process or provide a cross-functional self-contained team capable of delivering complex enterprise solutions. We have broad experience working with internal or 3rd party purchasing groups, and will meet vendor requirements in order to quickly deliver for your team.",
  name: "",
  designation: "",
};

const faqs = [
  {
    question: "How large an enterprise have you worked with?",
    answer:
      "We have experience collaborating with companies of varying sizes, from established industry leaders to innovative startups.",
  },
  {
    question:
      "What is the difference between working with an enterprise and just a large company?",
    answer:
      "In an enterprise, how you complete your work is as important as what you are working on. Large enterprises have established processes, guidelines and requirements that must be understood and followed in order to drive ongoing success as a consultant. We have deep expertise in delivering ongoing value with large enterprises in these types of environments.",
  },
];

const germanFAQS = [
  {
    question: "Mit welchem ​​großen Unternehmen haben Sie zusammengearbeitet?",
    answer:
      "Wir haben mit so großen Unternehmen wie den Fortune 500 zusammengearbeitet.",
  },
  {
    question:
      "Was ist der Unterschied zwischen der Zusammenarbeit mit einem Unternehmen und einem großen Unternehmen?",
    answer:
      "In einem Unternehmen ist die Art und Weise, wie Sie Ihre Arbeit erledigen, genauso wichtig wie das, woran Sie arbeiten. Große Unternehmen haben etablierte Prozesse, Richtlinien und Anforderungen, die verstanden und befolgt werden müssen, um als Berater dauerhaft erfolgreich zu sein. Wir verfügen über umfassende Erfahrung darin, für große Unternehmen in solchen Umgebungen einen dauerhaften Mehrwert zu schaffen.",
  },
  {
    question: "Können Ressourcen vor Ort oder in unserem Büro verfügbar sein?",
    answer:
      "Wenn Sie im Großraum Mellingen ansässig sind, verfügen wir über lokale Entwickler, die bei Bedarf an Besprechungen teilnehmen und mit Ihrem Team zusammenarbeiten können. Wenn Sie außerhalb dieser Gebiete ansässig sind, lassen Sie uns über Ihre Bedürfnisse sprechen und darüber, wie wir Sie am besten bedienen können.",
  },
];

function EnterprisePage() {
  const router = useRouter();
  const isGerman = router.locale === "de";

  const t = useTranslations("enterprise");
  return (
    <>
      <HtmlHead
        title="Enterprise Applications - Novawork Software Development"
        content="Leverage our subject matter knowledge in healthcare, finance, manufacturing, and education to build or upgrade enterprise-grade applications"
      />
      <Navbar />
      <HeroSection
        title={t("heroSection.title")}
        description={t("heroSection.description")}
        image={heroImage}
      />
      <ReviewSection shouldRemoveQuotes client={client} image={reviewImage} />
      <FAQ faqs={isGerman ? germanFAQS : faqs} isGerman={isGerman} />
      <CallToAction
        title={t("callToAction.title")}
        actionBtnText={t("callToAction.btnText")}
      />
      <Footer />
    </>
  );
}

export default EnterprisePage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

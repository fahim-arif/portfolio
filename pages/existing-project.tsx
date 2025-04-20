import React from "react";
import CallToAction from "@/common/elements/CallToAction";
import FAQ from "@/common/elements/FAQ";
import Footer from "@/common/elements/Footer/Footer";
import { HtmlHead } from "@/common/elements/HtmlHead";
import Navbar from "@/common/elements/Navbar/Navbar";
import ProcessSection from "@/common/elements/ProcessSection";
import HeroSection from "@/common/elements/HeroSection";
import ReviewSection from "@/common/elements/ReviewSection";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const heroImage = {
  src: "/images/Existing-Projects-Consulting-scaled.jpg",
  shadow: true,
  size: {
    width: 700,
    height: 519,
  },
};

const reviewImage = {
  src: "/images/Scheduling-Software-Development-Nashville.jpg",
  shadow: true,
  size: {
    width: 700,
    height: 519,
  },
};

const client = {
  review:
    "I've always dreamed about running a company that has no full-time IT employees, and with my apps developed by Fahim, we are able to achieve just that.",
  name: "Greg Maxwell",
  designation: "Owner, Advancing Practitioners",
};

const faqs = [
  {
    question: "What technologies do you use?",
    answer:
      "Our development team has foundations in core computer science and software development principles. More often than not, there is a language or paradigm that fits your needs better than others and we want to ensure we deliver that for you",
  },
  {
    question:
      "I don't have a technical background, can you help me figure out what I need?",
    answer:
      "Absolutely. If you have had a sudden change in technical leadership on your product, are seeking a new development company to partner with, or are simply looking for a second opinion, we are happy to examine your codebase and make recommendations for where your budget is best spent for meeting both workflow and performance goals.",
  },
  {
    question:
      "I am a technical product decision-maker and I know exactly what I need. Will you follow the requirements I send you?",
    answer:
      "Yes. We will work with you to build a scope and are happy to take a project off of your plate. If you are seeking more hands-on collaboration, perhaps you should look at our part-time engineer offerings to add team member to your team for the duration of your project.",
  },
];

const germanFAQS = [
  {
    question: "Welche Technologien nutzen Sie?",
    answer:
      "Unser Entwicklungsteam verfügt über Grundlagen in den Kerninformatik- und Softwareentwicklungsprinzipien. In den meisten Fällen gibt es eine Sprache oder ein Paradigma, die besser zu Ihren Bedürfnissen passt als andere, und wir möchten sicherstellen, dass wir Ihnen dies bieten",
  },
  {
    question:
      "Ich habe keinen technischen Hintergrund. Können Sie mir helfen herauszufinden, was ich brauche?",
    answer:
      "Absolut. Wenn Sie einen plötzlichen Wechsel in der technischen Führung Ihres Produkts erlebt haben, auf der Suche nach einer neuen Entwicklungsfirma als Partner sind oder einfach eine zweite Meinung einholen möchten, prüfen wir gerne Ihre Codebasis und geben Ihnen Empfehlungen, wo Ihr Budget am besten eingesetzt werden kann um sowohl Workflow- als auch Leistungsziele zu erreichen.",
  },
  {
    question:
      "Ich bin technischer Produktentscheider und weiß genau, was ich brauche. Werden Sie die Anforderungen befolgen, die ich Ihnen sende?",
    answer:
      "Ja. Wir bauen gemeinsam mit Ihnen ein Zielfernrohr und nehmen Ihnen gerne ein Projekt ab. Wenn Sie auf der Suche nach mehr praktischer Zusammenarbeit sind, sollten Sie sich vielleicht unsere Angebote für Teilzeit-Ingenieure ansehen, um für die Dauer Ihres Projekts ein Novawork-Teammitglied in Ihr Team aufzunehmen.",
  },
];

function ExsitingPage() {
  const t = useTranslations("existingProject");

  const router = useRouter();

  const isGerman = router.locale === "de";

  return (
    <>
      <HtmlHead
        title="Existing Projects - Software Development"
        content="Whether you need to add features, refresh design, or improve performance, we have you covered. Have a conversation with our architects today."
      />
      <Navbar />
      <HeroSection
        title={t("heroSection.title")}
        description={t("heroSection.description")}
        image={heroImage}
      />
      <ProcessSection />
      <ReviewSection client={client} image={reviewImage} />
      <FAQ faqs={isGerman ? germanFAQS : faqs} isGerman={isGerman}  />
      <CallToAction
        title={t("callToAction.title")}
        actionBtnText={t("callToAction.btnText")}
      />
      <Footer />
    </>
  );
}

export default ExsitingPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

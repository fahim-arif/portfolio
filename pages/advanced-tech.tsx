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
  src: "/images/NOAH-Basketball.jpg",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const reviewImage = {
  src: "/images/ap-screenshot.png",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const client = {
  review:
    "Leverage technical expertise that has been used in world-class organizations and disruptive start-ups. Feel comfort in knowing that every line of code we write belongs to you.",
  name: "",
  designation: "",
};

const faqs = [
  {
    question: "What kinds of technology can you work on?",
    answer:
      "We can write software for virtually any technology. Whether it is augmented reality, machine learning or an automated parking meter system, we can handle it all.",
  },
  {
    question:
      "What if I have a business idea, but don't know which technology to use?",
    answer:
      "We can help! We have deep experience in picking the right technology for the application. Additionally, with our internal architecture Request For Comment (RFC) process, we can tap the entire company's knowledge to ensure the right technology for the job.",
  },
  {
    question:
      "I want to explore what is possible. Do you all take on early stage research and development efforts?",
    answer:
      "We enjoy the challenge of answering hard questions and creating something new. For R&D efforts we help you craft a hypothesis and work to fail-fast by providing you with initial prototypes that answer your most pressing questions without busting your budget.",
  },
];

const germanFAQS = [
  {
    question: "An welchen Arten von Technologie können Sie arbeiten?",
    answer:
      "Wir können Software für praktisch jede Technologie schreiben. Ob Augmented Reality, maschinelles Lernen oder ein automatisiertes Parkuhrsystem, wir können alles bewältigen.",
  },
  {
    question:
      "Was ist, wenn ich eine Geschäftsidee habe, aber nicht weiß, welche Technologie ich verwenden soll?",
    answer:
      "Wir können helfen! Wir verfügen über umfassende Erfahrung bei der Auswahl der richtigen Technologie für die Anwendung. Darüber hinaus können wir mit unserem RFC-Prozess (Request For Comment) für die interne Architektur auf das Wissen des gesamten Unternehmens zurückgreifen, um sicherzustellen, dass die richtige Technologie für die jeweilige Aufgabe zur Verfügung steht.",
  },
  {
    question:
      "Ich möchte erkunden, was möglich ist. Übernehmen Sie alle Forschungs- und Entwicklungsanstrengungen im Frühstadium?",
    answer:
      "Wir genießen die Herausforderung, schwierige Fragen zu beantworten und etwas Neues zu schaffen. Für F&E-Bemühungen helfen wir Ihnen, eine Hypothese zu erstellen und schnell zum Scheitern zu gelangen, indem wir Ihnen erste Prototypen zur Verfügung stellen, die Ihre dringendsten Fragen beantworten, ohne Ihr Budget zu sprengen.",
  },
];

function AdvancedTechPage() {
  const router = useRouter();
  const isGerman = router.locale === "de";

  const t = useTranslations("advancedTech");
  return (
    <>
      <HtmlHead
        title="Advanced Technology - Novawork Software Development"
        content="Our team has proven experience in machine learning development, computer vision, IoT, and advanced hardware integrations."
      />
      <Navbar />
      <HeroSection
        title={t("heroSection.title")}
        description={t("heroSection.description")}
        image={heroImage}
      />
      <ReviewSection client={client} image={reviewImage} />
      <FAQ faqs={isGerman ? germanFAQS : faqs} isGerman={isGerman} />
      <CallToAction
        title={t("callToAction.title")}
        actionBtnText={t("callToAction.btnText")}
      />
      <Footer />
    </>
  );
}

export default AdvancedTechPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

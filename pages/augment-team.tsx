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
  src: "/images/IMG_3008.jpg",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const reviewImage = {
  src: "/images/Ryan.jpg",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const client = {
  review:
    "When our company needed additional development help we were able to seamlessly integrate with help from Novawork. Communication has been clear, expectations have been set and met, and the overall quality of work.",
  name: "Karim Varela",
  designation: "VP Engineering, MetaLink",
};

const faqs = [
  {
    question: "What kinds of development resources are available?",
    answer:
      "While our team is proficient in all of the most popular coding languages. Availability of our resources are based on tech stack and timeline. Our recommended ramp-up time is 3-4 weeks to get onboarded and start writing code for a project. Faster onboarding is addressed on a case-by-case basis.",
  },
  {
    question: "Do you offer contract-to-hire?",
    answer:
      "Novawork does not offer a contract-to-hire model for our staffing engagements. With our team, you can enjoy the stability and consistency of a full-time employee with the flexibility of part-time resources.",
  },
  {
    question: "Can resources be on-site or at our office?",
    answer:
      "Currently, we do not offer on-site services, as we are dedicated to providing top-notch remote solutions that ensure efficiency and quality regardless of location. However, we understand the value of face-to-face collaboration and are actively exploring the possibility of offering on-site services in the future. In the meantime, our team is committed to understanding your needs and finding innovative ways to work closely with you, utilizing the latest communication and collaboration tools to make the experience seamless and productive. Let’s have a conversation about your unique needs and how we can best serve you, regardless of geographical boundaries.",
  },
];

const germanFAQS = [
  {
    question: "Welche Arten von Entwicklungsressourcen stehen zur Verfügung?",
    answer:
      "Unser Team beherrscht alle gängigen Programmiersprachen. Die Verfügbarkeit unserer Ressourcen basiert auf dem Tech-Stack und dem Zeitplan. Unsere empfohlene Anlaufzeit beträgt 3–4 Wochen, um sich einzuarbeiten und mit dem Schreiben von Code für ein Projekt zu beginnen. Ein schnelleres Onboarding wird von Fall zu Fall geklärt.",
  },
  {
    question: "Bieten Sie Mietverträge an?",
    answer:
      "Novawork bietet für unsere Personalbesetzungen kein Contract-to-Hire-Modell an. Allerdings sind über 90 % unserer Mitarbeiter Vollzeitmitarbeiter von Novawork. Mit unserem Team genießen Sie die Stabilität und Kontinuität eines Vollzeitmitarbeiters mit der Flexibilität von Teilzeitressourcen.",
  },
  {
    question: "Können Ressourcen vor Ort oder in unserem Büro verfügbar sein?",
    answer:
      "Wenn Sie im Großraum Mellingen ansässig sind, verfügen wir über lokale Entwickler, die bei Bedarf an Besprechungen teilnehmen und mit Ihrem Team zusammenarbeiten können. Wenn Sie außerhalb dieser Gebiete ansässig sind, lassen Sie uns über Ihre Bedürfnisse sprechen und darüber, wie wir Sie am besten bedienen können.",
  },
];

function AugmentTeamPage() {
  const router = useRouter();

  const isGerman = router.locale === "de";

  const t = useTranslations("augmentTeam");

  return (
    <>
      <HtmlHead
        title="Augment Your Team - Novawork Software Development"
        content="Our diverse, local team of software developers and designers is available for part time or short term contracts to augment your team."
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

export default AugmentTeamPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

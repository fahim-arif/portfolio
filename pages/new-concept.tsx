import React, { useEffect } from "react";
import CallToAction from "@/common/elements/CallToAction";
import FAQ from "@/common/elements/FAQ";
import Footer from "@/common/elements/Footer/Footer";
import { HtmlHead } from "@/common/elements/HtmlHead";
import Navbar from "@/common/elements/Navbar/Navbar";
import ProcessSection from "@/common/elements/ProcessSection";
import HeroSection from "@/common/elements/HeroSection";
import ReviewSection from "@/common/elements/ReviewSection";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

const heroImage = {
  src: "/images/New-Projects-Nashville-Apps.png",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const reviewImage = {
  src: "/images/Mobile-Apps-Developers.png",
  shadow: false,
  size: {
    width: 700,
    height: 519,
  },
};

const client = {
  review:
    "We started working with Novawork over a year ago, and since our very first conversation, we have felt complete comfort in working with them. Because of their transparency, quality of work, advice, consultation, and overall company culture, I see a very long and successful partnership with Novawork.",
  name: "Georgette Taylor",
  designation: "Co-Founder, Hexa Health",
};

const faqs = [
  {
    question: "What do I need to know before I can start building an app?",
    answer:
      "Before we can understand what users should click on, we need to define your business objectives. Our first question to you will be - what value does this product provide your users?. In order to take an idea from a napkin to a clickable tool, we need a crystal clear vision of how your users will complete an interaction with your solution. Not sure how to get from steps A to B? Consult with our product design team to narrow down your user workflows before development even begins.",
  },
  {
    question:
      "I don't have a technical background, can you help me figure out what I need?",
    answer:
      "Absolutely. Our product strategists and architects will make recommendations for your product based on functionality, market trends, and industry experience. We find that it is not uncommon for first-time founders to have a great idea, but no software development experience. We have a team of qualified technical leaders, and are happy to offer our guidance.",
  },
  {
    question:
      "I am a technical product decision-maker and I know exactly what I need. Will you follow the requirements I send you?",
    answer:
      "Yes. We will work with you to build a scope and are happy to take a project off of your plate. If you are seeking more hands-on collaboration, perhaps you should look at our part-time engineers offering to add a Novawork team member to your team for the duration of your projec",
  },
];

const germanFAQS = [
  {
    question:
      "Was muss ich wissen, bevor ich mit der Entwicklung einer App beginnen kann?",
    answer:
      "Bevor wir verstehen können, worauf Benutzer klicken sollen, müssen wir Ihre Geschäftsziele definieren. Unsere erste Frage an Sie lautet: Welchen Wert bietet dieses Produkt Ihren Benutzern? Um eine Idee von der Serviette in ein anklickbares Tool zu verwandeln, benötigen wir eine kristallklare Vorstellung davon, wie Ihre Benutzer eine Interaktion mit Ihrer Lösung durchführen werden. Sie sind sich nicht sicher, wie Sie von Schritt A nach B gelangen? Wenden Sie sich an unser Produktdesign-Team, um Ihre Benutzerabläufe einzugrenzen, bevor die Entwicklung überhaupt beginnt.",
  },
  {
    question:
      "Ich habe keinen technischen Hintergrund. Können Sie mir helfen herauszufinden, was ich brauche?",
    answer:
      "Absolut. Unsere Produktstrategen und -architekten geben Empfehlungen für Ihr Produkt basierend auf Funktionalität, Markttrends und Branchenerfahrung. Wir stellen fest, dass es nicht ungewöhnlich ist, dass Erstgründer eine großartige Idee, aber keine Erfahrung in der Softwareentwicklung haben. Wir verfügen über ein Team qualifizierter technischer Führungskräfte und stehen Ihnen gerne mit Rat und Tat zur Seite.",
  },
  {
    question:
      "Ich bin technischer Produktentscheider und weiß genau, was ich brauche. Werden Sie die Anforderungen befolgen, die ich Ihnen sende?",
    answer:
      "Ja. Wir bauen gemeinsam mit Ihnen ein Zielfernrohr und nehmen Ihnen gerne ein Projekt ab. Wenn Sie auf der Suche nach mehr praktischer Zusammenarbeit sind, sollten Sie sich vielleicht die Angebote unserer Teilzeitingenieure ansehen, die für die Dauer Ihres Projekts ein Novawork-Teammitglied in Ihr Team aufnehmen",
  },
];

function NewConceptPage() {
  const ref = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  const query = router.query.scroll;

  const scrollToFAQ = query === "faq";

  const isGerman = router.locale === "de";

  const t = useTranslations("newConcept");

  const scrollToFAQSection = () => {
    if (!ref.current?.scroll) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollToFAQ) {
      scrollToFAQSection();
    }
  }, [query]);

  return (
    <>
      <HtmlHead
        title="New App Concepts - Novawork Software Development"
        content="Our team of experts will help you choose a technology strategy that connects your budget and timeline to your new app concept."
      />
      <Navbar />
      <HeroSection
        title={t("heroSection.title")}
        description={t("heroSection.description")}
        image={heroImage}
      />
      <ProcessSection />
      <ReviewSection client={client} image={reviewImage} />
      <div ref={ref}>
        <FAQ faqs={isGerman ? germanFAQS : faqs} isGerman={isGerman} />
      </div>
      <CallToAction
        title={t("callToAction.title")}
        actionBtnText={t("callToAction.btnText")}
      />
      <Footer />
    </>
  );
}

export default NewConceptPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

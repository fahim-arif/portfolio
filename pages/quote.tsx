import { useTranslations } from "next-intl";
import Navbar from "../src/common/elements/Navbar";
import ClientSection from "../src/modules/LandingPage/components/ClientSection";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import QuoteSection from "../src/modules/QuotePage/QuoteSection";

const Quote = () => {
  const t = useTranslations("home");
  return (
    <>
      <Head>
        <title>Get a free Quote</title>
      </Head>
      <Navbar />
      <QuoteSection />
      <ClientSection showHeading />
    </>
  );
};

export default Quote;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

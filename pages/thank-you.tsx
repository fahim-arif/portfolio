import Head from "next/head";
import Navbar from "../src/common/elements/Navbar";
import ThankYouSection from "../src/modules/ThankYouPage/ThankYouSection";

const ThankYou = () => {
  return (
    <>
      <Head>
        <title>Thank You</title>
      </Head>
      <Navbar />
      <ThankYouSection />
    </>
  );
};

export default ThankYou;

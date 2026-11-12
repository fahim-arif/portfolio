import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import "@/common/theme/styles/global.css";

const barlowFont = Barlow({
  weight: ["300", "400", "500", "600", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={barlowFont.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

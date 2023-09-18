import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import "@/common/theme/styles/global.css";
import { NextIntlClientProvider } from "next-intl";
import { ToastContainer } from "react-toastify";

const ralewayFont = Barlow({
  weight: ["300", "400", "500", "600", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={ralewayFont.className}>
      <div className="w-full max-w-md">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className="toast-container"
        />
      </div>
      <NextIntlClientProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </main>
  );
}

export default MyApp;

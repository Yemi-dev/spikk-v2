import { gilroy, comfortaa } from "@/styles/fonts";
import "@/styles/globals.css";
import QueryProvider from "@/ui/components/Query/QueryProvider";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      {/* QueryProvider requires children prop */}
      <main className={`${gilroy.variable} ${comfortaa.variable}`}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
    </QueryProvider>
  );
}

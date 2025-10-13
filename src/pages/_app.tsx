import { gilroy, comfortaa } from "@/styles/fonts";
import "@/styles/globals.css";
import QueryProvider from "@/ui/components/Query/QueryProvider";
import PageLoader from "@/ui/atoms/PageLoader";
import usePageLoader from "@/hooks/usePageLoader";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const { isLoading, loadingMessage } = usePageLoader();

  return (
    <QueryProvider>
      {/* QueryProvider requires children prop */}
      <main className={`${gilroy.variable} ${comfortaa.variable}`}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
      <PageLoader isLoading={isLoading} message={loadingMessage} />
    </QueryProvider>
  );
}

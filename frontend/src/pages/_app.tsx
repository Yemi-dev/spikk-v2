import { Delight } from "@/styles/fonts";
import "@/styles/globals.css";
import QueryProvider from "@/ui/components/QueryProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <main className={`${Delight.variable}`}>
        <Component {...pageProps} />
      </main>
    </QueryProvider>
  );
}

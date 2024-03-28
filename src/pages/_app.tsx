import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { AppProps } from "next/app";
import "./globals.css";
import "./css/bootstrap-icons.css";
import "./css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

Sentry.init({
  dsn: "https://10b9c3536835c67ac0ca44156a6e78de@o4506989417201664.ingest.us.sentry.io/4506989425917952",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

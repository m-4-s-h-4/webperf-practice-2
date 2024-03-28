import { AppProps } from "next/app";
import "./globals.css";
import "./css/bootstrap-icons.css";
import "./css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

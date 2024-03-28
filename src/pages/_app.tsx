import { AppProps } from "next/app";
import "./globals.css";
import "./css/bootstrap-icons.css";
import "./css/bootstrap.min.css";
import Main from "./components/Main";

function MyApp({ Component, pageProps }: AppProps) {
  return <Main />;
  //   return <Component {...pageProps} />;
}
export default MyApp;

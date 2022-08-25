import "../assets/css/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";
// @ts-ignore
import Userfront from "@userfront/react";
import { USERFRONT_AUTH_TENANT_ID } from "../components/shared/globals";

Userfront.init(USERFRONT_AUTH_TENANT_ID);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#da2b42" />
        <meta
          name="description"
          content="Artificial Intelligence Powered Recommender as a Service"
        />
        <link rel="apple-touch-icon" href="/images/logo192.svg" />
        <link rel="manifest" href="/manifest.json" />
        <title>
          Loulop | Deliver highly personalized recommendations at scale
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

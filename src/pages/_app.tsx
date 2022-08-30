import "../assets/css/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
// @ts-ignore
import Userfront from "@userfront/react";
import { USERFRONT_AUTH_TENANT_ID } from "../components/shared/globals";
import { SWRConfig } from "swr";
import SWRDefaultConfig from "../components/shared/utils/SWRDefaultConfig";

Userfront.init(USERFRONT_AUTH_TENANT_ID);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
        <meta
          name="description"
          content="Deliver highly personalized recommendations at scale"
        />
        <meta name="keywords" content="Keywords" />
        <title>Loulop</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/images/logo16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/logo32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/images/nlogo192.png" />
        <meta name="theme-color" content="#da2b42" />
      </Head>
      <SWRConfig value={SWRDefaultConfig}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;

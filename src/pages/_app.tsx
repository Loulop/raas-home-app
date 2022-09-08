import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";
import "../assets/css/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
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
        <link rel="apple-touch-icon" href="/images/wlogo512.png" />
        <meta name="theme-color" content="#da2b42" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;

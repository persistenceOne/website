import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/molecules/footer";
import theme from "@/styles/theme";
import { Box } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Header from "@/components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";
import Script from "next/script";
import { ANALYTICS } from "@/utils/config";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`}
      />
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <ChakraProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <title>Persistence One | Securely Trade BTC and LSTs</title>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta
            content="Persistence One is a purpose built Layer 1 on a mission to maximize yield and security through Liquid Staking."
            name="description"
          />
          <meta
            name="keywords"
            content="persistence, liquid staking, bitcoin, pstake, $pstake, cosmos, dexter, xprt, xprt token"
          />
          <link rel="manifest" href="/manifest.json" />

          <meta
            content="Persistence One | Securely Trade BTC and LSTs"
            property="og:title"
          />
          <meta property="og:image" content="/ogimage.jpeg" />
          <meta
            property="og:description"
            content="Persistence One is a purpose built Layer 1 on a mission to maximize yield and security through Liquid Staking."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://persistence.one" />

          <meta property="og:site_name" content="Persistence" />

          <meta
            content="Persistence One | Securely Trade BTC and LSTs"
            property="twitter:title"
          />
          <meta
            content="Persistence One is a purpose built Layer 1 on a mission to maximize yield and security through Liquid Staking."
            property="twitter:description"
          />
          <link rel="canonical" href="https://persistence.one/" />
          {/*Twitter Tags*/}
          <meta content="/ogimage.jpeg" property="twitter:image" />
        </Head>
        <Box pos={"fixed"} width="100%" zIndex="sticky">
          <Header />
        </Box>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;

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
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <title>
            Persistence One | Bitcoin Interoperability. Powered by Intents.
            Secured by Bitcoin.
          </title>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta
            content="Bitcoin Interoperability. Powered by Intents. Secured by Bitcoin."
            name="description"
          />
          <meta
            name="keywords"
            content="persistence, liquid staking, bitcoin, babylon, pstake, $pstake, cosmos, xprt, xprt token"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="canonical" href="https://persistence.one/" />

          {/*Open Graph Tags*/}
          <meta
            property="og:title"
            content="Persistence One | Securely Trade BTC and LSTs"
          />
          <meta property="og:site_name" content="Persistence" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="990" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:alt" content="Persistence" />
          <meta
            property="og:image"
            content="https://persistence.one/ogimage.jpeg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="persistence.one" />
          <meta
            property="og:description"
            content="Bitcoin Interoperability. Powered by Intents. Secured by Bitcoin."
          />
          {/*Twitter Tags*/}
          <meta
            content="Persistence One | Securely Trade BTC and LSTs"
            name="twitter:title"
          />
          <meta name="twitter:image:type" content="image/jpeg" />
          <meta name="twitter:image:width" content="990" />
          <meta name="twitter:image:height" content="600" />
          <meta name="twitter:image:alt" content="Persistence" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="persistence.one" />
          <meta
            content="Bitcoin Interoperability. Powered by Intents. Secured by Bitcoin."
            name="twitter:description"
          />
          <meta
            name="twitter:image"
            content="https://persistence.one/ogimage.jpeg"
          />
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

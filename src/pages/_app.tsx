import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/molecules/footer";
import theme from "@/styles/theme";
import { Box } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Header from "@/components/molecules/header";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";
import GeofenceNotice from "@/components/molecules/geofence-banner";

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
      <ChakraProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <title>
            Persistence One | Bitcoin Interoperability. Powered by Intents.
            Secured by Bitcoin.
          </title>
          <link rel="shortcut icon" href="/favicon.ico" />
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
            content="https://persistence.one/ogimage.png"
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
            content="https://persistence.one/ogimage.png"
          />
        </Head>
        <Box pos={"fixed"} width="100%" zIndex="sticky">
          <GeofenceNotice />
          <Header />
        </Box>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;

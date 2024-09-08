import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { AppProps } from "next/app";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";

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
      <Head>
        <meta charSet="utf-8" />
        <title>
          Persistence One | Bitcoin Interoperability. Powered by Intents.
          Secured by Bitcoin.
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
          name="viewport"
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
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;

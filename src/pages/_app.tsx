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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>Persistence One | Staking, Liquid Staking and Restaking</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          content="Persistence One is a purpose built Layer 1 on a mission to maximize yield and security through Liquid Staking and Restaking."
          name="description"
        />
        <meta
          name="keywords"
          content="persistence, liquid staking, restaking, pstake, $pstake, cosmos, bamboo, dexter, xprt, xprt token"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta
          content="Persistence One | Staking, Liquid Staking and Restaking"
          property="og:title"
        />
        <meta property="og:image" content="/ogimage.jpeg" />
        <meta
          property="og:description"
          content="Persistence One is a purpose built Layer 1 on a mission to maximize yield and security through Liquid Staking and Restaking."
        />
        <meta property="og:site_name" content="Persistence" />

        <meta
          content="Persistence One | Staking, Liquid Staking and Restaking"
          property="twitter:title"
        />
        <meta
          content="Persistence One is a purpose built Layer 1 on a mission to maximize yield and security through Liquid Staking and Restaking."
          property="twitter:description"
        />

        {/*Twitter Tags*/}
        <meta content="/ogimage.jpeg" property="twitter:image" />
      </Head>
      <Box pos={"fixed"} width="100%" zIndex="sticky">
        <Header />
      </Box>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default App;

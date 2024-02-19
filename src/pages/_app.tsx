import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/molecules/footer";
import theme from "@/styles/theme";
import { Box } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Header from "@/components/molecules/header";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>Persistence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

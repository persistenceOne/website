import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import Header from "@/components/molecules/header";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/molecules/footer";
import theme from "@/styles/theme";
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>Persistence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Twitter Tags*/}
        <meta content="/ogimage.jpeg" property="twitter:image" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default App;

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Header from "../components/molecules/Header";
import Head from "next/head";
import "../styles/globals.css";
import "rc-tooltip/assets/bootstrap.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Persistence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets.
           Stakers of PoS tokens can stake their assets while unlocking liquidity in the form of stkASSETs,
           which can then be used across DeFi to earn liquid staking rewards."
        />
        <meta
          name="keywords"
          content="liquid staking, pstake, $pstake, cosmos, persistence, stkBNB, stkATOM"
        />

        {/*Open Graph Tags*/}
        <meta
          content="pSTAKE | Unlocking liquidity of staked assets"
          property="og:title"
        />
        <meta property="og:image" content="/ogimage.jpeg" />
        <meta
          property="og:description"
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets.
           Stakers of PoS tokens can stake their assets while unlocking liquidity in the form of stkASSETs,
           which can then be used across DeFi to earn liquid staking rewards."
        />
        {/*Twitter Tags*/}
        <meta
          content="pSTAKE | Unlocking liquidity of staked assets"
          property="twitter:title"
        />
        <meta
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets.
           Stakers of PoS tokens can stake their assets while unlocking liquidity in the form of stkASSETs,
           which can then be used across DeFi to earn liquid staking rewards."
          property="twitter:description"
        />
        <meta content="/ogimage.jpeg" property="twitter:image" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;

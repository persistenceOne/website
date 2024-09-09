import React from "react";
import Layout from "@/components/layout";
import HeroSection from "@/components/organisms/homepage/hero-section";
import CrossChainSlider from "@/components/organisms/homepage/cross-chain-slider";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <CrossChainSlider />
    </Layout>
  );
};

export default HomePage;

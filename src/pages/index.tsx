import React from "react";
import Layout from "@/components/layout";
import HeroSection from "@/components/organisms/homepage/hero-section";
import CrossChainSlider from "@/components/organisms/homepage/cross-chain-slider";
import Overview from "@/components/organisms/homepage/overview";
import DappsSection from "@/components/organisms/homepage/dapps-section";
import BlogSection from "@/components/organisms/homepage/blog-section";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <CrossChainSlider />
      <Overview />
      <DappsSection />
      <BlogSection />
    </Layout>
  );
};

export default HomePage;

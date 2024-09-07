import React from "react";
import Layout from "@/components/layout";
import HeroSection from "@/components/organisms/homepage/hero-section";
import CrossChainSlider from "@/components/organisms/homepage/cross-chain-slider";
import Overview from "@/components/organisms/homepage/overview";
import BlogSection from "@/components/organisms/homepage/blog-section";
import dynamic from "next/dynamic";
const DappsSection = dynamic(
  () => import("@/components/organisms/homepage/dapps-section")
);

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

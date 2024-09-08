import React from "react";
import Layout from "@/components/layout";
import HeroSection from "@/components/organisms/homepage/hero-section";
import Overview from "@/components/organisms/homepage/overview";
import BlogSection from "@/components/organisms/homepage/blog-section";
import dynamic from "next/dynamic";

const DappsSection = dynamic(
  () => import("@/components/organisms/homepage/dapps-section")
);

const CrossChainSlider = dynamic(
  () => import("@/components/organisms/homepage/cross-chain-slider")
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

import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import HeroSection from "@/components/organisms/homepage/hero-section";
import Overview from "@/components/organisms/homepage/overview";
import BlogSection from "@/components/organisms/homepage/blog-section";

const CrossChainSlider = dynamic(
  () => import("@/components/organisms/homepage/cross-chain-slider")
);

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

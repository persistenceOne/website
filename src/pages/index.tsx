import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";

const HeroSection = dynamic(
  () => import("@/components/organisms/homepage/hero-section"),
  {
    ssr: true
  }
);

const CrossChainSlider = dynamic(
  () => import("@/components/organisms/homepage/cross-chain-slider"),
  {
    ssr: true
  }
);

const Overview = dynamic(
  () => import("@/components/organisms/homepage/overview"),
  {
    ssr: true
  }
);
const DappsSection = dynamic(
  () => import("@/components/organisms/homepage/dapps-section"),
  {
    ssr: true
  }
);

const BlogSection = dynamic(
  () => import("@/components/organisms/homepage/blog-section"),
  {
    ssr: true
  }
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

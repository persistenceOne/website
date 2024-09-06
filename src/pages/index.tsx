import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";

const HeroSection = dynamic(
  () => import("@/components/organisms/homepage/hero-section"),
  {
    ssr: false,
    loading: () => <Spinner />
  }
);

const CrossChainSlider = dynamic(
  () => import("@/components/organisms/homepage/cross-chain-slider"),
  {
    ssr: false,
    loading: () => <Spinner />
  }
);

const Overview = dynamic(
  () => import("@/components/organisms/homepage/overview"),
  {
    ssr: false,
    loading: () => <Spinner />
  }
);
const DappsSection = dynamic(
  () => import("@/components/organisms/homepage/dapps-section"),
  {
    ssr: false,
    loading: () => <Spinner />
  }
);

const BlogSection = dynamic(
  () => import("@/components/organisms/homepage/blog-section"),
  {
    ssr: false,
    loading: () => <Spinner />
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

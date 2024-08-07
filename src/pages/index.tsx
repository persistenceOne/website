import BlogSection from "@/components/organisms/homepage/blog-section";
import DappsSection from "@/components/organisms/homepage/dapps-section";
import HeroSection from "@/components/organisms/homepage/hero-section";
import Overview from "@/components/organisms/homepage/overview";
import { Box, Spacer } from "@chakra-ui/react";
import React from "react";
import CrossChainSlider from "@/components/organisms/homepage/cross-chain-slider";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <CrossChainSlider />
      <Overview />
      <DappsSection />
      <BlogSection />
    </Box>
  );
};

export default HomePage;

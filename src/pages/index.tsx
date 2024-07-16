import BecomePersisterSection from "@/components/organisms/homepage/become-persister-section";
import BlogSection from "@/components/organisms/homepage/blog-section";
import DappsSection from "@/components/organisms/homepage/dapps-section";
import GetXprtSection from "@/components/organisms/homepage/get-xprt-section";
import HeroSection from "@/components/organisms/homepage/hero-section";
import Overview from "@/components/organisms/homepage/overview";
import { Box, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import CrossChainSlider from "@/components/organisms/homepage/cross-chain-slider";
import FunFactSlider from "@/components/organisms/homepage/fun-fact-slider";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <CrossChainSlider/>
      <Spacer h={20} />
      <Overview />
      <Spacer h={20} />
      <DappsSection />
      <FunFactSlider/>
      <GetXprtSection />
      <BlogSection />
      <BecomePersisterSection showEcosystemSection={false} />
    </Box>
  );
};

export default HomePage;

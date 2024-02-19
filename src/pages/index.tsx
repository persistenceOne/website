import BecomePersisterSection from "@/components/organisms/homepage/become-persister-section";
import BlogSection from "@/components/organisms/homepage/blog-section";
import DappsSection from "@/components/organisms/homepage/dapps-section";
import GetXprtSection from "@/components/organisms/homepage/get-xprt-section";
import HeroSection from "@/components/organisms/homepage/hero-section";
import Overview from "@/components/organisms/homepage/overview";
import { Box, Spacer, VStack } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Box>
      <Spacer h={20} />
      <HeroSection />
      <Spacer h={20} />
      <Overview />
      <Spacer h={20} />
      <DappsSection />
      <GetXprtSection />
      <Spacer h={20} />
      <BlogSection />
      <BecomePersisterSection />
    </Box>
  );
};

export default HomePage;

import BlogSection from "@/components/organisms/homepage/blog-section";
import Overview from "@/components/organisms/homepage/overview";
import HeroSection from "@/components/organisms/xprt/hero-section";
import XPRTInDefiSection from "@/components/organisms/xprt/xprt-in-defi-section";
import XPRTUsageSection from "@/components/organisms/xprt/xprt-usage-section";
import { Box, Spacer } from "@chakra-ui/react";
import React from "react";

const XPRTPage = () => {
  return (
    <Box>
      <HeroSection />
      <Spacer h={20} />
      <XPRTUsageSection />
      <Spacer h={20} />
      <XPRTInDefiSection />
      <Spacer h={20} />
      <BlogSection />
      <Spacer h={20} />
    </Box>
  );
};

export default XPRTPage;

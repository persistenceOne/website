import BlogSection from "@/components/organisms/xprt/blog-section";
import HeroSection from "@/components/organisms/xprt/hero-section";
import XPRTInDefiSection from "@/components/organisms/xprt/xprt-in-defi-section";
import XPRTUsageSection from "@/components/organisms/xprt/xprt-usage-section";
import { Box, Spacer } from "@chakra-ui/react";
import React from "react";

const XPRTPage = () => {
  return (
    <Box>
      <HeroSection />
      <XPRTUsageSection />
      <Spacer h={20} />
      <XPRTInDefiSection />
      <BlogSection />
    </Box>
  );
};

export default XPRTPage;

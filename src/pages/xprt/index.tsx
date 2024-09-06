import HeroSection from "@/components/organisms/xprt/hero-section";
import XPRTInDefiSection from "@/components/organisms/xprt/xprt-in-defi-section";
import XPRTUsageSection from "@/components/organisms/xprt/xprt-usage-section";
import { Box, Spacer } from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/layout";

const XPRTPage = () => {
  return (
    <Layout>
      <HeroSection />
      <XPRTUsageSection />
      <Spacer h={20} />
      <XPRTInDefiSection />
    </Layout>
  );
};

export default XPRTPage;

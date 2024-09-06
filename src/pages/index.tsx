import { Box, Text } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";

const HeroSection = dynamic(
  () => import("@/components/organisms/homepage/hero-section")
);

// const CrossChainSlider = dynamic(
//   () => import("@/components/organisms/homepage/cross-chain-slider")
// );
//
// const Overview = dynamic(
//   () => import("@/components/organisms/homepage/overview")
// );
// const DappsSection = dynamic(
//   () => import("@/components/organisms/homepage/dapps-section")
// );
//
// const BlogSection = dynamic(
//   () => import("@/components/organisms/homepage/blog-section")
// );

const HomePage = () => {
  return (
    <Layout>
      <Box>
        <HeroSection />
        {/*<CrossChainSlider />*/}
        {/*<Overview />*/}
        {/*<DappsSection />*/}
        {/*<BlogSection />*/}
      </Box>
    </Layout>
  );
};

export default HomePage;

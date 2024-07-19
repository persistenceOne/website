import React from "react";
import HeroSection from "@/components/organisms/vision/hero-section";
import QuoteSection from "@/components/organisms/vision/quote-section";
import { Box } from "@chakra-ui/react";
import VisionSection from "@/components/organisms/vision/vision-section";
import CommunitySection from "@/components/organisms/vision/community-section";
import HistorySection from "@/components/organisms/vision/history-section";
import Belief from "@/components/organisms/vision/belief";

const StoryPage = () => {
  return (
    <Box>
      <HeroSection />
      {/*<QuoteSection />*/}
      <VisionSection />
      <Belief />
      <CommunitySection />
    </Box>
  );
};

export default StoryPage;

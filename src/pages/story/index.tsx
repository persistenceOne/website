import React from "react";
import HeroSection from "@/components/organisms/story/hero-section";
import QuoteSection from "@/components/organisms/story/quote-section";
import { Box } from "@chakra-ui/react";
import VisionSection from "@/components/organisms/story/vision-section";
import CommunitySection from "@/components/organisms/story/community-section";
import HistorySection from "@/components/organisms/story/history-section";

const StoryPage = () => {
  return (
    <Box>
      <HeroSection />
      <QuoteSection />
      <VisionSection />
      <CommunitySection />
      <HistorySection />
    </Box>
  );
};

export default StoryPage;

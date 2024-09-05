import React from "react";
import HeroSection from "@/components/organisms/vision/hero-section";
import { Box } from "@chakra-ui/react";
import VisionSection from "@/components/organisms/vision/vision-section";
import CommunitySection from "@/components/organisms/vision/community-section";
import Belief from "@/components/organisms/vision/belief";

const StoryPage = () => {
  return (
    <Box>
      <HeroSection />
      <VisionSection />
      <Belief />
      <CommunitySection />
    </Box>
  );
};

export default StoryPage;

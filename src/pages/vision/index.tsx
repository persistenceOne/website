import React from "react";
import HeroSection from "@/components/organisms/vision/hero-section";
import VisionSection from "@/components/organisms/vision/vision-section";
import CommunitySection from "@/components/organisms/vision/community-section";
import Belief from "@/components/organisms/vision/belief";
import Layout from "@/components/layout";

const StoryPage = () => {
  return (
    <Layout>
      <HeroSection />
      <VisionSection />
      <CommunitySection />
      <Belief />
    </Layout>
  );
};

export default StoryPage;

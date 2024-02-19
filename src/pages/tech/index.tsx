import React from "react";
import HeroSection from "@/components/organisms/tech/hero-section";
import { Box } from "@chakra-ui/react";
import NotesSection from "@/components/organisms/tech/tech-notes";
import UpgradeSection from "@/components/organisms/tech/upgrade-section";
import EconomySection from "@/components/organisms/tech/economy-section";

const TechPage = () => {
  return (
    <Box>
      <HeroSection />
      <NotesSection />
      <UpgradeSection />
      <EconomySection />
    </Box>
  );
};

export default TechPage;

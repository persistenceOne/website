import React from "react";
import HeroSection from "@/components/organisms/tech/hero-section";
import { Box } from "@chakra-ui/react";
import NotesSection from "@/components/organisms/tech/tech-notes";

const TechPage = () => {
  return (
    <Box>
      <HeroSection />
      <NotesSection />
    </Box>
  );
};

export default TechPage;

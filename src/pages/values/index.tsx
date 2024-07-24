import BecomePersisterSection from "@/components/organisms/homepage/become-persister-section";
import HeroSection from "@/components/organisms/values/hero-section";
import PersisterSection from "@/components/organisms/values/persister-section";
import TeamSection from "@/components/organisms/values/team-section";
import { Box, Spacer } from "@chakra-ui/react";
import React from "react";

const PeoplePage = () => {
  return (
    <>
      <HeroSection />
      <PersisterSection />
      <Spacer h={20} />
      <TeamSection />
      <Spacer h={20} />
      <BecomePersisterSection showEcosystemSection={false} />
    </>
  );
};

export default PeoplePage;

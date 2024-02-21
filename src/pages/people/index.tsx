import BecomePersisterSection from "@/components/organisms/homepage/become-persister-section";
import HeroSection from "@/components/organisms/people/hero-section";
import PersisterSection from "@/components/organisms/people/persister-section";
import TeamSection from "@/components/organisms/people/team-section";
import { Box, Spacer } from "@chakra-ui/react";
import React from "react";

const PeoplePage = () => {
  return (
    <>
      <HeroSection />
      <Spacer h={20} />
      <PersisterSection />
      <Spacer h={20} />
      <TeamSection />
      <Spacer h={20} />
      <BecomePersisterSection showEcosystemSection={false} />
      <Spacer h={20} />
    </>
  );
};

export default PeoplePage;

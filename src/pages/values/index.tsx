import BecomePersisterSection from "@/components/organisms/homepage/become-persister-section";
import HeroSection from "@/components/organisms/values/hero-section";
import PersisterSection from "@/components/organisms/values/persister-section";
import TeamSection from "@/components/organisms/values/team-section";
import { Spacer } from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/layout";

const PeoplePage = () => {
  return (
    <Layout>
      <HeroSection />
      <PersisterSection />
      <Spacer h={20} />
      <TeamSection />
      <Spacer h={20} />
      <BecomePersisterSection showEcosystemSection={false} />
    </Layout>
  );
};

export default PeoplePage;

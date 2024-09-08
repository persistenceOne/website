import FeatureCards from "@/components/molecules/feature-cards";
import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

const Overview = () => {
  const { t } = useTranslation();
  return (
    <Box bg={"#FCF7F1"} pos="relative">
      <Container
        maxW={"1300px"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "40px", md: "100px" }}
        pt={{ base: "30px", md: "50px" }}
      >
        <Box>
          <Heading
            mb={"20px"}
            textAlign={"center"}
            color={"#633C0D"}
            fontSize={{ base: "26px", xl: "48px" }}
            lineHeight={{ base: "32px", xl: "72px" }}
          >
            {t("HOME_SECTION3_TITLE")}
          </Heading>
          <FeatureCards />
        </Box>
      </Container>
    </Box>
  );
};

export default Overview;

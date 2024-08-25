import PersisterValuesCard, {
  PersisterValuesCardInterface
} from "@/components/atoms/persister-values-card";
import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

const Belief = () => {
  const { t } = useTranslation();
  const persisterValues: PersisterValuesCardInterface[] = [
    {
      title: t("VISION_SECTION3_CARD1_TITLE"),
      description: t("VISION_SECTION3_CARD1_CONTENT"),
      icon: "/icons/team-page/long-term.svg"
    },
    {
      title: t("VISION_SECTION3_CARD2_TITLE"),
      description: t("VISION_SECTION3_CARD2_CONTENT"),
      icon: "/icons/team-page/compounding.svg"
    },
    {
      title: t("VISION_SECTION3_CARD3_TITLE"),
      description: t("VISION_SECTION3_CARD3_CONTENT"),
      icon: "/icons/team-page/true-to-roots.svg"
    }
  ];
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "40px", md: "100px" }}
      pb={"80px"}
      className="aos-init aos-animate py-10"
      data-aos="fade-up"
    >
      <Heading
        variant={"main"}
        fontSize={{ base: "26px", xl: "48px" }}
        lineHeight={{ base: "32px", xl: "72px" }}
        mb={{ base: "40px", md: "100px" }}
        color="#633C0D"
        textAlign={"center"}
      >
        {t("VISION_SECTION3_TITLE")}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} rowGap={20}>
        {persisterValues.map((value) => (
          <PersisterValuesCard key={value.title} {...value} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Belief;

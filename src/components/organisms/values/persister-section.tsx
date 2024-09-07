import PersisterValuesCard, {
  PersisterValuesCardInterface
} from "@/components/atoms/persister-values-card";
import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

const PersisterSection = () => {
  const { t } = useTranslation();
  const persisterValues: PersisterValuesCardInterface[] = [
    {
      title: t("VALUES_SECTION2_CARD1_TITLE"),
      description: t("VALUES_SECTION2_CARD1_CONTENT"),
      icon: "/icons/team-page/long-term.svg"
    },
    {
      title: t("VALUES_SECTION2_CARD2_TITLE"),
      description: t("VALUES_SECTION2_CARD2_CONTENT"),
      icon: "/icons/team-page/compounding.svg"
    },
    {
      title: t("VALUES_SECTION2_CARD3_TITLE"),
      description: t("VALUES_SECTION2_CARD3_CONTENT"),
      icon: "/icons/team-page/true-to-roots.svg"
    },
    {
      title: t("VALUES_SECTION2_CARD4_TITLE"),
      description: t("VALUES_SECTION2_CARD4_CONTENT"),
      icon: "/icons/team-page/results.svg"
    },
    {
      title: t("VALUES_SECTION2_CARD5_TITLE"),
      description: t("VALUES_SECTION2_CARD5_CONTENT"),
      icon: "/icons/team-page/team.svg"
    },
    {
      title: t("VALUES_SECTION2_CARD6_TITLE"),
      description: t("VALUES_SECTION2_CARD6_CONTENT"),
      icon: "/icons/team-page/health.svg"
    }
  ];

  return (
    <>
      <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }}>
        <Box
          py={{ base: "32px", md: "60px" }}
          className="aos-init aos-animate py-10"
          data-aos="fade-up"
        >
          <Heading
            textAlign={"center"}
            color={"#633C0D"}
            fontSize={{ base: "26px", xl: "48px" }}
            lineHeight={{ base: "32px", xl: "72px" }}
            mb={{ base: "40px", md: "100px" }}
          >
            {t("VALUES_SECTION2_TITLE")}
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={4}
            rowGap={20}
          >
            {persisterValues.map((value) => (
              <PersisterValuesCard key={value.title} {...value} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default PersisterSection;

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

const persisterValues: PersisterValuesCardInterface[] = [
  {
    title: "Long Term",
    description: "Playing long-term games with long-term people.",
    icon: "/icons/team-page/long-term.svg"
  },
  {
    title: "Compounding",
    description:
      "Whether it's yield, partnerships or efforts, We compound daily.",
    icon: "/icons/team-page/compounding.svg"
  },
  {
    title: "True to Roots",
    description:
      "Staying humble when things are great, persistent when things are bad",
    icon: "/icons/team-page/true-to-roots.svg"
  },
  {
    title: "Impactful Results",
    description:
      "Prioritizing outcomes that move the needle and drive meaningful progress.",
    icon: "/icons/team-page/results.svg"
  },
  {
    title: "Team",
    description: "Win or Lose Together. Improve Together",
    icon: "/icons/team-page/team.svg"
  },
  {
    title: "Fulfiling Life",
    description: "Mental, physical, and emotional health always come first.",
    icon: "/icons/team-page/health.svg"
  }
];

const PersisterSection = () => {
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
            What makes a Persister?
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

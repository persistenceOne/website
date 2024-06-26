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
      "Whether it's yield, partnerships or efforts, we compound daily.",
    icon: "/icons/team-page/compounding.svg"
  },
  {
    title: "True to Roots",
    description:
      "Staying humble when things are great, persistent when things are bad.",
    icon: "/icons/team-page/true-to-roots.svg"
  },
  {
    title: "Results",
    description: "Getting sh*t done.",
    icon: "/icons/team-page/results.svg"
  },
  {
    title: "Team",
    description: "Win or Lose Together. Improve Together.",
    icon: "/icons/team-page/team.svg"
  },
  {
    title: "Fulfiling Life",
    description: "Mental, physical and emotional health always come first.",
    icon: "/icons/team-page/health.svg"
  }
];

const PersisterSection = () => {
  return (
    <>
      <VStack align={"center"} pt={12} pb={36} px={4} bg={"#252424"}>
        <Heading
          variant={"main"}
          fontSize={{ base: "26px", md: "58px" }}
          color="#ECECEC"
        >
          What makes a Persister?
        </Heading>
        <Text
          color="#ECECEC"
          fontSize={{ base: "14px", md: "22px" }}
          textAlign={"center"}
        >
          Persistence is more than just a name. It is our way of being.{" "}
        </Text>
      </VStack>
      <Container maxW={"1440px"} mt={-16} px={{ base: 6, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} rowGap={20}>
          {persisterValues.map((value) => (
            <PersisterValuesCard key={value.title} {...value} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default PersisterSection;

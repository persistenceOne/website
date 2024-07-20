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
    title: "Freedom",
    description: "We believe in the freedom that Bitcoin represents.",
    icon: "/icons/team-page/long-term.svg"
  },
  {
    title: "Opportunity",
    description:
      "We believe in the opportunities Bitcoin brings to modern-day finance.",
    icon: "/icons/team-page/compounding.svg"
  },
  {
    title: "Money",
    description: "We believe that Bitcoin is the hardest form of money",
    icon: "/icons/team-page/true-to-roots.svg"
  }
];

const Belief = () => {
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
        fontSize={{ base: "26px", md: "48px" }}
        lineHeight={{ base: "32px", md: "72px" }}
        mb={{ base: "20px", md: "100px" }}
        color="#633C0D"
        textAlign={"center"}
      >
        ₿ullish Belief in Bitcoin
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

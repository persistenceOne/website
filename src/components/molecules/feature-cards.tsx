import React from "react";
import FeatureCard from "@/components/atoms/feature-card";
import { HStack } from "@chakra-ui/react";

const FeatureCards = ({ cards }) => {
  return (
    <HStack spacing={4}>
      {cards.map((card, index) => (
        <FeatureCard key={index} {...card} />
      ))}
    </HStack>
  );
};

export default FeatureCards;

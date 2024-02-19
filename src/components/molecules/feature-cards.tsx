import React from "react";
import FeatureCard, {
  FeatureCardInterface
} from "@/components/atoms/feature-card";
import { HStack } from "@chakra-ui/react";

type FeatureCardsProps = {
  cards: FeatureCardInterface[];
};

const FeatureCards = ({ cards }: FeatureCardsProps) => {
  return (
    <HStack spacing={4}>
      {cards.map((card, index) => (
        <FeatureCard key={index} {...card} />
      ))}
    </HStack>
  );
};

export default FeatureCards;

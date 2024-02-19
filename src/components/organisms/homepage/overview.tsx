import { FeatureCardInterface } from "@/components/atoms/feature-card";
import FeatureCards from "@/components/molecules/feature-cards";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const cards: FeatureCardInterface[] = [
  {
    category: "Ecosystem",
    title: "Title",
    description: "Description",
    image: "Image",
    link: "Link",
    linkText: "Link Text"
  },
  {
    category: "Ecosystem",
    title: "Title",
    description: "Description",
    image: "Image",
    link: "Link",
    linkText: "Link Text"
  },
  {
    category: "Technology",
    title: "Title",
    description: "Description",
    image: "Image",
    link: "Link",
    linkText: "Link Text"
  }
];

const Overview = () => {
  return (
    <>
      <Heading>Core Features</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
        consectetur.
      </Text>
      <FeatureCards cards={cards} />
    </>
  );
};

export default Overview;

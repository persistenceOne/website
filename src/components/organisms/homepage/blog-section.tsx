import BlogCard, { BlogCardInterface } from "@/components/atoms/blog-card";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const resourcesList: BlogCardInterface[] = [
  {
    id: 0,
    resourceImage: "/images/resources/resource-1.png",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink: "/"
  },
  {
    id: 1,
    resourceImage: "/images/resources/resource-2.png",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "/"
  },
  {
    id: 2,
    resourceImage: "/images/resources/resource-3.png",
    resourceType: "Podcast",
    resourceCTA: "Listen",
    resourceLink: "/"
  }
];

const BlogSection = () => {
  return (
    <Box px={16}>
      <VStack align={"flex-start"} spacing={2}>
        <Heading color="text.headingSemiBlack">Latest on Persistence</Heading>
        <Text maxW={"45%"}>
          Explore the biggest news, blogs, interviews, and governance
          discussions around liquid staking and restaking.
        </Text>
        <Button
          variant={"link"}
          color={"primary.black"}
          rightIcon={<ArrowForwardIcon />}
        >
          Explore All
        </Button>
      </VStack>
      <HStack spacing={8} mt={8}>
        {resourcesList.map((resource, index) => (
          <BlogCard key={resource.id} {...resource} />
        ))}
      </HStack>
    </Box>
  );
};

export default BlogSection;

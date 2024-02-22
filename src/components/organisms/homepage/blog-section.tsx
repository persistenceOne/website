import BlogCard, { BlogCardInterface } from "@/components/atoms/blog-card";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Container
} from "@chakra-ui/react";
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
    <Container maxW={"1340px"} px={{ base: "16px", md: "30px" }} py={"60px"}>
      <Box px={16}>
        <VStack align={"flex-start"} mb={"60px"}>
          <Heading
            color="text.headingSemiBlack"
            fontSize={{ base: "26px", md: "58px" }}
          >
            Latest on Persistence
          </Heading>
          <Text
            maxW={"75%"}
            fontSize={{ base: "16px", md: "22px" }}
            color={"text.blackMid"}
          >
            Explore the biggest news, blogs, interviews, and governance
            discussions around liquid staking and restaking.
          </Text>
          <Button
            variant={"link"}
            color={"primary.black"}
            fontWeight={600}
            fontSize={{ base: "16px", md: "20px" }}
            rightIcon={<ArrowForwardIcon />}
          >
            Explore All
          </Button>
        </VStack>
        <HStack spacing={6}>
          {resourcesList.map((resource, index) => (
            <BlogCard key={resource.id} {...resource} />
          ))}
        </HStack>
      </Box>
    </Container>
  );
};

export default BlogSection;

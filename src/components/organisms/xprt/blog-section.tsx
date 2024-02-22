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
    <Container maxW={"1340px"} px={{ base: "16px", md: "50px" }} py={"60px"}>
      <Box>
        <VStack align={"flex-start"} mb={"40px"}>
          <Heading
            color="text.headingSemiBlack"
            fontSize={{ base: "26px", md: "58px" }}
            lineHeight={"87px"}
          >
            Community Resources
          </Heading>
          <Text
            maxW={"75%"}
            fontSize={{ base: "16px", md: "22px" }}
            color={"text.blackMid"}
            mb={"10px"}
          >
            All you need to know about XPRT.
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

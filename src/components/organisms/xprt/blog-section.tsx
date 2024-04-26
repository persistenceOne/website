import BlogCard, { BlogCardInterface } from "@/components/atoms/blog-card";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Container,
  Stack,
  Flex
} from "@chakra-ui/react";
import React from "react";

const resourcesList: BlogCardInterface[] = [
  {
    id: 0,
    resourceImage: "/images/resources/xprt-0.png",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/01/05/all-you-need-to-know-about-xprt-staking/"
  },
  {
    id: 1,
    resourceImage: "/images/resources/xprt-1.webp",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink: "https://luganodes.com/blog/XPRTSG/"
  },
  {
    id: 2,
    resourceImage: "/images/resources/xprt-2.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=TuP4d368lU8"
  }
];

const BlogSection = () => {
  return (
    <Container maxW={"1340px"} px={{ base: "16px", md: "50px" }} py={"60px"}>
      <Box>
        <VStack align={"center"} mb={"40px"}>
          <Heading
            color="text.headingSemiBlack"
            fontSize={{ base: "26px", md: "58px" }}
            lineHeight={{ base: "26x", md: "87px" }}
          >
            Community Resources
          </Heading>

          {/* <Button
            variant={"link"}
            color={"primary.black"}
            fontWeight={600}
            fontSize={{ base: "16px", md: "20px" }}
            rightIcon={<ArrowForwardIcon />}
          >
            Explore All
          </Button> */}
        </VStack>
        <Flex
          gap={6}
          w={"full"}
          direction={{ base: "column", md: "row" }}
          // justify={""}
        >
          {resourcesList.map((resource, index) => (
            <BlogCard
              key={resource.id}
              {...resource}
              width={{ base: "100%", md: "350px" }}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default BlogSection;

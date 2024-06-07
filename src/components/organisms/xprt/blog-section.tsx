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
    resourceImage: "/images/resources/resource-0.jpeg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/06/04/introducing-xprt-to-the-base-ecosystem-going-multi-chain-and-building-liquidity/"
  },
  {
    id: 1,
    resourceImage: "/images/resources/resource-1.jpeg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/05/22/introducing-wbtc-to-persistence-one-building-wbtc-liquidity-on-dexter/"
  },
  {
    id: 2,
    resourceImage: "/images/resources/resource-2.jpg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/04/16/introducing-stkxprt-the-star-of-persistence-one/"
  }
];

const BlogSection = () => {
  return (
    <Container maxW={"1340px"} px={{ base: "16px", md: "50px" }} py={"60px"}>
      <Box>
        <VStack align={"center"} mb={"40px"}>
          <Heading
            color={"primary.blackHeading"}
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

import BlogCard, { BlogCardInterface } from "@/components/atoms/blog-card";
import Icon from "@/components/molecules/Icon";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Container,
  useMediaQuery,
  Flex
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";

const resourcesList: BlogCardInterface[] = [
  {
    id: 0,
    resourceImage:
      "https://blog.persistence.one/wp-content/uploads/2024/07/Image-2-1160x653.png",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/07/17/bridge-without-bridging-why-btcfi-needs-an-interoperability-solution/"
  },
  {
    id: 1,
    resourceImage:
      "https://blog.persistence.one/wp-content/uploads/2024/07/image2-1-1160x653.jpg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/07/10/bitcoin-l2s-and-their-own-btc-variants/"
  },
  {
    id: 2,
    resourceImage:
      "https://blog.persistence.one/wp-content/uploads/2024/07/image4-1160x653.jpg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/07/05/a-letter-to-persisters-the-new-journey-ahead/"
  }
];

const BlogSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isLandScape] = useMediaQuery("(max-width: 990px)");
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <Box bg={"#FCF7F1"}>
      <Container
        maxW={"1440px"}
        px={{ base: "16px", md: "100px" }}
        py={"60px"}
        className="aos-init aos-animate py-10"
        data-aos="fade-up"
      >
        <Box>
          <HStack alignItems={"center"} mb={"40px"} justifyContent={"center"}>
            <Heading color="#350B00" fontSize={{ base: "20px", xl: "44px" }}>
              Latest on Persistence One
            </Heading>
            {/*<Link href={"/"}>*/}
            {/*  <Text color={"#FFFFFF"}>Explore More</Text>*/}
            {/*</Link>*/}
          </HStack>
          <Box display="flex">
            {resourcesList.map((resource, index) => (
              <BlogCard key={resource.id} {...resource} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;

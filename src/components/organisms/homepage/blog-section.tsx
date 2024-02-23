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
  },
  {
    id: 3,
    resourceImage: "/images/resources/resource-3.png",
    resourceType: "Podcast",
    resourceCTA: "Listen",
    resourceLink: "/"
  },
  {
    id: 4,
    resourceImage: "/images/resources/resource-3.png",
    resourceType: "Podcast",
    resourceCTA: "Listen",
    resourceLink: "/"
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
    <Container maxW={"1200px"} px={{ base: "16px", md: "30px" }} py={"60px"}>
      <Box>
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
        <Slider
          {...{
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: isMobile ? 1 : 3,
            slidesToScroll: 1
          }}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {resourcesList.map((resource, index) => (
            <BlogCard key={resource.id} {...resource} />
          ))}
        </Slider>
      </Box>
      <Flex mt={6} className={"upgrade-slider-arrow"} px={"25px"}>
        <Flex
          align={"center"}
          justify={"center"}
          cursor={"pointer"}
          w={"24px"}
          h={"24px"}
          bg={"#423f40d9"}
          borderRadius={"100%"}
          onClick={previous}
          mr={5}
        >
          <Box w={"12px"} h={"12px"} onClick={previous}>
            <Icon icon="left_chevron" />
          </Box>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          w={"24px"}
          h={"24px"}
          cursor={"pointer"}
          onClick={next}
          borderRadius={"100%"}
          bg={"#423f40d9"}
        >
          <Box w={"12px"} h={"12px"} onClick={previous}>
            <Icon icon="right_chevron" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default BlogSection;

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
    resourceImage: "/images/resources/resource-0.webp",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/02/07/persistence-one-to-bring-restaking-to-cosmos/"
  },
  {
    id: 1,
    resourceImage: "/images/resources/resource-1.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=iokAN0FsiDM"
  },
  {
    id: 2,
    resourceImage: "/images/resources/resource-2.png",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/01/05/all-you-need-to-know-about-xprt-staking/"
  },
  {
    id: 3,
    resourceImage: "/images/resources/resource-3.jpeg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/02/13/persistence-one-launches-dydx-liquid-staking/"
  },
  {
    id: 4,
    resourceImage: "/images/resources/resource-4.jpeg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/02/20/cosmos-restaking-on-persistence-one/"
  },
  {
    id: 5,
    resourceImage: "/images/resources/resource-5.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=zLVLwlM7PHQ"
  },
  {
    id: 6,
    resourceImage: "/images/resources/resource-6.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=PouqTQ0dXdM&t=1s"
  },
  {
    id: 7,
    resourceImage: "/images/resources/resource-7.jpeg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2023/12/12/persistence-cosmos-app-chain-for-liquid-staking-defi/"
  },
  {
    id: 8,
    resourceImage: "/images/resources/resource-8.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=9BPBLeZ4g-c&t=2580s"
  },
  {
    id: 9,
    resourceImage: "/images/resources/resource-9.png",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/01/16/persistence-one-integrates-with-kava-for-1-click-usdt-transfers/"
  },
  {
    id: 10,
    resourceImage: "/images/resources/resource-10.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=_g_TJSNjRW0"
  },
  {
    id: 11,
    resourceImage: "/images/resources/resource-11.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=M2XJRPLc--g&t=599s"
  },
  {
    id: 12,
    resourceImage: "/images/resources/resource-12.jpeg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/02/16/persistence-one-x-kujira/"
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
    <Container maxW={"1440px"} px={{ base: "16px", md: "100px" }} py={"60px"}>
      <Box>
        <VStack align={"flex-start"} mb={"60px"}>
          <Heading
            color="text.headingSemiBlack"
            fontSize={{ base: "26px", md: "58px" }}
          >
            Latest on Persistence One
          </Heading>
          <Text
            maxW={"75%"}
            fontSize={{ base: "16px", md: "22px" }}
            color={"text.blackMid"}
          >
            Explore the biggest news, blogs, interviews, and discussions around
            Liquid Staking and Restaking.
          </Text>
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

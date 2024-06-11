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
  },
  {
    id: 3,
    resourceImage: "/images/resources/resource-5.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://youtu.be/TZAoCA79UpE?si=8DEkx1ePsSeqpyrI"
  },
  {
    id: 4,
    resourceImage: "/images/resources/resource-3.jpeg",
    resourceType: "Blog",
    resourceCTA: "Read",
    resourceLink:
      "https://blog.persistence.one/2024/05/25/how-to-bridge-wbtc-to-persistence-core-1-and-deposit-liquidity-on-dexter/"
  },
  {
    id: 5,
    resourceImage: "/images/resources/resource-3.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://youtu.be/fcvhZme2iik?si=AGYuAXKLhBw6eTpr"
  },
  {
    id: 6,
    resourceImage: "/images/resources/resource-6.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://youtu.be/nGofnPQQNoM?si=Rjs2CyzcS4SxHjFO"
  },
  {
    id: 7,
    resourceImage: "/images/resources/resource-7-xprt-base.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=zkoGFkiTpek"
  },
  {
    id: 8,
    resourceImage: "/images/resources/resource-8-aerodrome.jpeg",
    resourceType: "Video",
    resourceCTA: "Watch",
    resourceLink: "https://www.youtube.com/watch?v=Rx5RxljGRbk"
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
        <VStack align={"center"} mb={"60px"}>
          <Heading
            color="text.headingSemiBlack"
            fontSize={{ base: "26px", md: "58px" }}
          >
            Latest on Persistence One
          </Heading>
          <Text
            // maxW={"75%"}
            fontSize={{ base: "16px", md: "22px" }}
            color={"text.blackMid"}
          >
            Explore the biggest news, blogs, interviews, and discussions around
            Liquid Staking.
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
            infinite: true,
            slidesToShow: isMobile ? 1 : 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 4000
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

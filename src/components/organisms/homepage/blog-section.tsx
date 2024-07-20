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
      </Container>
    </Box>
  );
};

export default BlogSection;

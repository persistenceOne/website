import BlogCard, { BlogCardInterface } from "@/components/atoms/blog-card";
import {
  Box,
  HStack,
  Heading,
  Container,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const resourcesList: BlogCardInterface[] = [
  {
    id: 0,
    resourceImage: "/images/home-page/blog/blog1.webp",
    resourceType: "Blog",
    resourceCTA: "READ",
    resourceLink:
      "https://blog.persistence.one/2024/08/14/introducing-our-updated-logo-fresh-look-bitcoin-alignment-communitys-choice/"
  },
  {
    id: 1,
    resourceImage: "/images/home-page/blog/blog2.webp",
    resourceType: "Blog",
    resourceCTA: "READ",
    resourceLink:
      "https://blog.persistence.one/2024/08/12/major-problems-for-btcfi-and-how-interoperability-can-solve-it/"
  },
  {
    id: 2,
    resourceImage: "/images/home-page/blog/blog3.webp",
    resourceType: "Blog",
    resourceCTA: "READ",
    resourceLink:
      "https://blog.persistence.one/2024/07/31/bitcoin-l2s-vs-side-chains-same-same-or-different/"
  }
];

const BlogSection = () => {
  const { t } = useTranslation();
  const [isTablet] = useMediaQuery("(min-width: 768px)");
  return (
    <Box bg={"#FCF7F1"}>
      <Container maxW={"1440px"} px={{ base: "16px", md: "100px" }} py={"60px"}>
        <Box>
          <HStack alignItems={"center"} mb={"40px"} justifyContent={"center"}>
            <Heading color="#350B00" fontSize={{ base: "20px", xl: "44px" }}>
              {t("LATEST_ON_PERSISTENCE")}
            </Heading>
          </HStack>
          {isTablet ? (
            <Box
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
              flexWrap={"wrap"}
              gap={"16px"}
            >
              {resourcesList.map((resource, index) => (
                <BlogCard key={resource.id} {...resource} />
              ))}
            </Box>
          ) : (
            <Carousel
              ssr
              deviceType={"mobile"}
              partialVisbile={false}
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1280 },
                  items: 3,
                  partialVisibilityGutter: 10
                },
                tablet: {
                  breakpoint: { max: 1280, min: 768 },
                  items: 2,
                  partialVisibilityGutter: 10
                },
                mobile: {
                  breakpoint: { max: 768, min: 0 },
                  items: 1,
                  partialVisibilityGutter: 10
                }
              }}
              autoPlay={true}
              autoPlaySpeed={2000}
              infinite={true}
              arrows={false}
            >
              {resourcesList.map((resource, index) => (
                <BlogCard key={resource.id} {...resource} />
              ))}
            </Carousel>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;

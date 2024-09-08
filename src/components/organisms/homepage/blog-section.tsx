import BlogCard, { BlogCardInterface } from "@/components/atoms/blog-card";
import { Box, HStack, Heading, Container } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

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
  return (
    <Box bg={"#FCF7F1"}>
      <Container maxW={"1440px"} px={{ base: "16px", md: "100px" }} py={"60px"}>
        <Box>
          <HStack alignItems={"center"} mb={"40px"} justifyContent={"center"}>
            <Heading color="#350B00" fontSize={{ base: "20px", xl: "44px" }}>
              {t("LATEST_ON_PERSISTENCE")}
            </Heading>
          </HStack>
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
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;

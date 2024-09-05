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
import { useTranslation } from "next-export-i18n";

const resourcesList: BlogCardInterface[] = [
  {
    id: 0,
    resourceImage:
      "https://blog.persistence.one/wp-content/uploads/2024/08/image1-1-1160x653.jpg",
    resourceType: "Blog",
    resourceCTA: "READ",
    resourceLink:
      "https://blog.persistence.one/2024/08/14/introducing-our-updated-logo-fresh-look-bitcoin-alignment-communitys-choice/"
  },
  {
    id: 1,
    resourceImage:
      "https://blog.persistence.one/wp-content/uploads/2024/07/Major-Problems-for-BTCfi-42-42-min-1160x652.jpg",
    resourceType: "Blog",
    resourceCTA: "READ",
    resourceLink:
      "https://blog.persistence.one/2024/08/12/major-problems-for-btcfi-and-how-interoperability-can-solve-it/"
  },
  {
    id: 2,
    resourceImage:
      "https://blog.persistence.one/wp-content/uploads/2024/07/btc-L2s-VS-side-chain-33-32-31-min-1160x652.jpg",
    resourceType: "Blog",
    resourceCTA: "READ",
    resourceLink:
      "https://blog.persistence.one/2024/07/31/bitcoin-l2s-vs-side-chains-same-same-or-different/"
  }
];

const BlogSection = () => {
  const { t } = useTranslation();
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

import { Box, Heading, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import TallyForm from "@/components/molecules/tally-form";
import { useTranslation } from "next-export-i18n";

const CommunitySection = () => {
  const { t } = useTranslation();
  return (
    <Box bg={"#E59636"} backgroundPosition="bottom right" mb={"60px"}>
      <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }} py={"30px"}>
        <Flex
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={1}>
            <Heading
              fontSize={{ base: "22px", xl: "32px" }}
              textAlign={{ base: "center", md: "left" }}
              lineHeight={{ base: "1.5", xl: "48px" }}
              color={"text.headingSemiWhite"}
              pr={"12px"}
              mb={"42px"}
              fontWeight={700}
            >
              {t("VISION_SECTION4_TITLE")}
            </Heading>
            <Box textAlign={{ base: "center", md: "left" }}>
              <TallyForm page={"vision"} />
            </Box>
          </Box>
          <Image
            src={"/images/vision/team-work.svg"}
            alt={"team-work"}
            width={401}
            height={249}
            // objectFit="cover"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default CommunitySection;

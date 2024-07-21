import { Box, Button, Heading, Container, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import { TELEGRAM_PERSISTENCE_COMMUNITY_LINK } from "@/utils/config";
import Image from "next/image";
import TallyForm from "@/components/molecules/tally-form";

const CommunitySection = () => {
  return (
    <Box bg={"#E59636"} backgroundPosition="bottom right">
      <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }} py={"30px"}>
        <Flex
          alignItems={"center"}
          className="aos-init aos-animate py-10"
          data-aos="fade-up"
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
              We&apos;re excited to find partners who share our vision for a
              vibrant Bitcoin ecosystem.
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

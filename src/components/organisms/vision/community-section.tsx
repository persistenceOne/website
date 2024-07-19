import { Box, Button, Heading, Container, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import { TELEGRAM_PERSISTENCE_COMMUNITY_LINK } from "@/utils/config";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <Box bg={"#E59636"} backgroundPosition="bottom right">
      <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }} py={"30px"}>
        <Flex alignItems={"center"}>
          <Box flex={1}>
            <Heading
              fontSize={{ base: "22px", md: "32px" }}
              textAlign={{ base: "center", md: "left" }}
              color={"text.headingSemiWhite"}
              pr={"12px"}
              mb={"42px"}
              fontWeight={700}
              lineHeight={{ base: "1.5", md: "48px" }}
            >
              We&apos;re excited to find partners who share our vision for a
              vibrant Bitcoin ecosystem.
            </Heading>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Link
                href={TELEGRAM_PERSISTENCE_COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color={"#FFFFFF"}
                  w={"246px"}
                  h={"52px"}
                  variant={"secondary"}
                  bg="#1D1306"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Connect With Us
                </Button>
              </Link>
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

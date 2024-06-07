import { Box, Button, Heading, Container } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import { TELEGRAM_PERSISTENCE_COMMUNITY_LINK } from "@/utils/config";

const CommunitySection = () => {
  return (
    <Box
      bg={"#252424"}
      style={{
        backgroundImage: "url('/images/story-page/story-community-bg.svg')",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "15%"
      }}
      backgroundPosition="bottom right"
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }} py={"60px"}>
        <Heading
          fontSize={{ base: "22px", md: "32px" }}
          textAlign={{ base: "center", md: "left" }}
          color={"text.headingSemiWhite"}
          pr={"12px"}
          mb={"40px"}
          fontWeight={700}
          lineHeight={{ base: "1.5", md: "48px" }}
        >
          Persistence One brings empowering tech, a vibrant community and
          enduring partnerships
        </Heading>
        <Box textAlign={{ base: "center", md: "left" }}>
          <Link
            href={TELEGRAM_PERSISTENCE_COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
              Join our Community
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunitySection;

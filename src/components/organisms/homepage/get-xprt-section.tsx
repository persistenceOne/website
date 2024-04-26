import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Container,
  Heading,
  Text,
  Link
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GetXprtSection = () => {
  return (
    <Box bg="#252424">
      <Container maxW={"1440px"} px={{ base: "16px", md: "100px" }} py={"65px"}>
        <HStack bg="#" justify={"space-between"}>
          <Box w={"700px"}>
            <Heading
              color="text.headingWhite"
              fontSize={{ base: "26px", md: "48px" }}
              lineHeight={{ base: "38px", md: "72px" }}
              mb={4}
            >
              Fueling the <br /> Persistence One Ecosystem
            </Heading>
            <Text
              color="text.whiteHigh"
              fontSize={{ base: "16px", md: "18px" }}
              mb={{ base: "30px", md: "50px" }}
            >
              XPRT empowers on-chain activities like chain security,
              decentralized governance, Liquid Staking and Restaking
              incentivization, and transaction fees on Persistence One.
            </Text>
            <HStack gap={4}>
              <Link
                href={"https://wallet.keplr.app/chains/persistence"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
                  Stake XPRT
                </Button>
              </Link>
              <Link
                href={"https://www.coingecko.com/en/coins/persistence"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color={"#ffffff"}
                  _hover={{ borderColor: "#C73238CC", bg: "#C732381A" }}
                >
                  Get XPRT
                </Button>
              </Link>
            </HStack>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src={"/images/home-page/fuelling-ecosystem.svg"}
              alt="Persistence"
              width={450}
              height={450}
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default GetXprtSection;

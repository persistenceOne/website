import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Container,
  Heading,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GetXprtSection = () => {
  return (
    <Box bg="#000000">
      <Container maxW={"1200px"} px={{ base: "16px", md: "30px" }} py={"65px"}>
        <HStack bg="#000000" justify={"space-between"}>
          <Box w={"650px"}>
            <Heading
              color="text.headingWhite"
              fontSize={{ base: "26px", md: "48px" }}
              lineHeight={"72px"}
              mb={4}
            >
              Fuelling the <br /> Persistence Ecosystem
            </Heading>
            <Text
              color="text.whiteHigh"
              fontSize={{ base: "16px", md: "18px" }}
              mb={"50px"}
            >
              XPRT empowers a range of on-chain activities including staking for
              rewards to enhance chain security, decentralized governance for
              upgrades, and liquid staking and restaking traction through
              incentivization and transaction fees on Persistence One.
            </Text>
            <HStack gap={4}>
              <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
                Stake XPRT
              </Button>
              <Button color={"#ffffff"}>Get XPRT</Button>
            </HStack>
          </Box>
          <Image
            src={"/images/fuelling-ecosystem-image.svg"}
            alt="Persistence"
            width={450}
            height={450}
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default GetXprtSection;

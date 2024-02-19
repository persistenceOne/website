import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GetXprtSection = () => {
  return (
    <HStack bg="#000000" justify={"center"} gap={4}>
      <Box w={"645px"} maxW={"45%"}>
        <Heading color="text.headingWhite">
          Fuelling the <br /> Persistence Ecosystem
        </Heading>
        <Text color="text.headingWhite" mt={4} mb={8}>
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
  );
};

export default GetXprtSection;

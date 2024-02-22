import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Card, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NetworkPanel = () => {
  return (
    <Box as="section" maxW={"85%"}>
      <Text mb={"30px"} mt={"24px"} color={"text.blackHigh"} fontSize={"20px"}>
        Contribute to the Persistence One network infrastructure by running a
        validator,
        <br /> relayer, or helping the devs do something.
      </Text>
      <Card borderRadius={"20px"} mt={8}>
        <Flex justify={"space-between"}>
          <VStack align={"flex-start"} p={8} justify={"space-between"}>
            <Box>
              <Text fontSize={12} textAlign={"left"}>
                Support Network
              </Text>
              <Text fontWeight={700} fontSize={27} textAlign={"left"} mt={2}>
                Contribute to the Persistence One network infrastructure by
                running a validator, relayer, or helping the devs do something.
              </Text>
            </Box>
            <Box justifySelf={"flex-end"}>
              <Link href={"/"}>
                <Button
                  variant={"primary"}
                  color={"text.headingBlack"}
                  fontSize={16}
                  textColor={"#423F40"}
                  px={8}
                >
                  Reach Out
                </Button>
              </Link>
            </Box>
          </VStack>
          <Image
            src={"images/network-section-image.svg"}
            alt={"Network Panel"}
            width={436}
            height={357}
          />
        </Flex>
      </Card>
    </Box>
  );
};

export default NetworkPanel;

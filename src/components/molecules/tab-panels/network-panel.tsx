import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Card, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NetworkPanel = () => {
  return (
    <Box as="section" maxW={{ base: "100%", md: "85%" }}>
      <Text
        mb={"30px"}
        mt={"24px"}
        color={"text.blackHigh"}
        fontSize={{ base: "16px", md: "20px" }}
      >
        Contribute to the Persistence One network infrastructure by running a
        validator,
        <br /> relayer, or helping the devs do something.
      </Text>
      <Card borderRadius={"20px"} mt={8}>
        <Box
          display={{ base: "block", md: "flex" }}
          justifyContent={"space-between"}
        >
          <VStack align={"flex-start"} p={8} justify={"space-between"}>
            <Box>
              <Text fontSize={"12px"} textAlign={"left"}>
                Support Network
              </Text>
              <Text
                fontWeight={700}
                fontSize={{ base: "22px", md: "32px" }}
                textAlign={"left"}
                mt={2}
              >
                Help the Persistence One network remain secure and persistent.
              </Text>
            </Box>
            <Box justifySelf={"flex-end"}>
              <Link
                href={"https://discord.com/invite/vyvp3scWnH"}
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <Flex w={"full"} justify={"center"} py={8}>
            <Image
              src={"images/home-page/network.png"}
              alt={"Network Panel"}
              width={373}
              height={311}
            />
          </Flex>
        </Box>
      </Card>
    </Box>
  );
};

export default NetworkPanel;

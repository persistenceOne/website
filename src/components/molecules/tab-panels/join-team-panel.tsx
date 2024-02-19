import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const openPositionsList = [
  {
    id: 0,
    jobRole: "Marketing Associate",
    jobLocation: "Remote",
    link: "/"
  },
  {
    id: 1,
    jobRole: "Software Engineer",
    jobLocation: "Remote",
    link: "/"
  },
  {
    id: 2,
    jobRole: "Marketing Associate",
    jobLocation: "Remote",
    link: "/"
  },
  {
    id: 3,
    jobRole: "Software Engineer",
    jobLocation: "Remote",
    link: "/"
  },
  {
    id: 4,
    jobRole: "Marketing Associate",
    jobLocation: "Remote",
    link: "/"
  },
  {
    id: 5,
    jobRole: "Software Engineer",
    jobLocation: "Remote",
    link: "/"
  }
];

const JoinTeamPanel = () => {
  return (
    <Box as="section">
      <Text my={4}>
        Explore opportunities to contribute to Persistence One’s mission of
        maximizing liquid staking yield with Persistence Labs.
      </Text>
      <Flex gap={4}>
        <Card borderRadius={"20px"}>
          <VStack align={"flex-start"} p={8} pr={16}>
            <Text fontSize={12}>Mission</Text>
            <Text fontWeight={700} fontSize={42}>
              Humility
            </Text>
            <Text fontWeight={700} fontSize={42}>
              Integrity
            </Text>
            <Text fontWeight={700} fontSize={42}>
              Patience
            </Text>
            <Text fontWeight={700} fontSize={42}>
              Persistence
            </Text>
            <Link href={"/"}>
              <Button
                variant={"link"}
                rightIcon={<ArrowForwardIcon />}
                color={"text.headingBlack"}
                fontSize={14}
              >
                Learn more about working with us
              </Button>
            </Link>
          </VStack>
        </Card>
        <Card borderRadius={20}>
          <HStack justify={"space-between"} px={6} pt={4}>
            <VStack align={"flex-start"} gap={0}>
              <Text fontWeight={600} fontSize={20} color="#3D3D3D">
                Open Positions
              </Text>
              <Text fontSize={14} color={"#3D3D3D"} opacity={0.7}>
                Ready to join? Reach out to us!
              </Text>
            </VStack>
            <Link href={"/"}>
              <Button
                variant={"primary"}
                color={"text.headingBlack"}
                fontSize={14}
                px={12}
              >
                View All
              </Button>
            </Link>
          </HStack>
          <SimpleGrid columns={2} gap={4} p={4} px={6} mt={4}>
            {openPositionsList.map((position) => (
              <Link href={position.link} key={position.id}>
                <HStack
                  align={"center"}
                  justify={"space-between"}
                  bg="#F5F5F5"
                  py={4}
                  px={6}
                  borderRadius={20}
                >
                  <VStack align={"flex-start"} gap={0}>
                    <Text fontWeight={600} fontSize={16} color={"#3D3D3D"}>
                      {position.jobRole}
                    </Text>
                    <Text fontSize={14} color={"#3D3D3D"} opacity={0.7}>
                      {position.jobLocation}
                    </Text>
                  </VStack>

                  <Button
                    variant={"link"}
                    rightIcon={<ArrowForwardIcon />}
                    color={"text.headingBlack"}
                    fontSize={14}
                  />
                </HStack>
              </Link>
            ))}
          </SimpleGrid>
        </Card>
      </Flex>
    </Box>
  );
};

export default JoinTeamPanel;

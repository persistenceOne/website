import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Stack
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const openPositionsList = [
  {
    id: 0,
    jobRole: "Video Editor",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/f2S3LPfQ_734/video-editor-remote"
  },
  {
    id: 1,
    jobRole: "Marketing Associate",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/W6OH4p6zAMPm/marketing-associate-remote"
  },
  {
    id: 2,
    jobRole: "Social Media Specialist",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/14_H7W1gmRcg/social-media-specialist-remote"
  },
  {
    id: 3,
    jobRole: "Frontend Engineer",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/gHvya2A-f2oa/front-end-engineer-remote"
  },
  {
    id: 4,
    jobRole: "Golang Engineer",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/YJ7cvfyUm4eW/golang-engineer-remote"
  },
  {
    id: 5,
    jobRole: "Senior Rust Engineer",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/Um1WiGrfyzOk/senior-rust-engineer-remote"
  }
];

const JoinTeamPanel = () => {
  return (
    <Box as="section" maxW={"1100px"}>
      <Text
        mb={"30px"}
        mt={"24px"}
        color={"text.blackHigh"}
        fontSize={{ base: "16px", md: "20px" }}
      >
        Explore opportunities to contribute to Persistence One’s mission of
        maximizing
        <br /> liquid staking yield with Persistence Labs.
      </Text>
      <Box gap={4} display={{ base: "block", md: "flex" }}>
        <Card borderRadius={"20px"} p={8} mb={{ base: "10px", md: "0" }}>
          <VStack align={"flex-start"}>
            <Text fontSize={12}>Mission</Text>
            <Text
              fontWeight={700}
              fontSize={{ base: "20px", md: "42px" }}
              color={"text.blackHigh"}
            >
              Humility
            </Text>
            <Text
              fontWeight={700}
              fontSize={{ base: "20px", md: "42px" }}
              color={"text.blackHigh"}
            >
              Integrity
            </Text>
            <Text
              fontWeight={700}
              fontSize={{ base: "20px", md: "42px" }}
              color={"text.blackHigh"}
            >
              Patience
            </Text>
            <Text
              fontWeight={700}
              fontSize={{ base: "20px", md: "42px" }}
              color={"text.blackHigh"}
            >
              Persistence
            </Text>
            <Link href={"/people"}>
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
        <Card borderRadius={20} flex={1} p={8}>
          <Stack
            justify={"space-between"}
            pb={{ base: "16px", md: "30px" }}
            direction={{ base: "column", md: "row" }}
          >
            <VStack align={"flex-start"} gap={0} mb={{ base: "10px", md: "0" }}>
              <Text fontWeight={600} fontSize={20} color="#3D3D3D">
                Open Positions
              </Text>
              <Text fontSize={14} color={"#3D3D3D"} opacity={0.7}>
                Ready to join? Reach out to us!
              </Text>
            </VStack>
            <Link
              href={"https://careers.persistence.one/jobs"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"primary"}
                color={"text.headingBlack"}
                fontSize={14}
                w={{ base: "100%", md: "auto" }}
                px={12}
              >
                View All
              </Button>
            </Link>
          </Stack>
          <SimpleGrid
            columns={2}
            gap={4}
            display={{ base: "none", md: "grid" }}
          >
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
                    <Text fontWeight={600} fontSize={14} color={"#3D3D3D"}>
                      {position.jobRole}
                    </Text>
                    <Text fontSize={12} color={"#3D3D3D"} opacity={0.7}>
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
      </Box>
    </Box>
  );
};

export default JoinTeamPanel;

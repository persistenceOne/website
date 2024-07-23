import CommunityPanel from "@/components/molecules/tab-panels/community-panel";
import JoinTeamPanel from "@/components/molecules/tab-panels/join-team-panel";
import NetworkPanel from "@/components/molecules/tab-panels/network-panel";
import { MINTSCAN_ECOSYSTEM_LINK } from "@/utils/config";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Container
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const BecomePersisterSection = ({
  showEcosystemSection = true
}: {
  showEcosystemSection?: boolean;
}) => {
  return (
    <>
      <Container
        id={"becomePersister"}
        maxW={"1300px"}
        px={{ base: "16px", md: "30px" }}
        py={"60px"}
        className="aos-init aos-animate py-10"
        data-aos="fade-up"
      >
        <Box>
          <Heading
            textAlign={"center"}
            color={"#633C0D"}
            fontSize={{ base: "26px", xl: "48px" }}
            lineHeight={{ base: "32px", xl: "72px" }}
            mb={"8px"}
          >
            Become a Persister
          </Heading>
          <Tabs
            align="center"
            maxW={"980px"}
            mx={"auto"}
            colorScheme="black"
            size="md"
            pb={8}
          >
            <TabList border={"none"}>
              <Tab
                px={{ base: "16px", md: 8 }}
                py={{ base: "14px", md: "18px" }}
                fontSize={{ base: "14px", md: "24px" }}
                color={"#633C0DCC"}
                fontWeight={500}
                borderBottom={"2px solid #0000001A"}
                _selected={{
                  color: "#633C0D",
                  fontWeight: "600",
                  borderColor: "#E59636",
                  borderBottomWidth: "5px",
                  pb: "15px"
                }}
              >
                Community
              </Tab>
              <Tab
                px={{ base: "16px", md: 8 }}
                py={{ base: "14px", md: "18px" }}
                fontSize={{ base: "14px", md: "24px" }}
                color={"#633C0DCC"}
                fontWeight={500}
                borderBottom={"2px solid #0000001A"}
                _selected={{
                  color: "#633C0D",
                  fontWeight: "600",
                  borderColor: "#E59636",
                  borderBottomWidth: "5px",
                  pb: "15px"
                }}
              >
                Join the Team
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel h={{ base: "auto", md: "500px" }}>
                <CommunityPanel />
              </TabPanel>
              <TabPanel h={{ base: "auto", md: "500px" }}>
                <JoinTeamPanel />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>

      {showEcosystemSection ? (
        <Box bg={"#FEFEFE"}>
          <Container
            maxW={"1300px"}
            px={{ base: "16px", md: "30px" }}
            py={"50px"}
          >
            <VStack align={"center"} px={{ base: "26px", md: "34px" }}>
              <Text
                fontWeight={600}
                fontSize={{ base: "22px", md: "34px" }}
                textAlign={"center"}
                mb={"26px"}
              >
                Persistence One is expanding Liquid Staking and creating LSTfi
                yield opportunities
              </Text>
              <Link
                href={MINTSCAN_ECOSYSTEM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
                  Explore Ecosystem
                </Button>
              </Link>
            </VStack>
          </Container>
        </Box>
      ) : null}
    </>
  );
};

export default BecomePersisterSection;

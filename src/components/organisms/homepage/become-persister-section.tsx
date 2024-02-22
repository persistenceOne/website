import CommunityPanel from "@/components/molecules/tab-panels/community-panel";
import JoinTeamPanel from "@/components/molecules/tab-panels/join-team-panel";
import NetworkPanel from "@/components/molecules/tab-panels/network-panel";
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
      <Container maxW={"1300px"} px={{ base: "16px", md: "30px" }} py={"60px"}>
        <Box>
          <Heading
            color="text.headingSemiBlack"
            fontSize={{ base: "26px", md: "58px" }}
            mb={"8px"}
            textAlign={"center"}
          >
            Become A Persister
          </Heading>
          <Tabs align="center" colorScheme="black" size="md" pb={8}>
            <TabList border={"none"}>
              <Tab
                px={8}
                py={"18px"}
                fontSize={"20px"}
                color={"text.blackFull"}
                fontWeight={500}
                borderBottom={"2px solid rgb(226, 232, 240)"}
                _selected={{
                  borderColor: "primary.red",
                  borderBottomWidth: "5px",
                  pb: "15px"
                }}
              >
                Community
              </Tab>
              <Tab
                px={8}
                py={"18px"}
                fontSize={"20px"}
                color={"text.blackFull"}
                fontWeight={500}
                borderBottom={"2px solid rgb(226, 232, 240)"}
                _selected={{
                  borderColor: "primary.red",
                  borderBottomWidth: "5px",
                  pb: "15px"
                }}
              >
                Join the Team
              </Tab>
              <Tab
                px={8}
                py={"18px"}
                fontSize={"20px"}
                color={"text.blackFull"}
                fontWeight={500}
                borderBottom={"2px solid rgb(226, 232, 240)"}
                _selected={{
                  borderColor: "primary.red",
                  borderBottomWidth: "5px",
                  pb: "15px"
                }}
              >
                Network
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CommunityPanel />
              </TabPanel>
              <TabPanel>
                <JoinTeamPanel />
              </TabPanel>
              <TabPanel>
                <NetworkPanel />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      {showEcosystemSection ? (
        <VStack align={"center"} px={24} py={10} gap={8} bg={"#FEFEFE"}>
          <Text fontWeight={600} fontSize={34} textAlign={"center"}>
            Persistence One is expanding liquid staking, creating LSTfi yield
            opportunities, and bringing Restaking to Cosmos.
          </Text>
          <Link href={"/xprt"}>
            <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
              Explore Ecosystem
            </Button>
          </Link>
        </VStack>
      ) : null}
    </>
  );
};

export default BecomePersisterSection;

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
  Text
} from "@chakra-ui/react";
import React from "react";

const BecomePersisterSection = () => {
  return (
    <>
      <Heading>Become A Persister</Heading>
      <Tabs>
        <TabList>
          <Tab>Community</Tab>
          <Tab>Join the Team</Tab>
          <Tab>Network</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>Community Section</Text>
          </TabPanel>
          <TabPanel>
            <Text>Team and Careers Section</Text>
          </TabPanel>
          <TabPanel>
            <Text>Network Section</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <Text>
          Persistence One maximizes liquid staking and restaking yield by
          expanding LSTs, creating LSTfi yield opportunities, and bringing
          Restaking to Cosmos.
        </Text>
        <Button rightIcon={<ArrowForwardIcon />}>Join Us Now</Button>
      </Box>
    </>
  );
};

export default BecomePersisterSection;

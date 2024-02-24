import {
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Container,
  Box,
  Button,
  VStack
} from "@chakra-ui/react";
import React from "react";
import AccordionList from "@/components/organisms/faq/accordion-list";
import Link from "next/link";

const tabList = [
  {
    name: "Introduction",
    faqs: [
      { qtn: "question1", answer: "answer1" },
      { qtn: "question1", answer: "answer1" },
      { qtn: "question1", answer: "answer1" },
      { qtn: "question1", answer: "answer1" },
      { qtn: "question1", answer: "answer1" }
    ]
  },
  {
    name: "XPRT",
    faqs: [{ qtn: "", answer: "" }]
  },
  {
    name: "Liquid Staking",
    faqs: [{ qtn: "question1", answer: "answer1" }]
  },
  {
    name: "Restaking",
    faqs: [{ qtn: "question1", answer: "answer1" }]
  },
  {
    name: "Get Involved",
    faqs: [{ qtn: "question1", answer: "answer1" }]
  },
  {
    name: "Ecosystem",
    faqs: [{ qtn: "question1", answer: "answer1" }]
  },
  {
    name: "Other",
    faqs: [{ qtn: "question1", answer: "answer1" }]
  }
];

const FaqTabs = () => {
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "20px", md: "80px" }}
      pt={"120px"}
      pb={"80px"}
    >
      <Heading fontSize={"36px"} color={"text.blackHigh"}>
        Question? We have answers.
      </Heading>
      <Text pb={"40px"} fontSize={"18px"} color={"#423F40B2"}>
        You can find some answers to commonly asked question below.
      </Text>
      <Tabs position="relative" variant="unstyled" orientation={"vertical"}>
        <TabList borderRight={"1px"} borderColor={"#DBE4EF"} w={"35%"}>
          {tabList.map((item) => (
            <Tab
              key={item.name}
              textAlign={"left"}
              justifyContent={"start"}
              color={"text.blackLow"}
              fontWeight={700}
              pt={"24px"}
              fontSize={"18px"}
              _selected={{ color: "#000", fontWeight: 700, fontSize: "18px" }}
            >
              {item.name}
            </Tab>
          ))}
          <Box p={4} bg="white" borderRadius={8} mr={2} boxShadow={"md"}>
            <VStack align="start" spacing={2}>
              <Text color="#423F40" fontWeight={700} fontSize={16}>
                Got More Questions?
              </Text>
              <Text color="#423F40B2" fontSize={14}>
                Drop us a message on Discord!
              </Text>
              <Link
                href="https://discord.com/invite/vyvp3scWnH"
                target="_blank"
                rel="noopenner noreferrer"
                style={{ width: "100%" }}
              >
                <Button
                  bg="#5A64EC"
                  w="full"
                  border={"none"}
                  color="white"
                  borderRadius={4}
                  mt={2}
                >
                  Go To Discord
                </Button>
              </Link>
            </VStack>
          </Box>
        </TabList>
        <TabPanels>
          {tabList.map((item) => (
            <TabPanel key={item.name}>
              <AccordionList list={item.faqs} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default FaqTabs;

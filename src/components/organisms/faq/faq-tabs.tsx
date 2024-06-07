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
  VStack,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import AccordionList from "@/components/organisms/faq/accordion-list";
import Link from "next/link";
import {
  aboutPersistence,
  aboutXprt,
  liquidStaking
} from "@/components/organisms/faq/faqList";
import { TELEGRAM_PERSISTENCE_COMMUNITY_LINK } from "@/utils/config";

const tabList = [
  {
    name: "About Persistence One",
    faqs: aboutPersistence
  },
  {
    name: "XPRT",
    faqs: aboutXprt
  },
  {
    name: "Liquid Staking",
    faqs: liquidStaking
  }
];

const FaqTabs = () => {
  const [isMobile] = useMediaQuery("(max-width: 468px)");
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "20px", md: "80px" }}
      pt={"120px"}
      pb={"80px"}
    >
      <VStack align="center" w="full">
        <Heading fontSize={"36px"} color={"text.blackHigh"}>
          Question? We have answers.
        </Heading>
        <AccordionList list={aboutPersistence} />
        <Box
          p={{ base: 4, md: 4 }}
          px={{ base: 4, md: 4 }}
          pt={{ base: 4, md: 4 }}
          bg="white"
          borderRadius={8}
          alignSelf={"center"}
          w={["70vw", "40vw"]}
          mr={2}
          boxShadow={"md"}
          mt={"40px"}
        >
          <VStack align="start" spacing={2}>
            <Text
              color="#423F40"
              fontWeight={700}
              fontSize={{ base: 12, md: 16 }}
            >
              Got More Questions?
            </Text>
            <Text color="#423F40B2" fontSize={{ base: "10px", md: "14px" }}>
              Drop us a message on Telegram!
            </Text>
            <Link
              href={TELEGRAM_PERSISTENCE_COMMUNITY_LINK}
              target="_blank"
              rel="noopenner noreferrer"
              style={{ width: "100%" }}
            >
              <Button
                bg="#418FCD"
                w="full"
                border={"none"}
                color="white"
                borderRadius={4}
                mt={2}
                fontSize={{ base: "12px", md: "14px" }}
              >
                {isMobile ? "Telegram" : "Go To Telegram"}
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
      {/* <Text pb={"40px"} fontSize={"18px"} color={"#423F40B2"}>
        You can find some answers to commonly asked question below.
      </Text> */}
      {/* <Tabs position="relative" variant="unstyled" orientation={"vertical"}>
        <TabList borderRight={"1px"} borderColor={"#DBE4EF"} w={"35%"}>
          {tabList.map((item) => (
            <Tab
              key={item.name}
              textAlign={"left"}
              justifyContent={"start"}
              color={"text.blackLow"}
              fontWeight={500}
              pt={"24px"}
              fontSize={"18px"}
              _selected={{ color: "#000", fontWeight: 700, fontSize: "18px" }}
            >
              {item.name}
            </Tab>
          ))}
          <Box
            p={{ base: 2, md: 4 }}
            pt={{ base: 4, md: 4 }}
            bg="white"
            borderRadius={8}
            mr={2}
            boxShadow={"md"}
            mt={"40px"}
          >
            <VStack align="start" spacing={2}>
              <Text
                color="#423F40"
                fontWeight={700}
                fontSize={{ base: 12, md: 16 }}
              >
                Got More Questions?
              </Text>
              <Text color="#423F40B2" fontSize={{ base: "10px", md: "14px" }}>
                Drop us a message on Telegram!
              </Text>
              <Link
                href={TELEGRAM_PERSISTENCE_COMMUNITY_LINK}
                target="_blank"
                rel="noopenner noreferrer"
                style={{ width: "100%" }}
              >
                <Button
                  bg="#418FCD"
                  w="full"
                  border={"none"}
                  color="white"
                  borderRadius={4}
                  mt={2}
                  fontSize={{ base: "12px", md: "14px" }}
                >
                  {isMobile ? "Telegram" : "Go To Telegram"}
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
      </Tabs> */}
    </Container>
  );
};

export default FaqTabs;

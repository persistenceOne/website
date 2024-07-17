import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Popover,
  Text,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  VStack,
  Container,
  Spacer,
  Stack,
  useDisclosure,
  PlacementWithLogical,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel, Button
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Icon from "./Icon";
import {
  fetchChainTVL,
  fetchDexterInfo,
  fetchDexterPoolInfo,
  fetchOsmosisPoolInfo,
  fetchTokenPrices,
  getBnbTVL,
  getCosmosTVL
} from "@/pages/api";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { decimalize, decimalizeRaw } from "@/utils/helpers";
import { MINTSCAN_ECOSYSTEM_LINK } from "@/utils/config";

const menuItems = [
  {
    id: 0,
    name: "Learn",
    subItems: [
      {
        title: "Vision",
        description: "Learn about our persistent vision.",
        icon: "book",
        iconType: "stroke",
        link: "/vision",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "FAQs",
        description: "Frequently Asked Questions",
        icon: "faq",
        iconType: "stroke",
        link: "/faqs",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Blog",
        description:
          "Read about the latest partnerships and major product and tech updates",
        icon: "blog",
        iconType: "stroke",
        link: "https://blog.persistence.one/",
        isExternal: true,
        comingSoon: false
      }
      // {
      //   title: "Roadmap",
      //   description: "",
      //   icon: "road",
      //   iconType: "stroke",
      //   link: "/roadmap",
      //   isExternal: false,
      //   comingSoon: true
      // }
    ]
  },
  {
    id: 1,
    name: "XPRT",
    subItems: [
      {
        title: "XPRT",
        description: "Learn about the native token fueling the ecosystem",
        icon: "xprt-nav",
        iconType: "fill",
        link: "/xprt",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Tech",
        description:
          "Discover how we sit at the cutting-edge of decentralized tech",
        icon: "code",
        iconType: "stroke",
        link: "/tech",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Documentation",
        description: "Explore our developer docs, on-chain modules, and guides",
        icon: "doc1",
        iconType: "stroke",
        link: "https://docs.persistence.one",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Stats",
        description:
          "Interact with on-chain data like TVL, volume, yields, and more",
        icon: "stats1",
        iconType: "stroke",
        link: "https://stats.persistence.one",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Ecosystem",
        description:
          "Explore the dApps, validators, and partners contributing to the ecosystem",
        icon: "ecosystem",
        iconType: "fill",
        link: MINTSCAN_ECOSYSTEM_LINK,
        isExternal: true,
        comingSoon: false
      }
    ]
  },
  {
    id: 2,
    name: "Connect",
    subItems: [
      {
        title: "People",
        description:
          "Get to know our contributors, our values, and how to become a Persister",
        icon: "people",
        iconType: "fill",
        link: "/people",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Careers",
        description:
          "Explore opportunities to contribute to the ecosystem with Persistence Labs",
        icon: "career",
        iconType: "stroke",
        link: "https://careers.persistence.one/",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Community Forum",
        description:
          "Participate in community discussions or share your ideas to grow Persistence One",
        icon: "community",
        iconType: "stroke",
        link: "https://forum.persistence.one/",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Download Media Kit",
        description: "All your media and press needs",
        icon: "download",
        iconType: "stroke",
        link: "https://persistence.notion.site/Persistence-Brand-Press-Kit-85150f1ae50a48cf9edb46577261ed29",
        isExternal: true,
        comingSoon: false
      }
    ]
  }
];

const getMenuListMobile = (onClose: () => void) => {
  return (
    <Accordion h="100vh" mt={8}>
      {menuItems.map((item: any) => (
        <AccordionItem key={item.id} border={"none"}>
          {({ isExpanded }) => (
            <>
              <AccordionButton w="fit-content" _hover={{ bg: "transparent" }}>
                <Text
                  cursor={"pointer"}
                  px={"12px"}
                  py={"8px"}
                  borderRadius={"6px"}
                  bg={isExpanded ? "#C732381A" : "transparent"}
                  color={isExpanded ? "#C73238" : "black"}
                  _hover={{ bg: "#C732381A", color: "#C73238" }}
                >
                  {item.name}
                </Text>
                {/* {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )} */}
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack align={"start"} gap={4}>
                  {item.subItems.map((subItem: any) =>
                    subItem.comingSoon ? (
                      <HStack
                        key={subItem.title}
                        cursor={"not-allowed"}
                        className={"nav-item coming-soon"}
                        gap={4}
                        fontWeight={500}
                        _hover={{ fontWeight: 700 }}
                      >
                        <Box
                          w={"40px"}
                          h={"40px"}
                          borderRadius={"100%"}
                          className={"icon-box"}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <Icon
                            icon={subItem.icon}
                            viewClass={`nav-icon ${subItem.iconType}`}
                          />
                        </Box>
                        <VStack align={"start"} gap={0}>
                          <Text
                            cursor={"pointer"}
                            fontSize={16}
                            color={"#878787"}
                          >
                            {subItem.title}{" "}
                            <Text as={"span"} fontWeight={300} fontSize={12}>
                              (Coming Soon)
                            </Text>
                          </Text>
                          <Text
                            fontSize={14}
                            color={"#3D3D3D"}
                            fontWeight={400}
                          >
                            {subItem.description}
                          </Text>
                        </VStack>
                      </HStack>
                    ) : (
                      <Link
                        href={subItem.link}
                        key={subItem.title}
                        target={subItem.isExternal ? "_blank" : "_self"}
                      >
                        <HStack
                          cursor={"pointer"}
                          className={"nav-item"}
                          gap={4}
                          fontWeight={500}
                          _hover={{ fontWeight: 700 }}
                          onClick={onClose}
                        >
                          <Box>
                            <Box
                              w={"40px"}
                              h={"40px"}
                              borderRadius={"100%"}
                              className={"icon-box"}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                              }}
                            >
                              <Icon
                                icon={subItem.icon}
                                viewClass={`nav-icon ${subItem.iconType}`}
                              />
                            </Box>
                          </Box>
                          <VStack align={"start"} gap={0}>
                            <Box
                              style={{ display: "flex", alignItems: "center" }}
                              color={"primary.red"}
                            >
                              <Text cursor={"pointer"} fontSize={16} pr={"5px"}>
                                {subItem.title}
                              </Text>
                              {subItem.isExternal ? <ExternalLinkIcon /> : null}
                            </Box>
                            <Text
                              fontSize={14}
                              color={"#3D3D3D"}
                              fontWeight={400}
                            >
                              {subItem.description}
                            </Text>
                          </VStack>
                        </HStack>
                      </Link>
                    )
                  )}
                </VStack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
const getMenuList = (
  placement: PlacementWithLogical | undefined,
  trigger: "click" | "hover" | undefined
) => {
  return menuItems.map((item: any) => (
    <Popover placement={placement} trigger={trigger} key={`hover-${item.id}`}>
      <PopoverTrigger>
        <Text
          cursor={"pointer"}
          fontSize={"18px"}
          borderRadius={"6px"}
          color={"#434343"}
        >
          {item.name}
        </Text>
      </PopoverTrigger>
      <PopoverContent borderRadius={6}>
        <PopoverArrow />
        <PopoverBody p={4}>
          <VStack align={"start"} gap={4}>
            {item.subItems.map((subItem: any) =>
              subItem.comingSoon ? (
                <HStack
                  key={subItem.title}
                  cursor={"not-allowed"}
                  className={"nav-item coming-soon"}
                  gap={4}
                  fontWeight={500}
                  _hover={{ fontWeight: 700 }}
                >
                  <Box
                    w={"40px"}
                    h={"40px"}
                    borderRadius={"100%"}
                    className={"icon-box"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icon
                      icon={subItem.icon}
                      viewClass={`nav-icon ${subItem.iconType}`}
                    />
                  </Box>
                  <VStack align={"start"} gap={0}>
                    <Text cursor={"pointer"} fontSize={16} color={"#878787"}>
                      {subItem.title}{" "}
                      <Text as={"span"} fontWeight={300} fontSize={12}>
                        (Coming Soon)
                      </Text>
                    </Text>
                    <Text fontSize={14} color={"#3D3D3D"} fontWeight={400}>
                      {subItem.description}
                    </Text>
                  </VStack>
                </HStack>
              ) : (
                <Link
                  href={subItem.link}
                  key={subItem.title}
                  target={subItem.isExternal ? "_blank" : "_self"}
                >
                  <HStack
                    cursor={"pointer"}
                    className={"nav-item"}
                    gap={4}
                    fontWeight={500}
                    _hover={{ fontWeight: 700 }}
                  >
                    <Box>
                      <Box
                        w={"40px"}
                        h={"40px"}
                        borderRadius={"100%"}
                        className={"icon-box"}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Icon
                          icon={subItem.icon}
                          viewClass={`nav-icon ${subItem.iconType}`}
                        />
                      </Box>
                    </Box>
                    <VStack align={"start"} gap={0}>
                      <Box
                        style={{ display: "flex", alignItems: "center" }}
                        color={"primary.red"}
                      >
                        <Text cursor={"pointer"} fontSize={16} pr={"5px"}>
                          {subItem.title}
                        </Text>
                        {subItem.isExternal ? <ExternalLinkIcon /> : null}
                      </Box>
                      <Text fontSize={14} color={"#3D3D3D"} fontWeight={400}>
                        {subItem.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Link>
              )
            )}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ));
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    let body: any = document.getElementsByTagName("body")[0];
    body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
  }, []);

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let topbar = document.getElementById("is-sticky") as HTMLElement;
    if (top > 50) {
      topbar.classList.add("nav-bar");
    } else {
      topbar.classList.remove("nav-bar");
    }
  };

  const [
    setTokenPrices,
    setPstakeTvl,
    setDexterTVl,
    setDexterTotalVolume,
    setDexterPoolInfo,
    setOsmoPoolInfo,
    setPersistenceTvl,
    pstakInfo,
    dexterInfo
  ] = useAppStore(
    (state) => [
      state.setTokenPrices,
      state.setPstakeTvl,
      state.setDexterTVl,
      state.setDexterTotalVolume,
      state.setDexterPoolInfo,
      state.setOsmoPoolInfo,
      state.setPersistenceTvl,
      state.pstakInfo,
      state.dexterInfo
    ],
    shallow
  );

  useEffect(() => {
    // const fetch = async () => {
    //   const chainTvl = await fetchChainTVL();
    //   setPersistenceTvl(chainTvl);
    // };
    // fetch();
    setPersistenceTvl(dexterInfo.tvl + pstakInfo.tvl);
  }, [dexterInfo.tvl, pstakInfo.tvl, setPersistenceTvl]);

  //fetching pstake info
  useEffect(() => {
    const fetch = async () => {
      const tokenPrices = await fetchTokenPrices();
      const [
        xprtTvlResponse,
        cosmosTvlResponse,
        osmoTvlResponse,
        dydxTvlResponse
      ] = await Promise.all([
        getCosmosTVL("xprt"),
        getCosmosTVL("cosmos"),
        getCosmosTVL("osmo"),
        getCosmosTVL("dydx")
        // getBnbTVL()
      ]);
      const pstkeTvl =
        Number(decimalize(xprtTvlResponse)) * tokenPrices.XPRT +
        Number(decimalize(cosmosTvlResponse)) * tokenPrices.ATOM +
        // bnbTvl * tokenPrices.BNB +
        Number(decimalize(osmoTvlResponse)) * tokenPrices.OSMO +
        Number(decimalizeRaw(dydxTvlResponse, 18)) * tokenPrices.DYDX;
      setPstakeTvl(pstkeTvl);
      setTokenPrices(tokenPrices);
    };
    fetch();
  }, []);

  //fetching dexter info
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchDexterPoolInfo();
      const resp = await fetchDexterInfo();
      const osmoResponse = await fetchOsmosisPoolInfo();
      setDexterTVl(resp.tvl);
      setDexterTotalVolume(resp.volume);
      setDexterPoolInfo(response);
      setOsmoPoolInfo(osmoResponse);
    };
    fetch();
  }, []);

  return (
    <Box
      id={"is-sticky"}
      className={"navbar-container"}
      transition={"all 0.3s"}
      bg={{ base: "#f5f5f5", md: "transparent" }}
    >
      <Container
        maxW={"1320px"}
        px={{ base: "20px", md: "40px" }}
        transition={"all 0.3s"}
        py={"20px"}
        mx={"auto"}
        bg={"#FFFFFF"}
        my={"32px"}
        borderRadius={"1000px"}
      >
        <Flex
          as={"nav"}
          justify={"between"}
          align={"center"}
          display={{ base: "none", md: "flex" }}
          className={"navigation-bar"}
        >
          <Box>
            <Link href="/">
              <Image
                src="/images/persistence-logo-dark.svg"
                alt="Persistence Logo"
                width={251}
                height={32}
              />
            </Link>
          </Box>
          <Spacer />
          <Stack
            gap="32px"
            justify="center"
            align={"center"}
            direction={{ base: "column", md: "row" }}
          >
            {getMenuList("top-start", "hover")}
          </Stack>
          <Spacer />
          <Link
            href="https://app.persistence.one"
            target="_black"
            rel="noopenner noreferrer"
            passHref
            className={"inline-block"}
          >
            <Button
              variant={"secondary"}
              h={"51px"}
              w={"151px"}
            >
              Enter App
            </Button>
          </Link>
        </Flex>
        <Flex
          as={"nav"}
          justify={"space-between"}
          align={"center"}
          className={"navigation-bar"}
          display={{ base: "flex", md: "none" }}
        >
          <Box>
            <Link href="/">
              <Image
                src="/images/persistence-logo-dark.svg"
                alt="Persistence Logo"
                width={180}
                height={32}
              />
            </Link>
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            border={"0px"}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? getMenuListMobile(onClose) : null}
      </Container>
    </Box>
  );
};

export default Header;

import React, { useEffect } from "react";
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
  AccordionPanel,
  Button,
  useMediaQuery
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Icon from "./Icon";
import { fetchTokenPrices } from "@/pages/api";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { useRouter } from "next/router";
import { useTranslation, LinkWithLocale } from "next-export-i18n";
import LangDropdown from "@/components/molecules/lang-dropdown";

const getMenuListMobile = (
  menuItems: any,
  onClose: () => void,
  path: string
) => {
  return (
    <Accordion h="100vh" mt={8}>
      {menuItems.map((item: any) => (
        <AccordionItem key={item.id} border={"none"}>
          {({ isExpanded }) => (
            <>
              <AccordionButton w="fit-content" _hover={{ bg: "transparent" }}>
                <Button
                  variant={"custom"}
                  cursor={"pointer"}
                  px={"12px"}
                  fontWeight={400}
                  py={"8px"}
                  borderRadius={"6px"}
                  bg={isExpanded ? "#E596364D" : "transparent"}
                  color={
                    isExpanded
                      ? "#633C0D"
                      : path === "/"
                      ? "#633C0D"
                      : "#633C0D"
                  }
                  _hover={{ bg: "#E596364D" }}
                >
                  {item.name}
                </Button>
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
                      <LinkWithLocale
                        href={subItem.link}
                        width={"100%"}
                        key={subItem.title}
                        _hover={{
                          textDecoration: "none"
                        }}
                        target={subItem.isExternal ? "_blank" : "_self"}
                      >
                        <HStack
                          cursor={"pointer"}
                          className={"nav-item"}
                          gap={4}
                          fontWeight={500}
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
                              color={"#633C0D"}
                            >
                              <Text cursor={"pointer"} fontSize={16} pr={"5px"}>
                                {subItem.title}
                              </Text>
                              {subItem.isExternal ? (
                                <ExternalLinkIcon />
                              ) : (
                                <Icon
                                  viewClass="chevron"
                                  icon="chevroncolorchange"
                                />
                              )}
                            </Box>
                          </VStack>
                        </HStack>
                      </LinkWithLocale>
                    )
                  )}
                </VStack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
      <LangDropdown type={"mobile"} />
    </Accordion>
  );
};

const getMenuList = (
  menuItems: any,
  placement: PlacementWithLogical | undefined,
  trigger: "click" | "hover" | undefined,
  path: any
) => {
  return menuItems.map((item: any) => (
    <Popover placement={placement} trigger={trigger} key={`hover-${item.id}`}>
      <PopoverTrigger>
        <Button
          variant={"custom"}
          cursor={"pointer"}
          className={"nav-item-title"}
          fontSize={"18px"}
          borderRadius={"6px"}
          fontWeight={500}
          _hover={{ color: "#E59636" }}
          color={path === "/" ? "#FFFFFF" : "#000000"}
        >
          {item.name}
        </Button>
      </PopoverTrigger>
      <PopoverContent borderRadius={6}>
        <PopoverArrow />
        <PopoverBody px={"14px"} py={"16px"}>
          <VStack align={"start"} gap={0}>
            {item.subItems.map((subItem: any) =>
              subItem.comingSoon ? (
                <HStack
                  key={subItem.title}
                  cursor={"not-allowed"}
                  className={"nav-item coming-soon"}
                  gap={4}
                  fontWeight={500}
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
                    <Text cursor={"pointer"} fontSize={16} color={"#633C0D"}>
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
                <LinkWithLocale
                  aria-label={subItem.title}
                  href={subItem.link}
                  key={subItem.title}
                  width={"100%"}
                  textDecoration={"none"}
                  _hover={{
                    textDecoration: "none"
                  }}
                  target={subItem.isExternal ? "_blank" : "_self"}
                >
                  <HStack
                    cursor={"pointer"}
                    className={"nav-item"}
                    p={"10px"}
                    fontWeight={500}
                    _hover={{ bg: "#E596361A", borderRadius: "6px" }}
                  >
                    <Box mr={2}>
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
                        color={"#633C0D"}
                      >
                        <Text cursor={"pointer"} fontSize={16} pr={"5px"}>
                          {subItem.title}
                        </Text>
                        {subItem.isExternal ? (
                          <ExternalLinkIcon />
                        ) : (
                          <Icon viewClass="chevron" icon="chevroncolorchange" />
                        )}
                      </Box>
                      <Text fontSize={14} color={"#3D3D3D"} fontWeight={400}>
                        {subItem.description}
                      </Text>
                    </VStack>
                  </HStack>
                </LinkWithLocale>
              )
            )}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ));
};

const Header = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [isLandscape] = useMediaQuery("(min-width: 768px)");
  const menuItems = [
    {
      id: 0,
      name: t("LEARN"),
      subItems: [
        {
          title: t("VISION"),
          description: t("NAV_BAR_VISION_TEXT"),
          icon: "book",
          iconType: "stroke",
          link: "/vision",
          isExternal: false,
          comingSoon: false
        },
        {
          title: t("FAQS"),
          description: t("NAV_BAR_FAQS_TEXT"),
          icon: "faq",
          iconType: "stroke",
          link: "/faqs",
          isExternal: false,
          comingSoon: false
        },
        {
          title: t("BLOG"),
          description: t("NAV_BAR_BLOG_TEXT"),
          icon: "blog",
          iconType: "stroke",
          link: "https://blog.persistence.one/",
          isExternal: true,
          comingSoon: false
        },
        {
          title: t("DOCS"),
          description: t("NAV_BAR_DOCS_TEXT"),
          icon: "docs",
          iconType: "stroke",
          link: "https://docs.persistence.one",
          isExternal: true,
          comingSoon: false
        }
      ]
    },
    {
      id: 1,
      name: "XPRT",
      subItems: [
        {
          title: t("ABOUT"),
          description: t("NAV_BAR_DOCS_TEXT"),
          icon: "about",
          iconType: "fill",
          link: "/xprt",
          isExternal: false,
          comingSoon: false
        },
        {
          title: t("STAKING"),
          description: t("NAV_BAR_STAKING_TEXT"),
          icon: "staking",
          iconType: "stroke",
          link: "https://wallet.keplr.app/chains/persistence",
          isExternal: true,
          comingSoon: false
        },
        {
          title: t("WALLET"),
          description: t("NAV_BAR_WALLET_TEXT"),
          icon: "wallet",
          iconType: "stroke",
          link: "https://wallet.persistence.one/",
          isExternal: true,
          comingSoon: false
        },
        {
          title: t("GOVERNANCE"),
          description: t("NAV_BAR_GOVERNANCE_TEXT"),
          icon: "persistence",
          iconType: "stroke",
          link: "https://www.mintscan.io/persistence/proposals",
          isExternal: true,
          comingSoon: false
        }
      ]
    },
    {
      id: 2,
      name: t("CONNECT"),
      subItems: [
        {
          title: t("PERSISTERS"),
          description: t("NAV_BAR_PERSISTERS_TEXT"),
          icon: "values",
          iconType: "fill",
          link: "/values",
          isExternal: false,
          comingSoon: false
        },
        {
          title: t("CAREERS"),
          description: t("NAV_BAR_CAREERS_TEXT"),
          icon: "career",
          iconType: "stroke",
          link: "https://careers.persistence.one/",
          isExternal: true,
          comingSoon: false
        },
        {
          title: t("DOWNLOAD_MEDIA_KIT"),
          description: t("NAV_BAR_DOWNLOAD_MEDIA_KIT_TEXT"),
          icon: "download",
          iconType: "stroke",
          link: "https://persistence.notion.site/Persistence-Brand-Press-Kit-85150f1ae50a48cf9edb46577261ed29",
          isExternal: true,
          comingSoon: false
        }
      ]
    },
    {
      id: 3,
      name: t("COMMUNITY"),
      subItems: [
        {
          title: "X (Twitter)",
          description: "",
          icon: "header-twitter",
          iconType: "fill",
          link: "https://twitter.com/PersistenceOne",
          isExternal: true,
          comingSoon: false
        },
        {
          title: "Discord",
          description: "",
          icon: "header-discord",
          iconType: "fill",
          link: "https://discord.persistence.one/",
          isExternal: true,
          comingSoon: false
        },
        {
          title: "Telegram",
          description: "",
          icon: "header-telegram",
          iconType: "fill",
          link: "https://t.me/persistenceone",
          isExternal: true,
          comingSoon: false
        },
        {
          title: "Community Forum",
          description: "",
          icon: "community",
          iconType: "stroke",
          link: "https://forum.persistence.one/",
          isExternal: true,
          comingSoon: false
        }
      ]
    }
  ];

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

  const [setTokenPrices] = useAppStore(
    (state) => [state.setTokenPrices],
    shallow
  );

  //fetching pstake info
  useEffect(() => {
    const fetch = async () => {
      const tokenPrices = await fetchTokenPrices();
      setTokenPrices(tokenPrices);
    };
    fetch();
  }, []);

  return (
    <Box
      id={"is-sticky"}
      className={`navbar-container ${isOpen ? "home" : ""}`}
      transition={"all 0.3s"}
      bg={{
        base: router.pathname === "/" ? "transparent" : "#FCF7F1",
        md: "transparent"
      }}
    >
      <Container
        maxW={"1440px"}
        px={{ base: "24px", md: "80px" }}
        transition={"all 0.3s"}
        py={"20px"}
        mx={"auto"}
        bg={"transparent"}
        className={"navbar-box"}
        my={{ base: "0", md: "32px" }}
        borderRadius={"1000px"}
      >
        {!isLandscape ? (
          <Flex
            as={"nav"}
            justify={"space-between"}
            align={"center"}
            className={"navigation-bar"}
            display={{ base: "flex", md: "none" }}
          >
            <Box>
              <LinkWithLocale href="/" aria-label="Logo">
                {router.pathname !== "/" || isOpen ? (
                  <Box
                    width={"160px"}
                    height={"31px"}
                    backgroundSize={"160px"}
                    className={"logo-box logo-dark cursor-pointer"}
                  ></Box>
                ) : (
                  <Box
                    width={"160px"}
                    backgroundSize={"160px"}
                    height={"31px"}
                    className={"logo-box logo-light"}
                  ></Box>
                )}
              </LinkWithLocale>
            </Box>
            <IconButton
              size={"md"}
              width={"40px"}
              height={"40px"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              justifyContent={"center"}
              alignItems={"center"}
              display={{ base: "flex", md: "none" }}
              border={"0px"}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        ) : (
          <Flex
            as={"nav"}
            justify={"between"}
            align={"center"}
            display={{ base: "none", md: "flex" }}
            className={"navigation-bar"}
          >
            <LinkWithLocale href="/" aria-label={"logo"}>
              {router.pathname !== "/" ? (
                <Box
                  width={"236px"}
                  height={"31px"}
                  backgroundSize={"236px"}
                  className={"logo-box logo-dark cursor-pointer"}
                ></Box>
              ) : (
                <Box
                  width={"236px"}
                  height={"31px"}
                  backgroundSize={"236px"}
                  className={"logo-box logo-light"}
                ></Box>
              )}
            </LinkWithLocale>
            <Spacer />
            <Stack
              gap="32px"
              justify="center"
              align={"center"}
              direction={{ base: "column", md: "row" }}
            >
              {getMenuList(menuItems, "top-start", "hover", router.pathname)}
              <LangDropdown type={""} />
            </Stack>
          </Flex>
        )}
        {isOpen ? getMenuListMobile(menuItems, onClose, router.pathname) : null}
      </Container>
    </Box>
  );
};

export default Header;

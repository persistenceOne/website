import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import {
  Box,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  isTablet: boolean;
  path: string;
}

interface LanguageItemProps {
  imgUrl: string;
  code: string;
  name: string;
}

const langList: LanguageItemProps[] = [
  {
    imgUrl: "/images/lang/en.png",
    code: "en",
    name: "ENGLISH"
  },
  {
    imgUrl: "/images/lang/cn.png",
    code: "cn",
    name: "CHINESE"
  },
  process.env.NEXT_PUBLIC_DEPLOYMENT !== "production" && {
    imgUrl: "/images/lang/kr.png",
    code: "ko",
    name: "한국어"
  }
];

export const learnDropDownContent = (learnList: any[]) => {
  return (
    <div className={"!bg-[#1B1B1B] md:!block drop-shadow-md rounded-md py-2"}>
      {learnList.map((item, index) => (
        <LanguageSwitcher lang={item.code} key={index}>
          <div
            className="px-6 md:px-3 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap group"
          >
            <Image src={item.imgUrl} alt={"dd"} width={24} height={24} />
            <span
              className="ml-4 text-light-high text-base md:text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
            >
              {item.name}
              <span className={"uppercase ml-1"}>({item.code})</span>
            </span>
          </div>
        </LanguageSwitcher>
      ))}
    </div>
  );
};

const LangDropdown = ({ isTablet, path }: Props) => {
  const defaultItem = langList.find((item) => item.code === "en");

  const router = useRouter();
  const params = useSearchParams();
  const search = params.get("lang");
  const { t } = useTranslation();
  const selectedLang = langList.find((item) => item.code === search);

  const activeLang = selectedLang === undefined ? defaultItem : selectedLang;
  console.log(activeLang, search, "activeLang", router.pathname);

  return (
    <Popover placement={"bottom"} trigger={"hover"}>
      <PopoverTrigger>
        <Image
          src={activeLang!.imgUrl}
          alt={"dd"}
          width={22}
          height={16}
          className={"mr-[6px]"}
        />
        <Text
          cursor={"pointer"}
          className={"nav-item-title"}
          fontSize={"18px"}
          borderRadius={"6px"}
          fontWeight={500}
          _hover={{ color: "#E59636" }}
          color={path === "/" ? "#FFFFFF" : "#000000"}
        >
          {activeLang?.code}
        </Text>
        <Icon
          viewClass={` ${
            path === "/"
              ? "fill-[#fff] "
              : "fill-[#181818]  [.is-sticky_&]:fill-[#fff]"
          } dropDownIcon !w-[13px] ml-[6px]  group-hover:fill-[#C73238] rotate-90`}
          icon="chevroncolorchange"
        />
      </PopoverTrigger>
      <PopoverContent borderRadius={6}>
        <PopoverArrow />
        <PopoverBody px={"14px"} py={"16px"}>
          <VStack align={"start"} gap={0}>
            {langList.map((subItem: any) => (
              <LanguageSwitcher key={subItem.title} lang={subItem.code}>
                <Box
                  width={"100%"}
                  textDecoration={"none"}
                  _hover={{
                    textDecoration: "none"
                  }}
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
                </Box>
              </LanguageSwitcher>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default LangDropdown;

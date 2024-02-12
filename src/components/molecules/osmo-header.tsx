import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  PSTAKE_TWITTER_URL,
  STK_ATOM_TWITTER_URL,
  PSTAKE_TELEGRAM_URL,
  SECURITY_AUDIT_URL,
  GUIDES_FAQ_URL,
  DOCS_URL,
  SNANPSHOT_URL,
  PSTAKE_FORUM_URL,
  PSTAKE_BRIDGE_URL,
  BSC_BRIDGE_URL,
  GUIDES_URL,
  STK_FAQ_URL,
  STK_BNB_DOCS_URL,
  DISCORD_URL,
  STK_BNB_SECURITY_AUDIT_URL,
  IMMUNEFI_WEB_URL,
  STK_BNB_TWITTER_URL,
  STK_ATOM_SECURITY_AUDIT_URL,
  STK_ATOM_DOCS_URL,
  STK_ATOM_FAQ_URL,
  STKATOM_BLOG_URL,
  PSTAKE_REDDIT_URL,
  CREW3_URL,
  COSMOS_URL,
  PSTAKE_APP_URL,
  BNB_URL,
  ATOM_URL,
  IMMUNEFI_STK_ATOM_URL,
  ETH_URL,
  STK_ETH_TWITTER,
  STK_ETH_DOCS,
  STK_OSMO_FAQ_URL,
  STK_OSMO_SECURITY_AUDIT_URL,
  OSMOSIS_URL,
  STK_ODMO_TWITTER_URL,
  OSMO_URL,
} from "../../utils/config";
import { useTranslation } from "next-export-i18n";
import Icon from "./Icon";
import Dropdown from "../atoms/dropdown/Dropdown";
import ButtonLink from "../atoms/buttonLink/ButtonLink";
import { useOnClickOutside } from "../../customHooks/useOnClickOutside";
import { useWindowSize } from "../../customHooks/useWindowSize";
import Button from "../atoms/button/Button";
import GeofenceNotice from "./geofence-banner";

const OsmoHeader = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [banner, setBanner] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const { isMobile } = useWindowSize();

  const sideBarRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(sideBarRef, () => {
    setIsOpen(false);
  });

  const closeBanner = () => {
    setBanner(false);
  };

  let auditURL;
  let docsURL;
  let faqURL;
  let twitterUrl;
  let appURL = "https://app.pstake.finance/cosmos";

  auditURL = STK_OSMO_SECURITY_AUDIT_URL;
  docsURL = STK_ATOM_DOCS_URL;
  faqURL = STK_OSMO_FAQ_URL;

  const networks = [
    {
      optionName: "Cosmos",
      optionLink: "/atom",
      imgUrl: "/images/networks/atom.svg",
      symbol: "ATOM",
    },
    {
      optionName: "Osmosis",
      optionLink: "/osmo",
      imgUrl: "/images/networks/osmo.svg",
      symbol: "OSMO",
    },
    {
      optionName: "Dydx",
      optionLink: "/dydx",
      imgUrl: "/images/networks/dydx.svg",
      symbol: "DYDX",
    },
    {
      optionName: "Ethereum",
      optionLink: "/eth/testnet",
      imgUrl: "/images/networks/ethereum.svg",
      symbol: "ETH",
    },
    {
      optionName: "BNB",
      optionLink: "/bnb",
      imgUrl: "/images/networks/bnb.svg",
      symbol: "BNB",
    },
  ];

  const learnList = [
    {
      optionName: t("SECURITY_AUDITS"),
      optionLink: auditURL,
    },
    {
      optionName: t("GUIDES_TUTORIALS"),
      optionLink: GUIDES_URL,
    },
    {
      optionName: t("DOCS"),
      optionLink: docsURL,
    },
    {
      optionName: t("FAQs"),
      optionLink: faqURL,
    },
  ];

  return (
    <React.Fragment>
      <div id="is-sticky" className="top-bar w-full fixed z-[100]">
        <GeofenceNotice />
        <nav
          className={`bg-[#030303] py-6 px-0 flex relative 
            items-center navbar navbar-expand-lg navbar-custom flex-column 
            md:flex-wrap justify-start osmo-validators`}
          id="nav-bar"
        >
          <div className="container  mx-auto px-4 flex flex-wrap items-center justify-between ">
            <Link
              className="bg-logoLight w-[108px] h-[26px] bg-no-repeat bg-center"
              href="/"
            />
            <Button
              className={`bg-red"
              } -md:hidden md:py-2 !py-2.5 md:text-sm`}
              variant={"custom"}
              onClick={toggleMenu}
              id={"toggleButton"}
              scale="lg"
              isDisabled={false}
              customButtonClass={`bg-black-800 text-light-high text-[12px]`}
            >
              <Icon
                viewClass="w-[14px] h-[14px] fill-[#fff]"
                icon="hamberger"
              />
            </Button>
            <div
              className={`${
                isOpen ? "md:transform-none" : "md:-translate-x-full"
              } md:fixed md:top-0 md:left-0 md:z-40 md:w-[200px] md:h-screen md:transition-transform 
               md:basis-auto md:basis-full md:grow menu-open
               `}
              id="navbarCollapse"
            >
              <div
                className={`${
                  isOpen ? "md:fixed" : "md:relative"
                } -md:hidden md:left-0 md:right-0 md:bottom-0
              md:top-0 md:h-full md:w-full md:bg-black-full md:opacity-50`}
              />
              <ul
                className={`flex items-center md:flex-row -md:ml-auto md:flex-col md:bg-white-high 
                md:items-baseline md:fixed md:h-full md:left-0 md:bottom-0 md:p-4`}
                id="mySidenav"
                ref={sideBarRef}
              >
                <li className="nav-item nav__menu-item">
                  <Dropdown
                    className="text-light-high"
                    dropDownVariant="custom"
                    dropDownButtonClass="md:hidden uppercase"
                    dropDownVariantBg="bg-transparent text-[12px]"
                    dropdownLabel={isMobile ? "" : t("Networks")}
                    dropDownIcon={!isMobile}
                    dropdownType={"hover"}
                    dropDownContentClass="!bg-white-high drop-shadow-md
                      round-md py-4 md:visible md:relative md:opacity-100
                      md:!bg-transparent md:p-0 !w-[150px] md:!flex md:!justify-center md:flex-wrap"
                  >
                    {networks.map((item, index) => (
                      <a
                        className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer text-dark-high whitespace-nowrap "
                        href={item.optionLink}
                        key={index}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.optionName}
                          className={
                            "mr-4 md:mr-2 w-[28px] h-[28px] md:w-[20px] md:h-[20px]"
                          }
                        />
                        <div className={"flex flex-col md:hidden"}>
                          <p className="text-dark-emphasis text-sm font-medium leading-normal md:text-xsm">
                            {item.optionName}
                          </p>
                          <span className="text-dark-low text-xsm font-medium leading-normal">
                            {item.symbol}
                          </span>
                        </div>
                      </a>
                    ))}
                  </Dropdown>
                </li>
                <li className="nav-item nav__menu-item">
                  <Dropdown
                    className="text-light-high"
                    dropDownVariant="custom"
                    dropDownButtonClass="md:hidden uppercase"
                    dropDownVariantBg="bg-transparent text-[12px]"
                    dropdownLabel={isMobile ? "" : t("LEARN")}
                    dropDownIcon={!isMobile}
                    dropdownType={"hover"}
                    dropDownContentClass="!bg-white-high drop-shadow-md
                      round-md py-4 md:visible md:relative md:opacity-100
                      md:!bg-transparent md:p-0"
                  >
                    {learnList.map((item, index) => (
                      <a
                        className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer text-dark-high whitespace-nowrap"
                        href={item.optionLink}
                        key={index}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <span
                          className="ml-4 text-dark-emphasis text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
                        >
                          {item.optionName}
                        </span>
                      </a>
                    ))}
                  </Dropdown>
                </li>
                <li className="nav-item nav__menu-item">
                  <a
                    className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap text-[12px]"
                    href={"https://blog.pstake.finance/"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    BLOG
                  </a>
                </li>
                <li className="nav-item md:w-full ml-2.5 md:ml-0 md:mb-2">
                  <ButtonLink
                    className={`dropDownButton bg-[#C73238] w-full md:text-sm !h-[40px]`}
                    variant={"custom"}
                    href={appURL}
                    scale="lg"
                    target={"_blank"}
                    isDisabled={false}
                    customButtonClass={`text-light-high text-[12px]`}
                  >
                    <span className="nav-link pophover tooltip-multiline app-btn uppercase">
                      {t("GO_TO_APP")}
                    </span>
                  </ButtonLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default OsmoHeader;

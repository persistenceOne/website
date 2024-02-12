import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";

import {
  PSTAKE_TWITTER_URL,
  PSTAKE_TELEGRAM_URL,
  PSTAKE_YOUTUBE_URL,
  PERSISTENCE_ONE_URL,
  PSTAKE_MEDIUM_URL,
  STK_BNB_TWITTER_URL,
  STK_ATOM_TWITTER_URL,
  STK_ETH_TWITTER,
  pstake_cosmos_twitter_url,
} from "../../utils/config";

const Footer = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  let twitterUrl;

  if (router.pathname === "/") {
    twitterUrl = PSTAKE_TWITTER_URL;
  } else if (router.pathname === "/bnb") {
    twitterUrl = STK_BNB_TWITTER_URL;
  } else if (router.pathname === "/atom") {
    twitterUrl = STK_ATOM_TWITTER_URL;
  } else if (router.pathname === "/osmo") {
    twitterUrl = pstake_cosmos_twitter_url;
  } else if (router.pathname === "/dydx") {
    twitterUrl = pstake_cosmos_twitter_url;
  } else {
    twitterUrl = STK_ETH_TWITTER;
  }

  const list = [
    {
      name: "Telegram",
      url: PSTAKE_TELEGRAM_URL,
      icon: "telegram-plane",
      text: "Chat with the community",
    },
    {
      name: "X (Formerly Twitter)",
      url: twitterUrl,
      icon: "twitter-logo",
      text: "Stay updated",
    },
    {
      name: "Blogs",
      url: PSTAKE_MEDIUM_URL,
      icon: "medium-m",
      text: "Learn about pSTAKE",
    },
    {
      name: "YouTube",
      url: PSTAKE_YOUTUBE_URL,
      icon: "youtube",
      text: "Subscribe for tutorials",
    },
  ];

  return (
    <>
      {router.pathname !== "/osmo/validators" &&
      router.pathname !== "/dydx/validators" ? (
        <div
          className={`${
            router.pathname === "/osmo"
              ? "bg-[#140F34]"
              : router.pathname === "/dydx"
              ? "bg-[#1C1C28]"
              : "bg-[#1d1d22]"
          }  aos-init aos-animate ${router.pathname}`}
        >
          <div className="sectionContainer py-[100px] md:py-[40px]">
            <h3 className="sectionTitle mb-4">{t("Explore the Community")}</h3>
            <p className="sectionSubTitle max-w-[700px] mx-auto mb-8">
              {router.pathname === "/atom"
                ? "Join the discussion on liquid staking ATOM. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard."
                : "Join the discussion on one of our many fronts. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard."}
            </p>
            <div>
              <div className="max-w-[1000px] flex items-center justify-center mx-auto mb-12">
                <div className="flex items-center justify-center m-auto flex-wrap">
                  {list.map((item, index) => (
                    <div
                      className="item sm:w-auto sm:p-0 -lg:basis-[50%] -lg:max-w-[440px] md:max-w-full w-full px-4"
                      key={index}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        className={`${
                          router.pathname === "/osmo"
                            ? "bg-[#201B43]"
                            : router.pathname === "/dydx"
                            ? "bg-[#232334]"
                            : "bg-[#25252a]"
                        }  flex items-center md:m-2 md:p-4 m-4 p-6 rounded-xl group`}
                        rel="noopener noreferrer"
                      >
                        <div
                          className={`w-[46px] h-[46px] bg-[#3f3f45] flex 
                        items-center justify-center rounded-full mx-2.5  ${
                          router.pathname === "/bnb"
                            ? "bg-[#f0b90b]"
                            : router.pathname === "/atom"
                            ? "bg-[#595d7b]"
                            : router.pathname === "/osmo"
                            ? "bg-[#3f3f45]"
                            : router.pathname === "/dydx"
                            ? "bg-[#393953]"
                            : "bg-[#e50913]"
                        }`}
                        >
                          <Icon
                            viewClass={`social_icon_img w-[22px] fill-[#fff] group-hover:fill-[#fff]`}
                            icon={item.icon}
                          />
                        </div>
                        <div className="sm:hidden">
                          <p className="font-semibold text-base leading-normal text-light-full">
                            {item.name}
                          </p>
                          <p className="font-medium text-sm leading-normal text-[#D1D1D1]">
                            {item.text}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-evenly flex-wrap sm:block sm:text-center">
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-[#70747c] text-[12px] mx-4 sm:mb-4 block"
                >
                  {t("PRIVACY_POLICY")}
                </Link>
                <p className="text-[#70747c] text-[12px] mx-4 sm:mb-4">
                  {new Date().getFullYear()} | Developed by
                  <a
                    href={PERSISTENCE_ONE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Persistence
                  </a>
                </p>
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-[#70747c] text-[12px] mx-4 sm:mb-4 block"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={"bg-[#030303] py-[30px]"}>
          <div className="flex items-center justify-center flex-wrap sm:block sm:text-center">
            <div>
              <div className={`socialLinks flex py-3 px-8 justify-between`}>
                {list.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    rel="noopener noreferrer"
                    className="mx-3"
                    target="_blank"
                  >
                    <Icon
                      viewClass="socialIcon fill-[#787878] !w-[16px] !h-[16px]"
                      icon={item.icon}
                    />
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center flex-wrap sm:block sm:text-center">
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-[#787878] text-[11px] mx-4 sm:mb-4 block"
                >
                  {t("PRIVACY_POLICY")}
                </Link>
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-[#787878] text-[11px] mx-4 sm:mb-4 block"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

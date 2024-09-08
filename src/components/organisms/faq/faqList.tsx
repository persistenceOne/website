export const aboutPersistence = (t: any) => [
  {
    title: t("FAQ1"),
    content: t("FAQ1_ANS")
  },

  {
    title: t("FAQ2_ANS"),
    content: t("FAQ2_ANS")
  },
  {
    title: t("FAQ3"),
    content: t("FAQ3_ANS")
  },
  {
    title: t("FAQ4"),
    content: t("FAQ4_ANS")
  },
  {
    title: t("FAQ5"),
    content: t("FAQ5_ANS")
  },
  {
    title: t("FAQ6"),
    content: t("FAQ6_ANS")
  },
  {
    title: t("FAQ7"),
    content: t("FAQ7_ANS")
  },
  {
    title: t("FAQ8"),
    content: (
      <div>
        XPRT is listed on Centralised Exchanges such as{" "}
        <a
          href={"https://www.huobi.com/en-us/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Huobi</u>
        </a>
        ,&nbsp;
        <a
          href={"https://www.kucoin.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Kucoin</u>
        </a>
        ,&nbsp;
        <a
          href={"https://www.gate.io/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Gate.io </u>
        </a>
        ,&nbsp;
        <a
          href={"https://ascendex.com/en/global-digital-asset-platform"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Ascendex </u>
        </a>
        &nbsp;, etc, and Decentralized Exchanges such as{" "}
        <a
          href={"https://osmosis.zone/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Osmosis </u>
        </a>
        &nbsp;,{" "}
        <a
          href={"https://app.persistence.one/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Persistence DEX </u>
        </a>
        &nbsp;and&nbsp;
        <a
          href={"https://aerodrome.finance/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Aerodrome </u>
        </a>
        . (Please note that this is only for informational purposes; it is in no
        way an endorsement of any particular exchange or financial or investment
        advice.
      </div>
    )
  },
  {
    title: t("FAQ9"),
    content: (
      <>
        You can use{" "}
        <a
          href="https://blog.persistence.one/2024/06/04/how-to-bridge-xprt-to-base-chain-user-guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Squid Router</u>
        </a>{" "}
        or{" "}
        <a
          href="https://blog.persistence.one/2024/06/04/how-to-bridge-xprt-to-base-chain-user-guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Ibc.fun</u>
        </a>{" "}
        to bridge your XPRT to Base or other ecosystems.
      </>
    )
  },
  {
    title: t("FAQ10"),
    content: (
      <>
        XPRT stakers can submit new proposals, vote on proposals, suggest
        parameter changes (like transaction fees or staking requirements),
        govern the launch of new pools or incentives on the Persistence DEX,
        and, in the future, govern the XPRT interoperability solution decisions.
        <br />
        For off-chain discussions, anyone can visit the forum here:{" "}
        <a
          href="https://forum.persistence.one/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>https://forum.persistence.one/</u>{" "}
        </a>
      </>
    )
  }
];

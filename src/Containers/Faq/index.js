import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionToggle
} from "react-bootstrap";
import Icon from "../../components/Icon";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className="accordion-button"
      onClick={decoratedOnClick}
    >
      {children}
      <Icon viewClass="icon" icon={isCurrentEventKey ? "minus" : "plus"} />
    </button>
  );
}

const aboutPersistence = [
  {
    title: "What is Persistence?",
    content:
      "Persistence is an app chain for Liquid Staking powering an ecosystem of " +
      "DeFi applications focused on unlocking the liquidity of staked assets."
  },
  {
    title: "What is the vision of Persistence?",
    content: (
      <>
        Persistence’s vision is to be a one-stop shop for all things liquid
        staking by offering users a seamless Staking and DeFi experience &
        enabling developers to build innovative applications around LSTs.
      </>
    )
  },
  {
    title: "What consensus mechanism does Persistence use?",
    content: "Persistence uses the Tendermint dPOS BFT Consensus Mechanism."
  },
  {
    title: "Is Persistence an IBC-enabled chain?",
    content: "Yes, Persistence is an IBC-enabled chain."
  },
  {
    title: "What is the Persistence Foundation?",
    content: (
      <>
        The{" "}
        <a
          href="https://www.notion.so/learn/persistence-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <u>Persistence Foundation</u>
        </a>{" "}
        is committed to ensuring the welfare of the XPRT holders and Stakers by
        driving utility for the asset.
      </>
    )
  },
  {
    title: "What is the Persistence Lab?",
    content: (
      <div>
        The{" "}
        <a
          href="https://www.notion.so/learn/persistence-labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Persistence Labs</u>
        </a>{" "}
        is committed to building products, apps, and other tools/services on the
        Persistence network by supporting and incubating external teams to
        further the growth of the Persistence liquid staking ecosystem.
        <p>The two main pillars of Persistence Labs are:</p>
        <ul className="links">
          <li>
            <a
              href="https://www.mintscan.io/persistence"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>The Persistence Core-1 Chain-</u>
            </a>{" "}
            The absolute core of the ecosystem, the blockchain powers all
            activity for users and allows developers to build innovative use
            cases to become part of the ecosystem
          </li>
          <li>
            <a
              href="https://www.notion.so/learn/persistence-labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>AUDIT.one-</u>
            </a>{" "}
            The Research and Validator arm of Persistence Labs, securing
            multiple Proof-of-Stake networks, driving innovation and adoption of
            Proof-of-Stake and secure blockchain infrastructure.
          </li>
        </ul>
      </div>
    )
  },
  {
    title:
      "What are the liquid staking products on the Persistence Core-1 chain?",
    content: (
      <div>
        Persistence hosts a suite of DeFi applications focused on LSTs. The
        dApps built on the Persistence Core-1 chain are:
        <ul className="links">
          <li>
            <a
              href="https://pstake.finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <b>
                <u>pSTAKE Finance</u>—
              </b>
            </a>
            a multi-chain liquid staking protocol for issuing LSTs that allows
            users to stake their assets while participating in DeFi.
          </li>
          <li>
            <a
              href="https://www.dexter.zone/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <b>
                <u>Dexter</u>:
              </b>
            </a>
            the Interchain DEX for yield-generating assets like LSTs
          </li>
          <li>
            <a
              href="https://bamboo.zone/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <b>
                <u>Bamboo</u>:
              </b>{" "}
            </a>
            a borrowing/lending protocol and a vault product for LSTs is in the
            works.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "How many validators are active on Persistence Network?",
    content: (
      <>
        The Persistence active set consists of{" "}
        <a
          href="https://www.mintscan.io/persistence"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>100 validators</u>{" "}
        </a>
        producing blocks and securing the network.
      </>
    )
  },
  {
    title: "How decentralized is the Persistence chain? ",
    content: (
      <>
        Persistence is one of the most decentralized chains in Cosmos, with one
        of the highest Nakamoto Coefficient and Network Scores.
      </>
    )
  },
  {
    title: "What is the Persistence Foundation Delegation Program?",
    content: (
      <div>
        The{" "}
        <a
          href={
            "https://docs.persistence.one/build/validators/foundation-delegations"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Persistence Foundation Delegation Program </u>
        </a>{" "}
        is an initiative to improve the overall health and robustness of the
        Persistence network by providing support to contributing validators in
        the form of foundation delegations.
      </div>
    )
  },
  {
    title: "Does the Persistence Core-1 chain support Smart Contracts?",
    content: (
      <>
        Yes, the Persistence Core-1 chain supports CosmWasm, a smart contract
        platform in Cosmos. CosmWasm currently powers DeFi primitives such as
        Dexter & bamboo on Persistence Chain.
      </>
    )
  },
  {
    title: "What is Persistence Bridge?",
    content: (
      <>
        The Persistence Bridge is a tool that facilitates the bidirectional
        transfer of tokens, such as $PSTAKE, between the Ethereum network and
        the Core-1 chain.
      </>
    )
  }
];

const aboutXprt = [
  {
    title: "What is $XPRT?",
    content:
      "$XPRT is the native staking token of the Persistence Core-1 chain."
  },
  {
    title: "What is the role of XPRT in the ecosystem?",
    content: (
      <>
        XPRT powers the Persistence Ecosystem—Core-1 chain security, transaction
        fees, on-chain dApps, IBC hub-routing, and network’s governance.{" "}
      </>
    )
  },
  {
    title: "Where can you acquire $XPRT?",
    content: (
      <div>
        $XPRT is listed on Centralised Exchanges such as{" "}
        <a
          href={"https://www.huobi.com/en-us/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Huobi</u>
        </a>
        <a
          href={"https://www.kucoin.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Kucoin</u>
        </a>
        <a
          href={"https://www.gate.io/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Gate.io </u>
        </a>
        <a
          href={"https://ascendex.com/en/global-digital-asset-platform"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Ascendex </u>
        </a>
        , etc, and Decentralized Exchanges such as Osmosis, Dexter, and Helix.
        (Please note that this is only for informational purposes; it is in no
        way an endorsement of any particular exchange or financial or investment
        advice.
      </div>
    )
  },
  {
    title: "What is the unbonding period for staked $XPRT?",
    content: "21 days"
  },
  {
    title: "How does the community decide the future of the network?",
    content: (
      <>
        The Persistence Network has an on-chain governance mechanism where the
        community votes for passing proposals, voting on software upgrades,
        changing consensus parameters and spending funds from the community pool
        or the ecosystem funds etc. The easiest way to vote currently is via the
        <a
          href={"https://wallet.keplr.app/chains/persistence?tab=governance"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Keplr Dashboard.</u>
        </a>
        The community members can also pitch ideas and share suggestions or
        feedback on the
        <a
          href={"https://forum.persistence.one/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>forum.</u>
        </a>
      </>
    )
  },
  {
    title: "What are the current DeFi opportunities for $XPRT?",
    content: (
      <>
        Currently, $XPRT users can provide liquidity on{" "}
        <a
          href={"https://app.osmosis.zone/pool/15"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u> XPRT/OSMO</u>{" "}
        </a>
        on Osmosis or{" "}
        <a
          href={
            "https://app.dexter.zone/pools/persistence14ph4e660eyqz0j36zlkaey4zgzexm5twkmjlqaequxr2cjm9eprqsnnszg"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>XPRT/ATOM</u>
        </a>{" "}
        pool on Dexter.{" "}
      </>
    )
  },
  {
    title: "Which wallets support $XPRT?",
    content: (
      <>
        <a
          href={"https://wallet.keplr.app/#/core/stake"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Keplr</u>,{" "}
        </a>
        <a
          href={"https://www.cosmostation.io/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Cosmostation</u>,{" "}
        </a>
        <a
          href="https://www.ledger.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Ledger</u>,{" "}
        </a>
        <a
          href="https://www.leapwallet.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Leap</u>,{" "}
        </a>
        <a href="https://coin98.com/" target="_blank" rel="noopener noreferrer">
          <u>Coin98</u>,{" "}
        </a>
        <a
          href="https://app.citadel.one/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>CitadelOne</u>{" "}
        </a>
        and{" "}
        <a
          href="https://www.frontier.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Frontier</u>{" "}
        </a>
        are some wallets supporting $XPRT. <br />
        An integration with Ledger Live is expected to go live in the near
        future.
      </>
    )
  },
  {
    title:
      "Which coin-type address is supported on the Persistence Core-1 chain?",
    content: (
      <>
        Currently, both 118 & 750 coin-type addresses are supported by the
        Persistence Core-1 chain and will work as normal. <br /> However, we
        advise users to migrate to the coin-type 118 wallet address as the
        support for 750 coin-type wallets is proposed to deprecate in December
        2024.
      </>
    )
  }
];

const liquidStaking = [
  {
    title: "What is liquid Staking?",
    content: (
      <>
        Liquid Staking is the process of staking your proof-of-stake (PoS)
        tokens and receiving a liquid token in return, which can be used in DeFi
        for trading, liquidity provisioning, lending, or borrowing.
      </>
    )
  },
  {
    title: "What are the benefits of Liquid Staking?",
    content: (
      <>
        Liquid Staking provides several benefits, including unlocking the
        liquidity of otherwise locked staked assets, maximising its capital
        efficiency, and providing greater flexibility and potentially higher
        returns compared to traditional staking methods. With Liquid Staking,
        users no longer have to choose between staking and DeFi; they can do
        both.
      </>
    )
  }
];

const getInvolve = [
  {
    title: "How to get involved?",
    content: (
      <>
        To get involved, you can reach out to us on any of our social channels -
        Twitter, Telegram, Discord, Forum.
      </>
    )
  },
  {
    title: "Who are the core team members of Persistence?",
    content: (
      <div>
        The Persistence team currently comprises ~30 members. The Core team
        members of Persistence are -
        <ul className="links">
          <li>Tushar Aggarwal: Founder & CEO</li>
          <li>Jeroen Develter: Ecosystem lead</li>
          <li>Mikhil Pandey: pSTAKE lead</li>
          <li>Puneet Mahajan: Tech lead</li>
        </ul>
      </div>
    )
  }
];
const Faq = () => {
  return (
    <>
      <section
        className="xprt-banner-ecosystem ecosystem-faq-section"
        data-aos="fade-up"
      >
        <div className="container">
          <h1 className="section-title">FAQs</h1>
          <div className="row">
            <div className="col-md-10">
              <div className="info">
                <p className="info-heading">About Persistence</p>
                <Accordion>
                  {aboutPersistence.map((item, index) => (
                    <Card key={index}>
                      <Card.Header>
                        <ContextAwareToggle eventKey={index.toString()}>
                          {item.title}
                        </ContextAwareToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body>{item.content}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </div>
              <div className="info">
                <p className="info-heading">About XPRT</p>
                <Accordion>
                  {aboutXprt.map((item, index) => (
                    <Card key={index}>
                      <Card.Header>
                        <ContextAwareToggle eventKey={index.toString()}>
                          {item.title}
                        </ContextAwareToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body>{item.content}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </div>
              <div className="info">
                <p className="info-heading">Liquid Staking</p>
                <Accordion>
                  {liquidStaking.map((item, index) => (
                    <Card key={index}>
                      <Card.Header>
                        <ContextAwareToggle eventKey={index.toString()}>
                          {item.title}
                        </ContextAwareToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body>{item.content}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </div>
              <div className="info">
                <p className="info-heading">Get involved</p>
                <Accordion>
                  {getInvolve.map((item, index) => (
                    <Card key={index}>
                      <Card.Header>
                        <ContextAwareToggle eventKey={index.toString()}>
                          {item.title}
                        </ContextAwareToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body>{item.content}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;

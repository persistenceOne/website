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
      <Icon viewClass="icon" icon={isCurrentEventKey ? "minus" : "plus"} />
    </button>
  );
}

const list = [
  {
    title: "What is Persistence?",
    content:
      "Poised to become a Liquid Staking Hub, Persistence is a Tendermint based" +
      " layer-1 chain with a goal to build an ecosystem of decentralised applications " +
      "focused around liquid-staked assets that together accrue value to XPRT."
  },
  {
    title: "What is the mission of Persistence?",
    content:
      "Persistence is on a mission to become a true liquid staking hub, offering" +
      " users a seamless and capital-efficient staking and DeFi experience by " +
      "enabling developers to build innovative applications around liquid-staked assets."
  },
  {
    title: "What consensus mechanism does Persistence use?",
    content: "Persistence uses Tendermint dPOS BFT Consensus Mechanism."
  },
  {
    title: "Is Persistence an IBC-enabled chain?",
    content: "Yes, Persistence is an IBC-enabled chain."
  },
  {
    title: "How does XPRT accrue value?",
    content:
      "XPRT accrues value from the economic activity within the Persistence ecosystem of applications through multiple channels like transaction fees, fee sharing with ecosystem dApps, IBC hub-routing, etc."
  },
  {
    title: "What is the Persistence Foundation?",
    content: (
      <div>
        The{" "}
        <a
          href="https://www.notion.so/learn/persistence-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Persistence Foundation</u>
        </a>{" "}
        is committed to driving utility for the Persistence ecosystem’s fuel –
        XPRT. The foundation will engage with all stakeholders to ensure
        incentive alignment and direct collective efforts toward the ecosystem
        vision. The ultimate goal for the foundation is the welfare of the XPRT
        holders and Stakers by driving utility for the asset.
      </div>
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
            <b>The Persistence Core-1 Chain-</b> The absolute core of the
            ecosystem, the blockchain powering all activity for users and
            allowing developers to build innovative use cases to become part of
            the ecosystem
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
      "Which products are currently live on the Persistence Core-1 chains?",
    content: (
      <div>
        Persistence is the Liquid Staking Hub for Cosmos. The products built on
        the Persistence Core-1 chain are focused on providing innovative use
        cases for liquid-staked assets.
        <p>
          {" "}
          Currently, there are two products live natively on the Persistence
          chain:
        </p>
        <ul className="links">
          <li>
            <b>pSTAKE for Cosmos: </b> the Liquid staking Protocol allowing
            users to liquid-stake ATOM to earn staking rewards and participate
            in DeFi without locking liquidity.
          </li>
          <li>
            <b>Dexter:</b> the Interchain DEX for yield-generating assets like
            liquid-staked assets. More projects will be announced soon.
          </li>
        </ul>
      </div>
    )
  },
  {
    title:
      "How many validators are in the active set of the Persistence Network?",
    content:
      "The Persistence active set consists of 100 validators validating the blocks and securing the network."
  },
  {
    title: "What do the Persistence Network validators do?",
    content:
      "A set of 100 validators, an absolute critical part to keep the Persistence Ecosystem safe and secure at all times. Besides validation and block production, many of the Persistence Validators are also contributing to governance, infrastructure, tools & analytics for the wider ecosystem."
  },
  {
    title: "How decentralized is the Persistence chain validator set? ",
    content:
      "With a Validator Nakamoto coefficient of 9, Persistence is among Cosmos’s top 3 most decentralized chains in Cosmos."
  },
  {
    title: "What is the Persistence Foundation Grants Program?",
    content: (
      <div>
        The Persistence Foundation Grants program is an assistance program that
        supports selected project teams to develop and scale innovative products
        focused on liquid staking on the Persistence network. More details{" "}
        <a
          href="https://docs.persistence.one/build/grants"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>here</u>
        </a>
      </div>
    )
  },
  {
    title: "What is the Persistence Foundation Delegation Program?",
    content: (
      <div>
        The Persistence Foundation Delegation Program is an initiative to
        improve the overall health and robustness of the Persistence network by
        providing support to contributing validators in the form of foundation
        delegations. More details{" "}
        <a
          href={
            "https://docs.persistence.one/build/validators/foundation-delegations"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>here</u>
        </a>
      </div>
    )
  },
  {
    title: "Does the Persistence Core-1 chain support CosmWasm?",
    content:
      "Yes, the Persistence Core-1 chain has enabled support for CosmWasm, which is a smart contract platform for building decentralized applications on the Cosmos network. In fact, one example of CosmWasm-powered DeFi primitive on Persistence is Dexter DEX, which is currently live and running on the network."
  },
  {
    title: "What is $XPRT?",
    content:
      "$XPRT is the native staking token of the Persistence Core-1 chain."
  },
  {
    title: "What is the role of $XPRT?",
    content:
      "The role of $XPRT is to bootstrap ecosystem applications to propel network adoption, and to secure the core infrastructure through staking. $XPRT stakers can also participate in governance to steer the network and contribute to the ecosystem's long-term success."
  },
  {
    title: "Where does $XPRT drive its utility from?",
    content:
      "$XPRT is valuable because it plays a crucial role in the Persistence ecosystem, which includes modular apps like pSTAKE and dApps like Dexter that use smart contracts to create use cases for staked assets. As more ecosystems utilize these apps, the core-1 chain becomes the hub for the entire ecosystem through its support of IBC."
  },
  {
    title: "Where can users acquire $XPRT from?",
    content: (
      <div>
        Users can acquire $XPRT either on Centralised Exchanges such as Huobi,
        Kucoin, Gate.io, Ascendex etc and Decentralized Exchanges such as
        Osmosis, Dexter, Junoswap,Helix etc.
        <p>
          sers can acquire $XPRT either on Centralised Exchanges such as Huobi,
          Kucoin, Gate.io, Ascendex etc and Decentralized Exchanges such as
          Osmosis, Dexter, Junoswap,Helix etc.{" "}
        </p>
        <p>
          Note that these references are just for informational purposes; they
          don't form an endorsement of the particular exchange or incorporate
          any financial or investment advice.
        </p>
      </div>
    )
  },
  {
    title: "Can $XPRT holders stake their tokens?",
    content:
      "$XPRT token holders will be able to delegate their tokens to one of the networks' validators for staking. Stakers will receive staking rewards in the form of XPRT in return for contributing to the security of the network."
  },
  {
    title: "What is the unbonding period for $XPRT?",
    content:
      "When $XPRT stakers unstake their tokens, there is a 21-day unbonding(waiting) period before the tokens become available for use again."
  },
  {
    title: "How does the community decide the future of the network?",
    content: (
      <div>
        The Persistence Network has an on-chain governance mechanism for passing
        proposals, voting on software upgrades, changing consensus parameters
        and spending funds from the community pool or the ecosystem funds etc.
        The easiest way to vote currently is via the{" "}
        <a
          href={"https://wallet.keplr.app/chains/persistence?tab=governance"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Keplr Dashboard.</u>
        </a>{" "}
        The community can also pitch any ideas or suggestions on the{" "}
        <a
          href="https://forum.persistence.one/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>forum</u>
        </a>
        .
      </div>
    )
  },
  {
    title: "What are the current DeFi opportunities for $XPRT?",
    content:
      "Currently, $XPRT users can provide liquidity on XPRT/OSMO, XPRT/USDC, XPRT/ATOM pools on Osmosis or XPRT/ATOM LP pool on Dexter. "
  },
  {
    title: "Which wallets support $XPRT?",
    content:
      "Keplr, Cosmostation, Ledger, Leap, Coin98, CitadelOne, and Frontier are some wallets supporting $XPRT."
  },
  {
    title: "What is Persistence Bridge?",
    content:
      "The Persistence Bridge is a tool that facilitates the transfer of assets, such as $PSTAKE, between the Ethereum network and the Core-1 chain."
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
            <div className="col-md-6">
              <div className="info">
                <Accordion>
                  {list.map((item, index) => (
                    <Card>
                      <Card.Header>
                        <p>{item.title}</p>
                        <ContextAwareToggle eventKey={index.toString()}>
                          Click me!
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

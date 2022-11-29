import React from "react";
import { Link } from "react-router-dom";
import pow from "../../assets/images1/summary/pow.png";
import staking from "../../assets/images1/summary/staking.png";
import blockchains from "../../assets/images1/summary/blockchains.png";
import case_study from "../../assets/images1/summary/case_study.png";
import compare from "../../assets/images1/summary/compare.png";
import ecosystem from "../../assets/images1/summary/ecosystem.png";
import eth_liquid_stake from "../../assets/images1/summary/eth_liquid_stake.png";
import liquid_staking from "../../assets/images1/summary/liquid_staking.png";
import stats from "../../assets/images1/summary/stats.png";
import xprt from "../../assets/images1/summary/xprt.png";

const SummaryContent = () => {
    return (
        <section className="summary-section">
            <div className="container">
                <div className="content">
                    <p className="title">Liquid Staking 101</p>
                    <div className="data">
                        <p>Liquid staking has taken the PoS industry by storm and is quickly becoming the go-to option for stakers over traditional staking. There’s so much to explore within the staking and liquid staking landscapes, it can often be difficult to know where to get started.
                        </p>
                        <p>This complete 101 guide will introduce you to staking, why liquid staking is rising dramatically in prominence, and how to start your journey today.
                        </p>
                        <p>Already ready to begin your liquid staking journey?</p>
                        <div className="buttons">
                            <a href="https://app.pstake.finance/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="primary">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <p className="title">Staking Overview</p>
                    <div className="data">
                        <p className="data-heading">a) Basics & Terminology</p>
                        <p className="sub-heading">What is staking?</p>
                        <p>
                            Crypto staking is the process of locking your tokens on the
                            blockchain, where the respective network puts them to work to help
                            power the ecosystem. In return for crypto staking, users receive
                            staking rewards in the form of tokens (essentially earning a
                            certain amount of interest on their deposit). These activities can
                            be carried out directly on-chain or through a staking platform.
                        </p>
                        <p>
                            When someone engages in crypto staking, their tokens (i.e. stake)
                            are delegated to a particular validator. The validator’s total
                            stake represents their commitment to act honestly to help the
                            network - the larger their stake, the more of an opportunity they
                            have to propose new blocks and earn staking rewards (and therefore
                            lessens the chance that they act maliciously).
                        </p>
                        <p>
                            Crypto staking is only possible on blockchains that utilize a PoS
                            (Proof of Stake) consensus mechanism, which essentially makes sure
                            that all transactions on the network are secure and verified
                            without a middleman - the cryptocurrency you staked on the network
                            helps execute these processes in a decentralized way, making
                            crypto staking a viable form of passive income.
                        </p>
                        <p>
                            Many different blockchain networks, such as Bitcoin, use a PoW
                            (Proof of Work) consensus mechanism that relies on enormous
                            amounts of computer processing power to solve mathematical
                            problems with miners - PoS has presented a far more efficient
                            solution. Crypto staking on PoS blockchains is one of its main use
                            cases.
                        </p>
                        <p>
                            For these reasons, crypto staking has become a very popular
                            practice. Many networks see most of the total circulating supply
                            being utilised for crypto staking, allowing users to earn staking
                            rewards.
                        </p>
                        <p>
                            Before we dive into more about staking, it’s important to clarify
                            some of the key background and terminology you will likely come
                            across on your staking journey.
                        </p>
                        <p className="sub-heading">PoS vs. PoW</p>
                        <div className="img-section">
                            <img src={pow} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            PoW networks require miners (the PoW equivalent of validators) to
                            purchase mining hardware and computers that can produce hashes to
                            process transactions, which can be extremely costly from a
                            financial and energy perspective. The 2 top PoW blockchains on the
                            market today are Bitcoin and Dogecoin.
                        </p>
                        <p>
                            With a PoS network, the process is simpler and more energy
                            efficient, where users can become validators and operate the
                            entire process via their own personal computer.
                        </p>
                        <p>
                            As an example, Ethereum is currently moving from a PoW model to
                            PoS, otherwise known as “
                            <a href="https://ethereum.org/en/upgrades/merge/" rel="noopener noreferrer" target="_blank">
                                {" "}
                                The Merge.
                            </a>
                            ” The network is also undergoing further efficiency improvements
                            and enhancements, which are slotted to take place over the course
                            of the next few years.
                        </p>
                        <p className="sub-heading">What are validators?</p>
                        <p>
                            When it comes to participating in a blockchain network, the
                            process is decentralised, meaning there’s no middleman or
                            centralized authority essentially controlling the network. The
                            actors that help run and power the network by processing
                            transactions are called validators, or validator nodes.
                        </p>
                        <p>
                            Running a validator node can be done by virtually anyone on a PoS
                            network - processing transactions can be executed through a normal
                            (quality) computer or via a cloud-computing service.
                        </p>
                        <p>
                            For your efforts of running a validator node, you provide support
                            to the network and its ecosystem of users. Validators receive
                            passive income as newly minted tokens when transactions are
                            processed, otherwise known as staking rewards.
                        </p>
                        <p>
                            But there’s a catch. To run a full validator node and participate
                            in staking, you’ll need to own a specific minimum amount of tokens
                            based on the network’s requirements. These tokens must then be
                            locked in a smart contract to run the validator node (for
                            staking).
                        </p>
                        <p>
                            On the other hand, staking platforms (while centralised) offer an
                            easy onboarding experience. These staking platforms let you
                            participate in staking crypto without the complications of
                            on-chain staking.
                        </p>
                        <p className="sub-heading">What are epochs?</p>
                        <p>
                            An epoch is a fixed period of time where blocks are created and
                            added to the blockchain; the length differs depending on the type
                            of PoS network.
                        </p>
                        <p>
                            The purpose of using an epoch system is to ensure that all nodes
                            on the network have a common understanding of when each block was
                            created. This helps to prevent forks (or splits) in the
                            blockchain, which can lead to errors and inconsistencies in the
                            data.
                        </p>
                        <p>
                            In addition, using an epoch-based system makes it harder for
                            malicious actors to cause damage to the chain by creating fake
                            blocks or reversing genuine ones.
                        </p>
                        <p className="sub-heading">What is slashing?</p>
                        <p>
                            Slashing refers to penalties incurred by validators for acting
                            maliciously or against the best interest of the blockchain
                            network. These systems were put in place to encourage validators
                            to act honestly to help benefit the network.
                        </p>
                        <p>
                            For example, bad validator behavior can include being offline or
                            inactive for long periods of time or simultaneously validating two
                            blocks. If the validator is deemed to be acting maliciously, their
                        </p>
                        <p>
                            stake, originally put up as collateral, can be automatically
                            forfeited (or slashed), which can often affect all users
                            delegating to that particular validator.
                        </p>
                        <p>
                            This is why when selecting a validator to delegate your stake,
                            it’s critical to analyze their overall track record, including
                            history and uptime. If you’re considering running a validator
                            yourself, make sure to keep the rules of slashing in mind to
                            ensure you’re not breaking any of the network’s rules.
                        </p>
                        <p className="data-heading">b) The Staking Process</p>
                        <p className="sub-heading">How does staking work?</p>
                        <div className="img-section">
                        <img src={staking} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            Although processes are different for each network, users who
                            engage in crypto staking essentially lock their tokens to help the
                            running of the network in return for staking rewards. All staked
                            tokens used when crypto staking are essentially guarantees to
                            legitimize new transactions that are added to the network.{" "}
                        </p>
                        <p>
                            When crypto staking, validators are selected depending on how
                            large their stake is, in addition to how long they’ve held the
                            network’s native token.
                        </p>
                        <p>
                            This means that there are different approaches and strategies to
                            consider when crypto staking, whether you’re doing so on a crypto
                            staking platform or as a validator.
                        </p>
                        <p className="sub-heading">Crypto staking: pros & cons</p>
                        <p>
                            When holders use their tokens for crypto staking, they provide
                            additional security to the blockchain, making it stronger and
                            therefore more resistant to cyberattacks and hacks. In addition,
                            crypto staking allows the network to more easily process and
                            execute transactions. In exchange for staking and locking assets,
                            users receive a certain amount of staking rewards (depending on
                            the protocol) as an incentive, which makes crypto staking
                            appealing to the masses.
                        </p>
                        <p>
                            Additionally, crypto staking is quite easy and accessible for many
                            users, with many wallets and blockchain platform interfaces
                            allowing for a smooth onboarding process where almost anyone can
                            get involved. Liquid staking platforms make this process far
                            easier and more seamless.
                        </p>
                        <p>
                            Of course, crypto staking comes with inherent risks as well. For
                            example, if a validator misbehaves (i.e. downtime), they can be
                            slashed by the network, putting your staked tokens at risk.
                            Another risk is that, when you begin crypto staking, there’s often
                            a vesting period where your tokens are locked and cannot be
                            unstaked for a specified time period. Therefore, you’ll be unable
                            to withdraw or sell your tokens during this period when you
                            participate in crypto staking.
                        </p>
                        <p>
                            It’s also important to remember that when staking your tokens
                            directly on-chain or through a staking platform, they’re locked
                            within the smart contract and often subject to long unbonding
                            periods. Therefore, if you’re looking to sell your coins and exit
                            your position after engaging in crypto staking (from an investment
                            perspective), you may not be able to sell immediately. Make sure
                            to always read up on the network’s rules when it comes to crypto
                            staking.
                        </p>
                        <p>
                            When your PoS assets are staked, they’re also subject to the same
                            upside and downside risks of any investment - for these reasons,
                            it’s important to research crypto staking. If the cryptocurrency
                            market rises, the value of your tokens will rise (and vice versa).
                            The main difference (and advantage) that comes with crypto staking
                            is that, despite market fluctuations and volatility, your staked
                            PoS assets continue earning staking rewards, growing your
                            underlying staked balance.
                        </p>
                        <p className="sub-heading">
                            How big is the crypto staking industry?
                        </p>
                        <div className="img-section">
                        <img src={stats} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            The staking industry has exponentially grown over the years, with
                            <a href="https://www.stakingrewards.com/" target="_blank" rel="noopener noreferrer">
                                &nbsp; a global staked value of $97B+, total PoS market cap of
                                $147B+, all across 5.9M+ global stakers&nbsp;
                            </a>
                            (as of September 20, 2022).
                        </p>
                        <p>
                            Not only have we seen a rise in the number of PoS blockchains and
                            staking platforms, each with their own exciting and advanced
                            technology, but also an interest in the cryptocurrency market as a
                            whole, contributing to the rise of this industry.
                        </p>
                        <p className="sub-heading">Top blockchains for crypto staking</p>
                        <div className="img-section">
                        <img src={blockchains} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            The{" "}
                            <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
                                largest blockchains{" "}
                            </a>
                            in terms of size have remained as powerhouses within the space for
                            years, continuing to dominate the landscape and grow in adoption.
                            Currently, these are the top 10 networks ranked by their staking
                            market cap:
                        </p>
                        <ol type="1">
                            <li>Ethereum (ETH)</li>
                            <li>Solana (SOL)</li>
                            <li> Cardano (ADA)</li>
                            <li>BNB Chain (BNB)</li>
                            <li>Avalanche (AVAX)</li>
                            <li> Polkadot (DOT)</li>
                            <li> Tron (TRX)</li>
                            <li> Polygon (MATIC)</li>
                            <li>Cosmos Hub (ATOM)</li>
                            <li>NEAR Protocol (NEAR)</li>
                        </ol>
                        <p>
                            While Ethereum currently remains (and has always been) the king of
                            smart contract platforms, other popular PoS networks are beginning
                            to catch up and take away market share. This is due to their
                            extremely fast speeds, low transaction speeds, enhanced UI/UX, and
                            more.
                        </p>
                        <p>
                            When it comes to staking these assets, the process can be executed
                            through multiple wallets and platform interfaces across these
                            networks. Each blockchain has its own parameters when it comes to
                            delegating, validating, and staking in general - in addition,
                            staking rewards will vary depending on whether you’re delegating
                            or validating and which network it’s occurring on.
                        </p>
                        <p className="sub-haeading">How can I start crypto staking?</p>
                        <p>
                            For the most part, crypto staking is available to almost anyone
                            who can participate and is relatively straightforward to initiate.
                            It’s important to consider that different PoS networks have
                            varying requirements regarding crypto staking.
                        </p>
                        <p>
                            For example, to participate in on-chain crypto staking on the
                            Ethereum network (becoming a validator) you will need a minimum of
                            32 ETH, the necessary hardware, etc. For many, these requirements
                            can be difficult to meet, locking them out of the opportunity to
                            participate and contribute to the network.
                        </p>
                        <p>
                            However, in general, PoS crypto staking opportunities are easily
                            accessible for most users. Many staking platforms exist that allow
                            users to participate in crypto staking as delegators. These
                            staking platforms provide both centralised and decentralised
                            services, so choose your staking options and preferences before
                            utilizing particular staking platforms.
                        </p>
                        <p
                            className="sub-heading
                    "
                        >
                            Do you need significant capital to stake?
                        </p>
                        <p>
                            Not usually. Validators often run staking pools and collect tokens
                            from various users through delegation, where they leverage these
                            assets on behalf of others when crypto staking. This helps smaller
                            token holders become a part of the crypto staking process and
                            collectively share in the staking rewards, while the validator
                            does the work to help power the network.
                        </p>
                        <p>
                            That means whenever a staker delegates their assets when crypto
                            staking (via a staking platform interface), the process is nearly
                            instantaneous and requires very little capital. Essentially, the
                            validator is acting on behalf of the staker and doing the heavy
                            lifting, meaning stakers can reap many of the benefits without
                            having to engage as active validators - this improves upon the
                            overall efficiency of the crypto staking process while minimising
                            the education and effort required for the user. As a whole, this
                            method allows almost anyone to participate in crypto staking
                            activities.
                        </p>
                        <p>
                            Of course, users delegating their tokens to a validator when
                            crypto staking must do their own research to ensure that it’s
                            trustworthy, has sufficient uptime, etc.
                        </p>
                        <p className="sub-heading">Best wallets for crypto staking</p>
                        <p>
                            Staking your tokens can be done in a decentralized manner and is
                            relatively straightforward. Here’s a list of some of the top
                            cryptocurrency wallets that you can use to select a validator and
                            stake (this will vary by network/ecosystem):
                        </p>
                        <ul>
                            <li>
                                <b>Ethereum:</b> MetaMask, Coinbase Wallet, Trust Wallet
                            </li>
                            <li>
                                <b>Binance:</b> BNB Wallet & Trust Wallet
                            </li>
                            <li>
                                <b>Solana:</b> SolFlare & Phantom
                            </li>
                            <li>
                                <b>Cardano:</b> Daedalus & Yoroi Wallet
                            </li>
                            <li>
                                <b>Polkadot:</b> JS UI & Polkadot Browser Extension
                            </li>
                            <li>
                                <b>Avalanche:</b> AVAX Web Wallet
                            </li>
                            <li>
                                <b>NEAR Protocol:</b> NEAR Wallet
                            </li>
                            <li>
                                <b>Cosmos:</b> Keplr Wallet & Cosmostation
                            </li>
                            <li>
                                <b>Algorand:</b> Exodus & MyAlgo Wallet
                            </li>
                            <li>
                                <b>Elrond:</b> Elrond Wallet & Maiar Wallet
                            </li>
                        </ul>
                        <p>
                            The above list only covers some of the top and most popular
                            blockchain networks - there are many more wallets built for other
                            chains that support staking.
                        </p>
                        <p className="data-heading">c) Staking Case Study: Cosmos $ATOM</p>
                        <div className="img-section">
                        <img src={case_study} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            Staking ATOM allows you to lock up your tokens to provide economic
                            security to Cosmos Hub while also enabling participation in
                            blockchain governance.{" "}
                        </p>
                        <p>
                            Users who stake ATOM on-chain can earn an average APY of ~9.7% in
                            staking rewards, providing an opportunity for passive income.
                            These staking rewards are generated from transaction fees across
                            Cosmos Hub and the newly created ATOM designed to reward stakers.
                        </p>
                        <p>
                            On Cosmos Hub, ATOM can either be self-delegated by a validator or
                            delegated to the validator by other ATOM holders. The minimum
                            amount of ATOM required to become an active validator is 1, making
                            the barrier to entry low for participants who want to begin
                            staking.
                        </p>
                        <p>
                            Across the network, there are currently
                            <a
                                href="https://www.mintscan.io/cosmos/validators"
                                target="_blank" rel="noopener noreferrer"
                            >
                                &nbsp;175 active validators out of 436 total&nbsp;
                            </a>
                            , with over 204M+ bonded tokens helping secure and uphold the
                            network (as of September 19, 2022).
                        </p>
                        <p>
                            So why is staking ATOM on Cosmos Hub so popular? For one, it’s an
                            ever-growing ecosystem that is secure, cheap to use, and fast when
                            it comes to transactions and engaging in network activity. Plus,
                            the growing success of the ecosystem (including DeFi) is
                            attracting more stakers who resonate with the long-term vision of
                            what’s being built in the industry, offering lucrative financial
                            opportunities and making staking an attractive feature.
                        </p>
                    </div>

                    <p className="title">Liquid Staking</p>
                    <div className="data">
                        <p className="data-heading">a) Intro to Liquid Staking</p>
                        <p className="sub-heading"> What is liquid staking?</p>
                        <div className="img-section">
                        <img
                            src={liquid_staking}
                            alt={"staking rewards"}
                            className="img-box"
                        />
                        </div>
                        <p>
                            Liquid staking is the process whereby users stake their PoS assets
                            to earn staking rewards, while also receiving underlying
                            representative tokens as additional liquidity to be used across
                            DeFi. By liquid staking, users can not only contribute to
                            traditional on-chain staking and receive the associated staking
                            rewards but can also unlock additional liquidity to pursue
                            opportunities to earn extra yield (through tokenized liquid-staked
                            assets).
                        </p>
                        <p>
                            In this way, liquid staking offers several advantages that
                            traditional staking doesn’t. Traditional staking requires you to
                            lock up your PoS assets - although you earn staking rewards from
                            staking, you cannot utilize your assets. Additionally, assets
                            staked directly on-chain are often subject to long lockup periods,
                            limiting users’ ability to withdraw or trade them when needed
                            (this can often be unfavorable during bearish or volatile market
                            conditions).
                        </p>
                        <p>
                            Liquid staking represents the next iteration in the evolution of
                            staking, providing an avenue for passive income from staking while
                            freeing up that same capital to deploy across DeFi - enabling the
                            PoS and DeFi industries to mutually grow and thrive together.
                        </p>
                        <p>
                            At the moment, some of the most popular assets available for
                            liquid staking are Cosmos (ATOM), Ethereum (ETH), Solana (SOL),
                            Polkadot (DOT), and Persistence (XPRT).
                        </p>
                        <p className="sub-heading">Why is liquid staking important?</p>
                        <p>
                            As blockchain and cryptocurrency evolve, the staking industry
                            needs to continue to innovate. As previously mentioned,
                            traditional on-chain staking has its limitations and prevents
                            users from unlocking additional liquidity. That’s where liquid
                            staking crypto becomes an important opportunity that users want to
                            capitalize on.
                        </p>
                        <p>
                            DeFi’s main value proposition is the ability to earn additional
                            yield in lucrative ways not commonly found in the traditional
                            financial markets. Staking crypto is an extremely important
                            mechanism to help secure a blockchain network and help validate
                            and process transactions. However, the very nature of staking
                            crypto limits DeFi’s capacity, forcing users to choose between
                            locking their assets on-chain or engaging in the vast world of
                            DeFi.
                        </p>
                        <p>
                            Depending on the state of the market and users’ preferences, they
                            may stray one way or the other - this means that one area will
                            suffer while the other flourishes. The core value proposition of
                            liquid staking crypto is that it brings the best of both worlds,
                            solving this issue and allowing users to participate in staking
                            crypto (and earn staking rewards) while engaging in DeFi
                            activities with tokenized assets.
                        </p>
                        <p>
                            While liquid staking crypto is becoming a more widely accepted
                            practice, it’s still in its infancy but is growing rapidly in
                            terms of adoption.
                        </p>
                        <p className="sub-heading">
                            Comparison to traditional & exchange staking
                        </p>
                        <div className="img-section">
                        <img src={compare} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            With traditional crypto staking, users stake their PoS assets
                            directly on-chain through a validator. Throughout this staking
                            crypto process, they earn staking rewards while helping provide
                            security to the underlying chain. Liquid staking gives users the
                            same benefits of traditional on-chain staking but amplifies the
                            benefits of staking crypto, providing the same avenue for earnings
                            from staking rewards while freeing up liquidity for other uses in
                            DeFi.
                        </p>
                        <p>
                            Additionally, users also have the option to stake their tokens on
                            CEXs (centralised exchanges). It’s important to note that this
                            staking method isn’t as decentralized as traditional on-chain
                            staking but still provides users with staking rewards. Even over
                            this option, liquid staking provides additional benefits, because
                            exchange staking still locks up your tokens and prevents you from
                            leveraging them for other opportunities.
                        </p>
                        <p className="sub-heading">Liquid staking: pros & cons</p>
                        <p>
                            Liquid staking is one of the most promising recent catalysts for
                            DeFi & PoS to be introduced to the blockchain industry. One of the
                            main reasons for this is the promise of liquid staking rewards,
                            which offer very high yields in return for simply securing the
                            network by staking crypto.
                        </p>
                        <p>
                            Let’s explore the advantages and disadvantages of what liquid
                            staking brings to the table.
                        </p>
                        <p>
                            As for the pros, liquid staking comes with several key advantages.
                            Users can stake their assets on-chain on the network they want to
                            support and earn staking rewards in the process. While locked on
                            the network, users can leverage those tokens to explore other DeFi
                            opportunities to earn extra staking rewards, including swapping,
                            farming, lending/borrowing, and much more. As a whole, the process
                            is generally secure and simply maximises the possibilities of
                            earning without sacrificing liquidity.
                        </p>
                        <p>
                            Liquid staking rewards are one of the core features that liquid
                            staking brings to the table. The fact that users can both earn
                            staking rewards while participating in DeFi when staking crypto
                            unleashes the new potential in the industry.
                        </p>
                        <p>
                            One of the greatest value propositions that liquid staking brings
                            to the table is its contribution to DeFi, making staking crypto
                            much more appealing. When users liquid-stake their PoS assets by
                            initially staking crypto, they are incentivised to participate in
                            the respective blockchain’s DeFi ecosystem, meaning they don’t
                            have to choose between on-chain staking and DeFi. Therefore,
                            liquid staking allows DeFi and PoS to mutually grow and thrive,
                            benefiting everyone in the process along with the value
                            proposition of staking crypto.
                        </p>
                        <p>
                            Regarding cons, liquid staking is facilitated by staking your
                            tokens directly with a protocol. The protocol then delegates those
                            tokens to a selected validator (or set of validators), meaning
                            you’re not in complete control of which validator will receive
                            your staked portion. In addition, while liquid staking is
                            considered safe, it’s known for being slightly less secure than
                            traditional on-chain staking, given there’s slightly more
                            complexity on the backend.
                        </p>
                        <p>
                            Nevertheless, staking crypto enters an entirely new light with the
                            existence of liquid staking.
                        </p>
                        <p className="data-heading">b) Liquid-staked Assets</p>
                        <p className="sub-heading">How do liquid-staked assets work?</p>
                        <p>
                            All liquid staking protocols vary mechanically but work in a
                            similar fashion. Whenever a user interacts with a liquid staking
                            protocol or platform to get the staking crypto process started,
                            they need to select their preferred native asset and then stake
                            it. Afterward, the protocol delegates the users’ stake to one (or
                            a set of) of its validators and subsequently mints underlying
                            (pegged) representative tokens, otherwise known as liquid-staked
                            assets. Staking crypto becomes an automated process with minimal
                            user effort or involvement, making liquid staking more attractive.
                        </p>
                        <p>
                            As your native tokens are staked and accumulate staking rewards in
                            the background when staking crypto, your liquid-staked assets are
                            your newly unlocked liquidity that can be used across all
                            compatible and integrated DeFi protocols with the respective
                            liquid staking platform.
                        </p>
                        <p>
                            Whenever you want to unstake your liquid-staked assets after
                            staking crypto, simply perform the unstaking function via the
                            liquid staking platform interface to redeem them for your original{" "}
                        </p>
                        <p>
                            native tokens. While there are often unbonding periods associated
                            with unstaking, there are several attractive DeFi options (such as
                            swapping your liquid-staked assets) that can be executed to avoid
                            this through liquid staking platforms.
                        </p>
                        <p className="sub-heading">How can I use liquid-staked assets?</p>
                        <p>
                            Once you’ve staked your assets via a liquid staking protocol,
                            there are plenty of opportunities to use your underlying
                            representative tokens to earn additional yield across DeFi. As a
                            note, the amount of utility for your assets depends on the
                            underlying liquid staking protocol’s DeFi integrations when
                            staking crypto and participating in liquid staking.
                        </p>
                        <p>
                            Below are some of the use cases for minted liquid-staked assets
                            across DeFi:
                        </p>
                        <ul>
                            <li>Swapping/trading</li>
                            <li>Staking</li>
                            <li>Lending/borrowing</li>
                            <li>Yield farming</li>
                        </ul>
                        <p>
                            Remember that while you’re using your liquid-staked assets across
                            DeFi, you’re still earning on-chain staking rewards from your
                            underlying staked tokens. Therefore, liquid staking enables your
                            tokens to be highly liquid and flexible, unlocking a breadth of
                            opportunities when staking crypto.
                        </p>
                        <p className="data-heading">
                            c) Getting Started with Liquid Staking
                        </p>
                        <p className="sub-heading">Where can you liquid stake? </p>
                        <p>
                            Although it’s still a relatively new industry, liquid staking
                            platforms have grown rapidly over the past few months. Adoption
                            has risen as users have started to see the benefits and
                            alternative use cases for their staked PoS assets through liquid
                            staking platforms, increasing the utility and use cases for
                            staking crypto.
                        </p>
                        <p>
                            Many liquid staking platforms on the market offer easy solutions
                            for users to get started with staking crypto. Each respective
                            liquid staking platform supports liquid staking for different
                            assets, some of the most popular being Ethereum (ETH), Binance
                            (BNB), Cosmos (ATOM), Polygon (MATIC), and many more.
                        </p>
                        <p>
                            Through each liquid staking platform’s user interface, liquid
                            staking can be done relatively simply and is considered much
                            easier to execute than traditional on-chain staking. Additionally,
                            these liquid staking platforms provide a gateway to many other
                            financial services, all through staking crypto.
                        </p>
                        <p>
                            pSTAKE, a liquid staking protocol developed by Persistence, is
                            heavily innovating in the liquid staking space with its
                            multi-chain product, making big moves in 2022 and on the cusp of
                            further innovations for 2023 and beyond.
                        </p>
                    </div>

                    <p className="title">pSTAKE: Gateway to Liquid Staking</p>
                    <div className="data">
                        <p className="sub-heading">What is pSTAKE?</p>
                        <div className="image-section mb-4">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    title="Introducing pSTAKE | Multi-chain Liquid Staking"
                                    className="embed-responsive-item"
                                    src={"https://www.youtube.com/embed/0sMoynPrA4w"}
                                />
                            </div>
                        </div>
                        <p>
                            <a href="https://pstake.finance/" target="_blank" rel="noopener noreferrer">
                                pSTAKE&nbsp;
                            </a>
                            is a core component of the Persistence ecosystem, serving as a
                            liquid staking protocol and staking platform that unlocks the
                            liquidity of staked PoS assets (i.e. BNB, ATOM, XPRT, and ETH),
                            with SOL and AVAX liquid staking solutions currently in
                            development.
                        </p>
                        <p>
                            PoS token holders can stake their tokens via the pSTAKE
                            application to receive stkASSETs (liquid-staked tokens
                            representing the staked assets) which can be traded or utilized in
                            DeFi for additional yield. Through this process, users earn liquid
                            staking rewards that they normally would from traditionally
                            staking crypto, all on one staking platform.
                        </p>
                        <p>
                            pSTAKE is building a multi-chain protocol that enables
                            liquid-staked representative tokens to be issued on multiple
                            networks, making staking crypto more appealing and accessible to
                            all through its staking platform.
                        </p>
                        <p className="sub-heading">Benefits of using pSTAKE</p>
                        <p>
                            pSTAKE’s liquid staking platform has many benefits that make it
                            unique and an ideal liquid staking solution when compared to other
                            alternatives across the industry for staking crypto. Here’s a list
                            of the key advantages and benefits users can expect from liquid
                            staking their tokens on pSTAKE:
                        </p>
                        <ul>
                            <li>
                                <b>Smooth UI/UX:</b> pSTAKE’s staking platform offers a seamless
                                and beautiful UI/UX, making liquid-staking your PoS assets as
                                simple and easy as possible. Regardless of the token you’re
                                staking (BNB, ATOM, XPRT, or ETH), the liquid staking and
                                stkASSET minting process can be done with just a few clicks,
                                streamlining the staking crypto process.
                            </li>
                            <li>
                                <b>High security:</b> pSTAKE has been audited by the very best
                                and most trustworthy blockchain security firms in the industry,
                                making our liquid staking products reliable and secure. This
                                includes the likes of Certora, Peckshield, and Halborn, with
                                more on the way. The protocol hasn’t been exploited or hacked to
                                date for any of its stkASSET products and is continuing with
                                additional audits to ensure the utmost security. Additional
                                partnerships have been formed with Immunefi and Forta Network,
                                specifically designed to bolster security efforts for stkBNB.
                            </li>
                            <li>
                                <b>DeFi integrations:</b> pSTAKE has partnered with top dApps
                                and protocols to ensure all stkASSETs receive high-quality DeFi
                                integrations to expand upon their utility and entice stakers to
                                liquid-stake their PoS assets. Current integrations include
                                Uniswap, SushiSwap, Osmosis, PancakeSwap, Alpaca Finance, Beefy
                                Finance, OpenLeverage, and Wombat Exchange, which allow you to
                                earn more rewards through staking crypto.
                            </li>
                            <li>
                                <b>Vast knowledge of Cosmos:</b> The Persistence & pSTAKE teams
                                have tremendous experience and knowledge of the Cosmos
                                ecosystem, as they’ve been working and building within it since
                                day 1. We understand how Cosmos works, its validator sets and
                                mechanisms, Interchain products, IBC functionality, and much
                                more to bring a seamless and powerful user experience for
                                IBC-enabled stkASSETs. Additionally, we fully understand the
                                best methods to implement ideal liquid staking solutions on
                                Cosmos.
                            </li>
                            <li>
                                <b>Industry leader:</b> pSTAKE prides itself on being an
                                industry leader in the liquid staking space, with years of
                                experience building and innovating solutions to optmise the user
                                experience. Its stkATOM product (running on the Ethereum
                                blockchain but migrating to the Persistence Core-1 Chain) was
                                the very first ATOM liquid staking solution on the market and
                                boasted the highest TVL (Total Value Locked) among its
                                competitors. The protocol has also achieved millions of dollars
                                in TVL across its stkBNB, stkXPRT, and stkETH liquid staking
                                products.
                            </li>
                            <li>
                                <b>Strong team:</b> pSTAKE’s team is made up of individuals with
                                extensive experience and backgrounds in the blockchain space,
                                ranging from innovators, developers, marketers, speakers and
                                many more. The team continues to grow as the protocol expands
                                its horizons for additional support for its upcoming stkASSET
                                products and implementations, allowing the liquid staking
                                industry to thrive.
                            </li>
                        </ul>
                        <p className="sub-heading">How to liquid stake on pSTAKE</p>
                        <p>
                            Here’s a high-level overview of how you can start liquid staking
                            on pSTAKE - we’ll take ETH as an example:
                        </p>
                        <div className="img-section">
                        <img
                            src={eth_liquid_stake}
                            alt={"staking rewards"}
                            className="img-box"
                        />
                        </div>
                        <p>
                            Liquid staking on the pSTAKE liquid staking platform is easy and
                            takes only a few minutes to get started. To begin your liquid
                            staking journey to earn staking rewards while maximising your DeFi
                            capabilities, head over to the pSTAKE app and select the PoS asset
                            you want to liquid stake - currently available choices are Binance
                            (BNB), Cosmos (ATOM), Persistence (XPRT), and Ethereum (ETH), with
                            Solana (SOL) and Avalanche (AVAX) liquid staking coming soon.
                        </p>
                        <p>
                            Once you’ve selected the token you want to start liquid staking
                            with, you’ll be redirected to the liquid staking interface. From
                            there, you can begin staking crypto. Simply navigate to the
                            “Stake” tab on the left-hand side of the screen, enter the number
                            of tokens you want to deposit into the protocol, and click
                            “Stake.” Follow the prompts on your Web3 wallet and confirm the
                            transaction to complete the process.
                        </p>
                        <p>
                            Congratulations! You’ve now successfully liquid-staked your PoS
                            assets on pSTAKE and begun staking crypto. You’ll now begin
                            earning liquid staking rewards and can use your stkASSETs to start
                            diving into DeFi.{" "}
                        </p>
                        <p>
                            Unstaking your assets after liquid staking is a very similar
                            process - the only difference is that you need to click “Unstake”
                            when you’re ready to redeem your liquid-staked assets for the
                            underlying PoS asset.
                        </p>
                    </div>
                    <p className="title">Persistence: Liquid Staking Ecosystem</p>
                    <div className="data">
                        <p>
                            Liquid staking itself is just one piece of the puzzle. To broaden
                            liquid staking’s horizons, the utility of liquid-staked assets
                            will also be critical. That’s why Persistence is on a mission to
                            build an entire ecosystem of products designed to cater to
                            liquid-staked asset holders, enabling further DeFi utility.
                        </p>
                        <p className="sub-heading">What is Persistence?</p>
                        <div className="image-section mb-4">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    title="Introducing pSTAKE | Multi-chain Liquid Staking"
                                    className="embed-responsive-item"
                                    src={"https://www.youtube.com/embed/C0XmxyPeG78"}
                                />
                            </div>
                        </div>
                        <p>
                            Persistence is a Tendermint-based, specialised Layer-1 network
                            powering an ecosystem of DeFi applications focused on unlocking
                            the liquidity of staked assets. Persistence facilitates the
                            issuance and deployment of liquid-staked stkASSETs (with pSTAKE
                            leading the charge), allowing users to earn staking rewards while
                            participating in DeFi primitives, such as lending/borrowing and
                            liquidity provisioning on DEXs.
                        </p>
                        <p>
                            Persistence aims to offer a seamless liquid staking and DeFi
                            experience for PoS users and enable developers to build innovative
                            applications around stkASSETs. In addition, the network utilises a
                            Tendermint dPOS BFT consensus mechanism to process and validate
                            transactions.
                        </p>
                        <p className="sub-heading">Ecosystem</p>
                        <div className="img-section">
                        <img src={ecosystem} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            Persistence continues to build and grow its overall ecosystem of
                            liquid staking products designed to complement and enable the
                            seamless exchange of liquid-staked assets. The Persistence
                            ecosystem comprises various dApps, wallets, DeFi platforms, tools,
                            and more to help power its liquid staking asset economy. All
                            elements work together and boast various utilities for assets
                            across Persistence and liquid staking.
                        </p>
                        <p>
                            Here’s a list of the key applications and products built within
                            the Persistence ecosystem:{" "}
                        </p>
                        <ul>
                            <li>
                                <b>pSTAKE:</b> A liquid staking protocol that provides liquidity
                                for staked PoS assets across multiple ecosystems, with solutions
                                built for Binance (BNB), Cosmos (ATOM), Persistence (XPRT), and
                                Ethereum (ETH).
                            </li>
                            <li>
                                <b>DeFi Primitives:</b> Persistence is in the midst of building
                                various DeFi products (DEX, borrowing/lending protocol, etc.)
                                that will elevate the utility and value proposition of
                                liquid-staked stkASSETs.
                            </li>
                            <li>
                                <b>AUDIT.one: </b> A platform with enterprise-grade blockchain
                                infrastructure built for PoS networks to accelerate the adoption
                                of decentralised technology.
                            </li>
                        </ul>
                        <p>
                            The Persistence ecosystem covers the whole liquid staking journey
                            and will encompass both the means for liquid staking (via pSTAKE)
                            and the means to utilise these liquid-staked assets (stkASSETs) in
                            DeFi for additional yield (via Persistence ecosystem apps such as
                            DEX, borrowing/lending protocol, etc.).
                        </p>
                        <p>
                            Additionally, the Persistence network is IBC-enabled, allowing for
                            interoperability between other IBC-enabled Cosmos ecosystem chains
                            and assets. As a result, this elevates the potential and promise
                            of Persistence-powered products to thrive across liquid-staked
                            asset economies.
                        </p>
                        <p>
                            Curious to learn more? Visit our
                            <Link to={"/"}>&nbsp;website’s main page&nbsp;</Link>
                            to dive deeper into what we’re all about.
                        </p>
                        <p className="sub-heading">XPRT Token</p>
                        <div className="img-section">
                        <img src={xprt} alt={"staking rewards"} className="img-box" />
                        </div>
                        <p>
                            <Link to={"/xprt"}>XPRT &nbsp;</Link>
                            is the native utility token within the Persistence ecosystem,
                            powering the network and providing a utility boost to ecosystem
                            applications to drive network adoption and secure the core
                            infrastructure via staking. XPRT is currently issued on the
                            Persistence Core-1 chain, meaning it can be used across the
                            network’s applications and is IBC-enabled for use across Cosmos
                            DeFi.
                        </p>
                        <p>
                            An example of how the XPRT token can be used across Cosmos is on
                            the Osmosis DEX, where users can provide liquidity to several
                            pools using XPRT as a token pair to earn yield in the form of LP
                            rewards.
                        </p>
                        <p>
                            stkXPRT, the liquid-staked representative token of XPRT, is
                            currently available on the Ethereum blockchain for use. When users
                            stake their XPRT on pSTAKE, the protocol directly mints a 1:1
                            representative ERC-20 token (stkXPRT) that can be used to provide
                            liquidity to a SushiSwap pool. In return for staking XPRT
                            on-chain, users can also earn ~35% APY in the form of staking
                            rewards.
                        </p>
                        <p>
                            The pSTAKE team is currently in the process of deprecating stkXPRT
                            from the Ethereum network. In Q4 2022, stkXPRT will be fully
                            enabled on the Persistence Core-1 Chain, meaning both XPRT and
                            stkXPRT will be interoperable across the entire Cosmos ecosystem
                            (where DeFi integrations are enabled).
                        </p>
                        <p>
                            XPRT accrues value from the entire Persistence ecosystem’s
                            financial activity through multiple avenues, including gas fees,
                            fee-sharing with ecosystem applications, hub-routing, and more.
                        </p>
                        <p className="sub-heading">stkASSETs (Liquid-staked tokens)</p>
                        <p>
                            stkASSETS represent pSTAKE’s underlying representative
                            liquid-staked tokens, designed to be tokenized versions of native
                            PoS assets that unlock additional liquidity with liquid staking.
                        </p>
                        <p>
                            Use cases for stkASSETs through liquid staking will be driven
                            through various applications and integrations bridging the PoS and
                            DeFi verticals. These use cases will include swapping, yield
                            farming, liquidity providing, lending and borrowing, and much
                            more.
                        </p>
                        <p>
                            The Persistence and pSTAKE teams continue to build innovative use
                            cases for liquid staking and these tokenized staked PoS assets,
                            encouraging users to further participate in on-chain staking to
                            bolster network security while simultaneously earning staking
                            rewards.
                        </p>
                        <p className="sub-heading">Mission & vision</p>
                        <p>
                            The broader vision of Persistence is to become the liquid staking
                            hub of the PoS space, making liquid staked stkASSETs the default
                            assets of the staking economy. Building pSTAKE is the first step
                            toward realizing this vision, as the Persistence team has big
                            plans throughout 2022, 2023, and beyond to create new ecosystem
                            product arms that can complement one another to benefit liquid
                            staking.
                        </p>
                        <p>
                            Persistence aims to become a top leader in the PoS industry and
                            value for XPRT (and stkXPRT) holders and stakers.
                        </p>
                        <p className="sub-heading">
                            Upcoming stkASSET products and integrations
                        </p>
                        <p>
                            Persistence has many exciting updates and developments in the
                            works for 2022 and beyond when it comes to liquid staking. At the
                            moment, the team is in the midst of building and deploying various
                            products that will be centered around driving increased utility
                            for stkASSETs and liquid staking as a whole.
                        </p>
                        <p>
                            These include, and are not limited to, a DEX for trading and
                            swapping tokens, a borrowing and lending protocol for loans and
                            margin trading, and much more. We’ll continue to update the
                            community on what’s coming in the future.
                        </p>
                        <p>Ready to start your liquid staking journey with Persistence?</p>
                        <div className="buttons">
                            <a href="https://app.pstake.finance/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="primary">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummaryContent;

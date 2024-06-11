/* eslint-disable react/no-unescaped-entities */
import { Text, Box, Container } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <Container maxW={"1440px"} px={"70px"} transition={"all 0.3s"} py={"100px"}>
      <Box className="container">
        <Box className="content">
          <Box>
            <Text fontSize={"26px"} mb={4} fontWeight={600}>
              Terms and Conditions
            </Text>
          </Box>
          <Text fontSize={"18px"} mb={4} fontWeight={500}>
            Last Revised: 11th June 2024
          </Text>
          <Box className="data">
            <Text className={"contentClass"} fontSize="16px">
              Please review these Terms of Use of the Persistence-branded
              decentralised exchange (the{" "}
              <b style={{ fontWeight: 900 }}>"Terms"</b>) carefully, as they set
              forth legally binding terms and conditions between you and the
              Company (as defined below) that govern your access and/or use of:
              (a) the website located at{" "}
              <a
                href="https://app.persistence.one/"
                target={"_blank"}
                rel="noopenner noreferrer"
                style={{ color: "#01BDBD", textDecoration: "underline" }}
              >
                https://app.persistence.one/
              </a>{" "}
              (the <b style={{ fontWeight: 900 }}>"Website"</b>); (b) the
              Persistence DEX Smart Contracts (as defined below); and (c) the
              Persistence Chain (as defined below) on which the Persistence DEX
              Smart Contracts (as defined below) are deployed, including related
              trademarks, and other intellectual property, whether such access
              and/or use is via (i) the Website (
              <b style={{ fontWeight: 900 }}>"Website Access"</b>) or (ii)
              command line, locally installed programs, Software Development
              Kits ( <b style={{ fontWeight: 900 }}>"SDK"</b>), software code
              and blockchain and smart contract explorers (collectively{" "}
              <b style={{ fontWeight: 900 }}>"Direct Access"</b>). These Terms
              are to be read together with the provisions set forth in our
              privacy policy found at [
              <Link
                href="/privacy"
                style={{ color: "#01BDBD", textDecoration: "underline" }}
                // target={"_blank"}
              >
                Privacy Policy
              </Link>
              ] (<b style={{ fontWeight: 900 }}>"Privacy Policy"</b>).
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              For purposes of these Terms, the Website, the Persistence DEX
              Smart Contracts and Persistence Chain shall be collectively
              referred to as{" "}
              <b style={{ fontWeight: 900 }}>"Persistence DEX"</b>. By accessing
              and/or using Persistence DEX, you ("you" or the "User") agree to
              these Terms on behalf of yourself and any entity you represent,
              and you represent and warrant that you have the right and
              authority to do so.
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px" color={"red"}>
              Persistence DEX is not intended for (a) access and/or use by
              Excluded Persons (as defined below); or (b) access and/or use by
              any person or entity in, or accessing or using the Website from,
              an Excluded Jurisdiction. Accordingly, Excluded Persons (as
              defined below) should not access and/or use Persistence DEX.
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              The Website is owned and operated by Persistence Sub One Ltd.
              ("Company"), an entity formed under the laws of the British Virgin
              Islands and the Persistence DEX Smart Contracts (as defined below)
              are copyrighted works belonging to the Company and/or its
              Affiliate(s) (each of User and Company, a "Party", and
              collectively, the "Parties").
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              You acknowledge that you shall be deemed to have accepted these
              Terms by accessing and/or using Persistence DEX–whether by Website
              Access or Direct Access.{" "}
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              Company reserves the right to change these Terms in its sole
              discretion from time to time. The "Date Last Revised" specified on
              these Terms indicates the date on which the Terms were last
              changed. You will be notified of those changes and given the
              opportunity to review and accept the updated Terms when you next
              access and/or use Persistence DEX. Your acceptance of, and/or your
              continued access and/or use of Persistence DEX following notice
              of, the updated Terms shall indicate your acknowledgement of, and
              agreement to be bound by, such the updated Terms.
            </Text>
            <br />
            {/* <Heading variant={"dexterSubheading"}> */}
            <b>1. Overview of Persistence DEX</b>
            {/* </Heading> */}
            <br />
            1.1 Persistence DEX has been developed by Company to enable Users to
            undertake any one or more of the following ("Persistence DEX
            Activities"):
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) effect Token Swaps (as defined below) of digital assets
              supported by Persistence DEX ("Persistence DEX Supported Tokens")
              on the Persistence Chain and across other IBC-enabled blockchains
              ("Persistence DEX Supported Blockchains") on a non-custodial
              basis;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) provide liquidity ("Liquidity Provision") in respect of
              Persistence DEX Supported Token pairs and/or compositions of more
              than two Persistence DEX Supported Tokens (as the case may be)
              (collectively, "Liquidity Token Composition") by way of :
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (i) transfer of such Liquidity Token Composition to a Persistence
              DEX Supported Blockchain address associated with a liquidity pool
              smart contract ("Liquidity Pool") which is a part of the
              Persistence DEX Smart Contracts designated for non-custodial
              holding of Persistence DEX Supported Token pairs with a view to
              providing liquidity to facilitate other Users' Token Swaps; and
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (ii) in return, receive Liquidity Pool tokens ("LP Tokens")
              representing the proportion of overall liquidity contributed by
              User in the respective Liquidity Pool, which LP Tokens may be used
              in conjunction with other composable features or platforms; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (c) effect Liquidity Provision through single-sided liquidity
              provision – whereby a User who wishes to apportion the relevant
              proportion of such User's Persistence DEX Supported Token(s) (of a
              single type) to be swapped for another Persistence DEX Supported
              Token-type using Token Swap in order to compose the relevant
              Liquidity Token Composition for the relevant Liquidity Pool – can
              do so in a seamless manner using the single-sided liquidity
              provision function on Persistence DEX; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (d) such other functions or features as may be provided through
              Persistence DEX.
            </Text>
            <br />
            1.2 Persistence DEX enables Users to undertake Persistence DEX
            Activities through the use of use of smart contracts comprising
            computer code written based on various blockchain standard and
            programming languages (collectively, "Persistence DEX Smart
            Contracts") developed and published by Company or its Affiliate(s)
            at Persistence DEX's official Github page ("Github Page").
            <br />
            <br />
            1.3 For purposes of these Terms:
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) "Affiliates" of an entity means the owners, directors,
              officers, employees, advisors, and agents of such entity and
              companies in which such entity has an interest;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) "Persistence Chain" means the blockchain known as Persistence
              Core-1 chain developed based on the Cosmos SDK;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (c) "Persistence DEX Documentation" means the document repository
              accessible at{" "}
              <a
                href="https://docs.persistence.one"
                target={"_blank"}
                rel="noreferrer noopener"
                style={{ color: "#01BDBD", textDecoration: "underline" }}
              >
                https://docs.persistence.one
              </a>{" "}
              and all its associated links;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (d)"IBC" means the Inter-Blockchain Communication Protocol; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (e)"Supported Wallet" in relation to Persistence DEX, means such
              digital wallet of User as may be supported by Persistence DEX;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (f)"Token Swap" refers to the function on Persistence DEX which
              enables a user to swap one Persistence DEX Supported Token with
              another from the liquidity provided in the relevant Liquidity
              Pool;
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              a reference to:
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) a "person" includes a reference to any individual, body
              corporate, unincorporated association or partnership;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) an agreement or other document is a reference to that
              agreement or document as from time to time supplemented or
              amended;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (c) the masculine gender includes the feminine and neuter genders
              and vice versa;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (d) the singular includes the plural and vice versa; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (e) any law or regulation is a reference to that law or regulation
              as amended from time to time and, where the same has been
              repealed, to any re-enactment or replacement of the same.
            </Text>
            <br />
            1.4 Website Access
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) The Website is a user interface designed by Company to
              facilitate use of the Persistence DEX Smart Contract by providing
              a user-friendly interface to access and/or use the Persistence DEX
              Smart Contracts, although the Persistence DEX Smart Contracts are
              also accessible / can be used via Direct Access. Company may
              modify or discontinue support for the Website at any time, in its
              sole discretion.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) You are hereby granted a non-exclusive, non-transferable,
              revocable, limited licence to electronically access and use the
              Website in the manner described in these Terms. You do not have
              the right, and nothing in these Terms shall be construed as
              granting you the right, to sub-license any rights in connection
              with the access and/or use of the Website. Company may revoke or
              terminate this licence at any time if you use, or attempt to use,
              the Website in a manner prohibited by these Terms, or if your
              rights under these Terms are terminated pursuant to Section 7.
            </Text>
            <br />
            1.5 Direct Access. With the necessary technical expertise, it is
            possible for a User to generate transaction messages to interact
            with the Persistence DEX Smart Contracts via Direct Access directly
            without use of the Website. Company is not involved in and has no
            oversight of any Direct Access and expressly disclaims all
            responsibility, and User acknowledges that Company and its
            Affiliates shall have no responsibility for any loss occasioned to a
            User by or attributable to Direct Access.
            <br />
            <br />
            1.6 Persistence DEX Smart Contracts.
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) Company has led the development of and has deployed
              ("Deployment") the Persistence DEX Smart Contracts on the
              Persistence Chain.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) Apart from Website Access and Direct Access, the Persistence
              DEX Smart Contracts may also be accessible now or in the future
              through other applications built on the Persistence Chain. On
              Deployment, the Persistence DEX Smart Contracts hold no digital
              assets.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (c) The Persistence DEX Smart Contracts are open-source software
              accessible at the Github Page, and are maintained and modifiable
              by the Company (and/or its Affiliates). You agree that save for
              the right to access and/or use the Persistence DEX Smart Contracts
              on the terms expressly provided herein, you shall not acquire
              and/or own any legal right, title and/or interest in the
              Persistence DEX Smart Contracts or any intellectual property
              rights associated thereto, which shall be wholly owned by the
              Company (and/or its Affiliates).
            </Text>
            <br />
            <br />
            1.7 Transaction Fees.
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) Transaction fees ("Transaction Fees") shall be chargeable to a
              User for certain Persistence DEX-related transactions (each, a
              "Persistence DEX Transaction") – whether in relation to Token Swap
              or in relation to Liquidity Provision or creation of pools on
              Persistence DEX – whether executed through the Persistence DEX
              Smart Contracts, or otherwise. Please refer to the Website or the
              Persistence DEX Documentation for the relevant fees which may
              change from time to time.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) User hereby consents to such fees being debited from such
              User's Persistence DEX Supported Blockchain-compatible wallet that
              such User connects to the Persistence DEX Smart Contracts for
              purposes of effecting a Persistence DEX Transaction, at the time
              such Persistence DEX Transaction is processed. Similar transaction
              fees may also be levied on Users accessing and using the
              Persistence DEX Smart Contracts via Direct Access.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (c) Such Transaction Fees may be subject of variation through
              on-chain governance with such variation implemented by Company via
              variations to the Persistence DEX Smart Contracts.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (d) Non-circumvention. You agree not to do anything, including the
              use of any technology such as virtual private networks (VPN) for
              the purposes of circumventing these Terms.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (e) Sole and exclusive use of IP address: You shall not use
              another person’s IP address and neither will you allow another
              person to use your IP address associated with your use of
              Persistence DEX. You hereby declare and represent that the IP
              address associated with your use of Persistence DEX is unique and
              exclusive to you and shall remain as such.
            </Text>
            <br />
            <b>2. Using Persistence DEX</b>
            <br />
            <br />
            2.1 Token Swaps
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) Token Swaps may be effected via the "Swap" feature accessible
              through the Website or Direct Access;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) A User accessing and/or using Persistence DEX to effect Token
              Swaps is deemed to have read and understood the Persistence DEX
              Documentation, and acknowledges and accepts all risks and fees
              relating to Token Swaps, including but not limited to:
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (i) all Transaction Fees incurred in connection with Token Swaps;
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (ii) risks associated with slippage and/or lack of liquidity
              available on Persistence DEX; and
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (iii) technological risks associated with blockchain technology,
              smart contracts, on which Persistence DEX is developed, which may
              be subject of potential hacks, exploits and compromise (including
              risks associated with third-party integrations available for use
              in association with Persistence DEX e.g. Keplr).
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              <b>
                The Company and its Affiliates shall have no responsibility for
                any loss occasioned to such User who shall have no claim against
                Company and its Affiliates in respect thereof.{" "}
              </b>
            </Text>
            <br />
            2.2 Liquidity Provision &amp; Farming.
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) User may effect Liquidity Provision in respect of Persistence
              DEX Supported Token pairs and earn rewards in respect of such
              Liquidity Provision through the "Pool" feature accessible via
              Website Access or Direct Access;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) A User accessing and/or using Persistence DEX for Liquidity
              Provision is deemed to have read and understood the Persistence
              DEX Documentation, and acknowledges and accepts all risks and fees
              relating to Liquidity Provision, including but not limited to:
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (i) all Transaction Fees incurred in connection with Token Swaps;
            </Text>
            <Text ml={12} className={"contentClass"} fontSize="16px">
              <br />
              (ii) risks associated with slippage and/or lack of liquidity
              available on Persistence DEX;
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (iii) risks associated with impermanent loss, loss of opportunity,
              and/or token-exchange rate loss relative to User's position before
              and after Liquidity Provision; and
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (iv) technological risks associated with blockchain technology,
              smart contracts, on which Persistence DEX is developed, which may
              be subject of potential hacks, exploits and compromise (including
              risks associated with third-party integrations available for use
              in association with Persistence DEX e.g. Keplr).
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              <b>
                The Company and its Affiliates shall have no responsibility for
                any loss occasioned to such User who shall have no claim against
                Company and its Affiliates in respect thereof.{" "}
              </b>
            </Text>
            <br />
            <b>3. Representations and Warranties</b>
            <br />
            3.1. In accessing and/or using Persistence DEX and/or connecting a
            Supported Wallet to Persistence DEX, User makes the following
            representations and warranties:
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) User is at least eighteen (18) years of age, and has the full
              right, power and authority to access and/or use the Interface
              (including the tools made available via the Interface), and to
              enter into and comply with these Terms;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) User is not prohibited and/or restricted under the laws of any
              jurisdiction applicable to User from accessing and/or using the
              Interface, and/or from using the Supported Wallet in connection
              with User's use of Persistence DEX;{" "}
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (c) User is compliant with all laws of any jurisdiction applicable
              to User in relation to User's access and/or use of Interface and
              acknowledges and agrees that the Persistence DEX Group is not
              liable for User's compliance or non-compliance with any such laws;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (d) User is not an Excluded Person (as defined below), and User is
              not accessing and/or using Persistence DEX from an Excluded
              Jurisdiction (as defined below);
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (e) User has not had User's access or use of Persistence DEX
              previously terminated or revoked for any reason whatsoever;{" "}
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (f) User will not, and will not attempt to, authorize anyone other
              than User to access and/or use Persistence DEX using a Supported
              Wallet owned by User, or otherwise engage in Prohibited Use (as
              defined below) of such Supported Wallet;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (g) User is the legal and beneficial owner of, or is authorized by
              the owner of the Supported Wallet to hold and/or deploy, the
              Persistence DEX Supported Token; and{" "}
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (h) User is knowledgeable in using and evaluating blockchain
              technologies and related blockchain-based digital assets,
              including Persistence DEX, Persistence DEX Supported Tokens and
              Supported Wallets, and User has evaluated and understand the use
              of Persistence DEX and has not relied on any information,
              statement, representation, or warranty, express or implied, made
              by or on behalf of Persistence DEX Group with respect to
              Persistence DEX whether as regards the suitability, reliability,
              security or otherwise of Persistence DEX and/or Persistence DEX
              Smart Contracts.
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              Each and all of User's above representations and warranties are
              true, complete, accurate and not misleading from the time of
              User's acceptance of these Terms and are deemed repeated each time
              User uses the Interface.
            </Text>
            <br />
            <br />
            3.2 By accessing and/or using Persistence DEX, User acknowledges and
            accepts that the Persistence DEX Group shall not be liable to User
            for the deployment and maintenance of Persistence DEX and/or any
            malfunction thereof.
            <br />
            <br />
            3.3 Company may, in its sole discretion, modify or discontinue
            support for Persistence DEX and/or access to the Persistence DEX
            Smart Contracts at any time. <br />
            <br />
            3.4 User shall be responsible for obtaining the data network access
            necessary to use and/or access Persistence DEX, and for acquiring
            compatible hardware or device necessary to access and use
            Persistence DEX and any updates thereto. <br />
            <br />
            3.5 Use of Persistence DEX may be disrupted as a result of
            malfunction and/or delays which are inherent to the use of the
            internet and electronic communications, and User agrees that the
            Persistence DEX Group shall not be responsible for any such
            disruption, malfunction and/or delay, and any loss which may arise
            therefrom. <br />
            <br />
            3.6 The Website and its contents are our property or the property of
            our licensors and are protected by copyright, trademark, patent and
            other applicable laws. User is permitted to download and print
            content from the Website solely for such User's own personal use to
            the extent required to access and use the tools and information made
            available via the Website. Unless with our prior written consent,
            the Website and its contents must not be reproduced, modified,
            redistributed or otherwise used for any other reason. <br />
            <br />
            3.7 User shall not modify, adapt or hack the Website and/or
            Persistence DEX, or modify any other website and/or protocol so as
            to falsely imply that such other website and/or protocol is
            associated with the Website and/or Persistence DEX and/or its
            Affiliates (as defined below) in any way. User shall not crawl,
            scrape, cache or otherwise access any content from the Website via
            automated means, and User shall not use automated data collection,
            data mining, robots or any other data gathering methods of any kind
            on the Website and/or Persistence DEX. <br />
            <br />
            3.8 User may, through hyperlinks displayed on the Website, gain
            access to websites operated by persons other than Persistence DEX.
            Such hyperlinks are displayed only for User's convenience, and we
            assume no responsibility for the use of any third-party software or
            other materials on the Website.
            <br />
            <br />
            <b>4. Excluded Person and Excluded Jurisdiction</b>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              For purposes of these Terms:
            </Text>
            <br />
            4.1 "Excluded Jurisdiction" means any of the following
            jurisdictions:
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.1.1 the United States of America and its territories and
              possessions (collectively "United States");
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.1.2 the People's Republic of China;{" "}
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.1.3 a jurisdiction identified by the Financial Action Task Force
              (FATF) for strategic AML/CFT deficiencies and included in FATF's
              listing of "High-risk and Other Monitored Jurisdictions"
              accessible at{" "}
              <a
                href="http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions"
                target={"_blank"}
                rel="noreferrer"
                style={{ color: "#01BDBD", textDecoration: "underline" }}
              >
                http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions
              </a>{" "}
              (as may be updated from time to time); and/or
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.1.4 a jurisdiction in which Persistence DEX and the use of which
              are prohibited or would be subject of licensing, permissions or
              approvals.
            </Text>
            <br />
            <br />
            4.2 "Excluded Persons" refers to the following:
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.2.1 a person who is:
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (a) a citizen of an Excluded Jurisdiction (which for purposes of
              this Section 6.2.1(a) shall not include United States);{" "}
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (b) domiciled in, resident of, or physically present / located in
              an Excluded Jurisdiction;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.2.2 a body corporate:
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              4.2.2.1 which is incorporated in, or operates out of, an Excluded
              Jurisdiction; or
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              4.2.2.2 which is under the control of one or more individuals who
              is/are citizen(s) of, domiciled in, residents of, or physically
              present / located in, an Excluded Jurisdiction;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.2.3 an individual or body corporate accessing and/or using
              Persistence DEX from within an Excluded Jurisdiction;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.2.4 an individual or body corporate included in United Nations
              Consolidated List (accessible at
              https://www.un.org/securitycouncil/content/un-sc-consolidated-list);{" "}
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.2.5 an individual or body corporate which is otherwise
              prohibited or ineligible in any way, whether in full or in part,
              under any laws applicable to such individual or body corporate
              from accessing and/or using Persistence DEX; and/or
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.2.6 a U.S. person.
            </Text>
            <br />
            <br />
            4.3 "U.S. person" means:
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.1 any natural person resident in the&nbsp;United States;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.2 any partnership or corporation organized or incorporated
              under the laws of the&nbsp;United States;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.3 any estate of which any executor or administrator is a U.S.
              person;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.4 any trust of which any trustee is a U.S. person;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.5 any agency or branch of a foreign entity located in
              the&nbsp;United States;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.6 any non-discretionary account or similar account (other than
              an estate or trust) held by a dealer or other fiduciary for the
              benefit or account of a U.S. person;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.7 any discretionary account or similar account (other than an
              estate or trust) held by a dealer or other fiduciary organized,
              incorporated, or (if an individual) resident in the&nbsp;United
              States;{" "}
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.8 any partnership or corporation if:
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (a) organized or incorporated under the laws of any foreign
              jurisdiction; and
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (b) formed by a U.S. person principally for the purpose of
              investing in securities not registered under the&nbsp;Act, unless
              it is organized or incorporated, and owned, by accredited
              investors (as defined in&nbsp;Regulation D of the Securities Act
              of 1933 of the United States of America) who are not natural
              persons, estates or trusts; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.9 any citizen of United States who is a military personnel of
              United States who is not resident in or outside of the United
              States,
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              but does not include :
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.10 any discretionary account or similar account (other than an
              estate or trust) held for the benefit or account of a non-U.S.
              person by a dealer or other professional fiduciary organized,
              incorporated, or (if an individual) resident in the&nbsp;United
              States;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.11 any estate of which any professional
              fiduciary&nbsp;acting&nbsp;as executor or administrator is a U.S.
              person if:
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (a) an executor or administrator of the estate who is not a U.S.
              person has sole or&nbsp;shared&nbsp;investment discretion with
              respect to the assets of the estate; and
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (b) the estate is governed by foreign law;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.12 any trust of which any professional
              fiduciary&nbsp;acting&nbsp;as trustee is a U.S. person, if a
              trustee who is not a U.S. person has sole
              or&nbsp;shared&nbsp;investment discretion with respect to the
              trust assets, and no beneficiary of the trust (and no settlor if
              the trust is revocable) is a U.S. person;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.13 an&nbsp;employee benefit plan&nbsp;established and
              administered in accordance with the law of a country other than
              the&nbsp;United States&nbsp;and customary practices and
              documentation of such country;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.14 any agency or branch of a U.S. person located outside
              the&nbsp;United States&nbsp;if:
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (a) agency or branch operates for valid business reasons; and
            </Text>
            <br />
            <Text ml={12} className={"contentClass"} fontSize="16px">
              (b) the agency or branch is engaged in the business of insurance
              or banking and is subject to substantive insurance or banking
              regulation, respectively, in the jurisdiction where located; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              4.3.15 The&nbsp;International Monetary Fund,
              the&nbsp;International Bank for Reconstruction and Development,
              the&nbsp;Inter-American Development Bank, the&nbsp;Asian
              Development Bank, the&nbsp;African Development Bank,
              the&nbsp;United Nations, and their
              agencies,&nbsp;affiliates&nbsp;and pension plans, and any other
              similar international organizations, their
              agencies,&nbsp;affiliates&nbsp;and pension plans.
            </Text>
            <br />
            <br />
            <b>5. Prohibited Use</b>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              User shall not, directly or indirectly:
            </Text>
            <br />
            5.1 access and/or use Persistence DEX:
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              5.1.1 in violation of any law, rule, or regulation of any
              jurisdiction that is applicable to User; and/or
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              5.1.2 in violation or breach of these Terms and/or any other
              document from time-to-time governing User access and/or use of
              Persistence DEX;
            </Text>
            <br />
            <br />
            5.2 permit others to access Persistence DEX through User's wallet or
            a blockchain address User controls or otherwise engage in
            transactions using Persistence DEX for any person other than the
            wallet owner;
            <br />
            <br />
            5.3 disrupt, interfere with, or otherwise adversely affect the
            normal flow or function of Persistence DEX or otherwise act in a
            manner that may negatively affect other users' experience when using
            Persistence DEX, and User shall not take advantage of software
            vulnerabilities and any other act that intentionally abuses or
            exploits the design and functions of Persistence DEX;
            <br />
            <br />
            5.4 engage in, or knowingly facilitate, any fraudulent, deceptive,
            or manipulative transaction activity in connection with User's use
            of Persistence DEX;
            <br />
            <br />
            5.5 engage in, or knowingly facilitate, any money laundering,
            terrorist financing, or other illegal activities using Persistence
            DEX;
            <br />
            <br />
            5.6 access or attempt to access non-public systems, programs, data,
            or services using Persistence DEX;
            <br />
            <br />
            5.7 copy, reproduce, republish, upload, post, transmit, resell, or
            distribute in any way, any data, content, or any part of Persistence
            DEX except as expressly permitted by applicable laws; and
            <br />
            <br />
            5.8 reverse engineer or attempt to reverse engineer Persistence DEX
            except as expressly permitted by applicable law,
            <br />
            <br />
            <Text className={"contentClass"} fontSize="16px">
              (collectively, "Prohibited Uses").
            </Text>
            <br />
            <b>6. Waivers</b>
            <br />
            6.1 User agrees and acknowledges that neither Persistence DEX nor
            any of our Affiliates (as defined below) shall be liable to User for
            any direct, indirect, special, incidental, consequential or other
            losses of any kind, in tort, contract or otherwise (including but
            not limited to loss of revenue, income or profits, and loss of use
            or data), arising out of or in connection with User's access and/or
            use of Persistence DEX.
            <br />
            <br />
            6.2 User undertakes not to initiate or participate, and waives the
            right to participate in, any class action lawsuit or a class-wide
            arbitration against Persistence DEX and/or our Affiliates in
            relation to User's access and/or use of Persistence DEX.
            <br />
            <br />
            6.3 By accepting these Terms, User waives all rights, claims and/or
            causes of action (present or future) under law (including any
            tortious claims) or contract against the Persistence DEX Group and
            its Affiliates in connection with User's access and/or use of
            Persistence DEX.
            <br />
            <br />
            <b>7. Termination</b>
            <br />
            7.1 These Terms shall remain in full force and effect and be legally
            binding on User for so long as User accesses and/or uses Persistence
            DEX.
            <br />
            <br />
            7.2 The Persistence DEX Group may restrict, suspend and/or terminate
            User's access and/or use of Persistence DEX at any time for any
            reason and to such extent at Persistence DEX Group's sole
            discretion.
            <br />
            <br />
            7.3 Neither the Company nor any of our Affiliates will have any
            liability whatsoever to User for any such restriction, suspension
            and/or termination or for any action taken by the Company and/or any
            of our Affiliates to implement such restriction, suspension and/or
            termination which can include blacklisting User's Supported Wallet
            which User uses to access and/or use Persistence DEX.
            <br />
            <br />
            7.4 Sections 3 to 10 of these Terms shall remain in effect in favour
            of the Company and its Affiliates (as the case may be)
            notwithstanding any such restriction, suspension and/or termination.
            <br />
            <br />
            <b>8. Disclaimer </b>
            <br />
            8.1 In accessing and/or using Persistence DEX, User acknowledges and
            agrees that:
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              8.1.1 DEXTER IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS BY
              THE COMPANY, AND THE DEXTER GROUP EXPRESSLY DISCLAIMS ANY AND ALL
              REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND, WHETHER
              EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR
              CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A
              PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR
              NON-INFRINGEMENT.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              8.1.2 THE DEXTER GROUP HAS NOT MADE AND MAKES NO REPRESENTATION,
              WARRANTY AND/OR CONDITION OF ANY KIND THAT DEXTER WILL MEET USER'S
              REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY,
              SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE
              OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              8.1.3 NEITHER DEXTER NOR ANY OF ITS AFFILIATES IS USER'S BROKER,
              AGENT, TAX OR LEGAL ADVISOR, AND HAS NO FIDUCIARY RELATIONSHIP
              WITH OR OBLIGATION TO USER. NO COMMUNICATION OR INFORMATION
              PROVIDED BY DEXTER OR ANY OF ITS AFFILIATES IS INTENDED AS OR
              SHALL BE CONSTRUED AS INVESTMENT, FINANCIAL, TAX, LEGAL OR ANY
              OTHER KIND OF ADVICE. THE DEXTER GROUP SHALL NOT BE LIABLE FOR ANY
              DECISIONS USER MAKES TO ACCESS AND/OR USE DEXTER.
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              8.1.4 TO THE EXTENT THAT APPLICABLE LAW REQUIRES OR IMPOSES ANY
              REPRESENTATION, WARRANTY AND/OR CONDITION WITH RESPECT TO USER'S
              ACCESS AND/OR USE OF DEXTER, ALL SUCH REPRESENTATION, WARRANTY
              AND/OR CONDITION ARE LIMITED IN DURATION TO NINETY (90) DAYS FROM
              THE DATE OF FIRST ACCESS AND/USE BY USER OF DEXTER.
            </Text>
            <br />
            8.2 THE DEXTER GROUP DOES NOT ENDORSE ANY THIRD PARTY AND SHALL NOT
            BE RESPONSIBLE IN ANY WAY FOR ANY TRANSACTIONS YOU ENTER INTO WITH
            ANY OTHER THIRD PARTY.
            <br />
            8.3 YOU ACKNOWLEDGE AND AGREE THAT NEITHER THE COMPANY NOR ANY OF
            ITS AFFILIATES WILL BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES OF ANY
            SORT INCURRED AS THE RESULT OF ANY INTERACTIONS BETWEEN YOU AND ANY
            THIRD PARTY.
            <br />
            <br />
            <b>9. Limitation of Liability</b>
            <br />
            9.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DEXTER
            AND/OR ANY OF OUR AFFILIATES BE LIABLE TO USER OR ANY THIRD PARTY
            FOR ANY LOST PROFITS, LOST DATA, OR ANY INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING OUT OF
            USER'S ACCESS AND/OR USE OF DEXTER, EVEN IF THE COMPANY AND/OR ANY
            OF ITS AFFILIATES HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES.
            <br />
            <br />
            9.2 USER'S ACCESS TO AND/OR USE OF DEXTER IS AT USER'S OWN
            DISCRETION AND RISK, AND USER WILL BE SOLELY RESPONSIBLE FOR ANY
            DAMAGE TO USER'S DEVICE OR COMPUTER SYSTEM, OR LOSS OF DATA
            RESULTING THEREFROM.
            <br />
            <br />
            9.3 NEITHER THE COMPANY NOR ANY OF ITS AFFILIATES SHALL BE LIABLE TO
            USER FOR ANY LOSS OR DAMAGE ARISING OUT OF USER'S FAILURE TO KEEP
            USER'S PRIVATE KEYS OR LOGIN CREDENTIALS TO USER'S WALLET SECURE OR
            ANY OTHER UNAUTHORIZED ACCESS TO OR TRANSACTIONS INVOLVING USER'S
            WALLET.
            <br />
            <br />
            9.4 TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
            NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE
            LIABILITY OF THE COMPANY AND/OR ANY OF OUR AFFILIATES TO USER FOR
            ANY CLAIM BY USER FOR DAMAGES ARISING FROM OR RELATED TO USER'S
            ACCESS AND/OR USE OF DEXTER:
            <br />
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (a) WHETHER PURSUANT TO THESE TERMS; AND/OR
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              (b) WHETHER FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF
              THE ACTION,
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF USD100. THE EXISTENCE
              OF MORE THAN ONE CLAIM BY USER WILL NOT ENLARGE THIS LIMIT.
            </Text>
            <br />
            <b>10. Indemnification</b>
            <br />
            10.1 User shall indemnify and hold the Company and/or any of our
            Affiliates, each of their respective employees, officers, directors
            and representatives (collectively, "Indemnified Party"), harmless,
            including costs and attorneys' fees, from any loss, claim or demand
            made due to or arising out of:
            <br />
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              10.1.1 User's access and/or use of Persistence DEX;
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              10.1.2 User's violation of these Terms; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              10.1.3 User's violation of laws or regulations applicable to
              User's access and/or use of Persistence DEX.
            </Text>
            <br />
            <br />
            10.2 The relevant Indemnified Party reserves the right, at User's
            expense, to assume the exclusive defence and control of any matter
            for which User is required to provide indemnification, and User
            agrees to cooperate in the defence of these claims. User shall not
            settle any matter without the prior written consent of the relevant
            Indemnified Party. The relevant Indemnified Party will use
            reasonable efforts to notify User of any such claim, action or
            proceeding upon becoming aware of it.
            <br />
            <br />
            <b>11. Tax Implications</b>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              User is solely responsible for determining the tax implications
              and tax reporting requirements associated with transactions User
              engages in using Persistence DEX, and for paying any applicable
              taxes in each applicable jurisdiction. Neither Persistence DEX nor
              any of our Affiliates shall be responsible for determining whether
              there are tax implications in connection with transactions
              involving User's use of Persistence DEX, for reporting any such
              transactions, or for paying any applicable taxes.
            </Text>
            <br />
            <b>12. Potential Risks Associated with Use of Persistence DEX</b>
            <br />
            <br />
            <Text className={"contentClass"} fontSize="16px">
              User acknowledges and agrees to the following:
            </Text>
            <br />
            12.1 Persistence DEX allows User access to the Persistence DEX Smart
            Contract to engage in aforementioned activities on User's own
            account and at User's own risk.
            <br />
            <br />
            12.2 Trading digital assets and/or providing liquidity of the same
            entails a high financial risk. User has necessary experience and
            knowledge to understand the risks involved. User should carefully
            assess User's financial circumstances and risk tolerance and where
            appropriate, seek third party financial advice before engaging in
            the aforementioned activities.
            <br />
            <br />
            12.3 Nothing in these Terms or the Website shall be construed as:
            <br />
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              12.3.1 financial or investment advice. We do not provide any view
              on the merits of any particular investment. Any information
              provided is for educational purposes and to keep investors
              informed of prices, ranges, and volatility of digital assets and
              derivatives thereof. No person in the Persistence DEX Group acts
              as your broker, intermediary, agent or advisor in any capacity;
              and{" "}
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              12.3.2 any marketing, promotion or offer for any product or
              investment to User or any third party. User shall be solely
              responsible for any losses, damages or costs resulting from User's
              reliance on any data or information on the Website or otherwise.
              User shall be responsible for User's decisions relating to
              Persistence DEX which are User's own.
            </Text>
            <br />
            <br />
            12.4 Like all software, Persistence DEX may be subject to exploits,
            accordingly, neither the Company nor any of its Affiliates shall be
            responsible to User any such exploits or loss to User as a result of
            such exploits, whether foreseeable or not.
            <br />
            <br />
            12.5 While the Company has taken a number of precautions to ensure
            the security of Persistence DEX including obtaining third-party
            security audits, the technology constituting Persistence DEX, and
            their interaction, is relatively new and it is not possible to
            guarantee that the code is completely free from bugs or errors.
            <br />
            <br />
            12.6 User accepts all risks that arise from User's access and/or use
            of Persistence DEX, including and not limited to, the risk of any of
            Dexer Supported Tokens being lost due to a failure or exploit of
            Persistence DEX.
            <br />
            <br />
            12.7 User is solely responsible for securing the private keys
            associated with any Supported Wallet which User uses when accessing
            and/or using Persistence DEX.
            <br />
            <br />
            12.8 User understands that anyone who obtains User's private keys to
            User's Supported Wallet and/or access to User's device containing
            such private keys, may access User's Supported Wallet controlled
            with those private keys with or without User's authorisation and may
            transfer any Persistence DEX Supported Tokens accessible through
            User's Supported Wallet.
            <br />
            <br />
            12.9 In choosing to access and/or use Persistence DEX, User does so
            on User's own initiative and at User's own risk, and User is
            responsible for complying with all applicable local laws, rules and
            regulations relating to User's access and/or use of Persistence DEX.
            <br />
            <br />
            12.10 Support for the Persistence DEX may be modified or
            discontinued at any time in Persistence DEX Group's sole discretion.
            <br />
            <br />
            12.11 In the event of a change in the operating rules or other
            features of the relevant code ("Fork") that may result in more than
            one version of a network ("Forked Network") and more than one
            version of a digital asset ("Forked Asset"), Persistence DEX may not
            support activity related to any Forked Assets. Forked Networks and
            the available supply of any Forked Assets are wholly outside
            Persistence DEX Group's control. In the event of a Fork, Persistence
            DEX Group may temporarily suspend certain services on the Website
            (with or without advance notice to User) while it is determined
            which Forked Network(s) to support. Persistence DEX Group shall not
            be responsible for a lack of support for any Forked Asset.
            <br />
            <br />
            12.12 By using Persistence DEX, User is using Persistence DEX "as
            is" and "as available" with no representations or warranties
            whatsoever. To the maximum extent permitted by law, neither the
            Company nor any of its Affiliates makes any express or implied
            representations and warranties, including implied representations or
            warranties of accuracy, merchantability, fitness for a particular
            purpose and non-infringement in relation to Persistence DEX. Neither
            the Company nor any of its Affiliates is responsible or liable for
            any error, delay or interruption in or lack of access to Persistence
            DEX or for any loss of digital assets (including but not limited to
            Persistence DEX Supported Tokens) occasioned by or attributable to
            the Persistence DEX.
            <br />
            <br />
            <b>13. Electronic Communications</b>
            <br />
            <br />
            13.1 The communications between User and the Company shall be via
            electronic means, either through the Website or electronic mail.
            <br />
            <br />
            13.2 For contractual purposes, User:
            <br />
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              13.2.1 consents to receive communications from the Company in any
              electronic form; and
            </Text>
            <br />
            <Text ml={6} className={"contentClass"} fontSize="16px">
              13.2.2 acknowledges and agrees that all terms and conditions,
              agreements, notices, disclosures, and other communications that
              the Company provides to User electronically satisfy any legal
              requirement that would also be satisfied if such communications
              were to be in a hardcopy writing.
            </Text>
            <br />
            <b>14. General</b>
            <br />
            <br />
            14.1 Entire Terms
            <br />
            <Text className={"contentClass"} fontSize="16px">
              These Terms (read together with our Privacy Policy) constitute the
              entire agreement between User and the Company regarding User's
              access and/use of Persistence DEX.
            </Text>
            <br />
            <br />
            14.2 Severability
            <br />
            <Text className={"contentClass"} fontSize="16px">
              If any provision of these Terms is, for any reason, held to be
              invalid or unenforceable, the other provisions of these Terms will
              be unimpaired and the invalid or unenforceable provision will be
              deemed modified so that it is valid and enforceable to the maximum
              extent permitted by law.
            </Text>
            <br />
            <br />
            14.3 Relationship of Parties
            <br />
            <Text className={"contentClass"} fontSize="16px">
              Nothing contained in these Terms will be deemed to be construed as
              creating a partnership or an agency relationship or joint venture
              between User, the Company and/or any of our Affiliates.
            </Text>
            <br />
            <br />
            14.4 Assignment
            <br />
            <Text className={"contentClass"} fontSize="16px">
              These Terms, and User's rights thereunder, may not be assigned,
              without the Company's prior written consent, and any attempted
              assignment, subcontract, delegation, or transfer in violation of
              the foregoing will be null and void. The Company may freely assign
              these Terms and our respective rights thereunder.
            </Text>
            <br />
            <br />
            14.5 Waiver
            <br />
            <Text className={"contentClass"} fontSize="16px">
              A waiver by the Company of any right or remedy under these Terms
              shall only be effective if it is in writing, executed by a duly
              authorized representative of the Company and shall apply only to
              the circumstances for which it is given. Failure of the Company to
              exercise or enforce any right or remedy under these Terms shall
              not operate as a waiver of such right or remedy, nor shall it
              prevent any future exercise or enforcement of such right or
              remedy, and no single or partial exercise of any right or remedy
              shall preclude or restrict the further exercise of any such right
              or remedy or other rights or remedies.
            </Text>
            <br />
            <br />
            14.6 No Third-Party Rights <br />
            <Text className={"contentClass"} fontSize="16px">
              Save for the Company's Affiliates who shall have the rights and
              benefits to the extent accorded thereto under these Terms, any
              person who is not a Party shall have no right under the Contracts
              (Rights of Third Parties) Act (Chapter 53B) of Singapore to
              enforce any of these Terms.{" "}
            </Text>
            <br />
            <br />
            14.7 Governing Law and Jurisdiction
            <br />
            <Text className={"contentClass"} fontSize="16px">
              The agreement as shall be constituted by User's acceptance of
              these Terms, and any dispute or claim arising out of or in
              connection with the subject matter or formation (including
              non-contractual disputes or claims) of such agreement, shall be
              governed by and construed in accordance with the law of Singapore.
            </Text>
            <br />
            <Text className={"contentClass"} fontSize="16px">
              The Parties agree that any dispute or claim arising out of or in
              connection with the subject matter or formation (including
              non-contractual disputes or claims) of these Terms shall be by
              arbitration, and judgment upon the award may be entered by any
              court having jurisdiction thereof or having jurisdiction over the
              relevant Party or its assets. The arbitration shall be conducted
              under the rules of the Singapore International Arbitration Centre
              ("SIAC"). The arbitral tribunal shall consist of a sole arbitrator
              to be appointed by the President of the SIAC. The seat of the
              arbitration shall be Singapore. The language of the arbitration
              shall be English. The arbitration agreement shall be governed by
              Singapore law.
            </Text>
            <br />
            14.8 Severability
            <br />
            <Text className={"contentClass"} fontSize="16px">
              If any provisions of these Terms are found by any court or
              tribunal of competent jurisdiction to be invalid, void, unlawful
              or unenforceable under any applicable law, such unenforceability
              or invalidity shall not render these Terms unenforceable or
              invalid as a whole, and such provisions shall be deleted without
              affecting the remaining provisions herein.
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;

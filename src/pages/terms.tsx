import {
  ListItem,
  UnorderedList,
  Text,
  Box,
  Container
} from "@chakra-ui/react";
import React from "react";

const Terms = () => {
  return (
    <Container maxW={"1440px"} px={"70px"} transition={"all 0.3s"} py={"100px"}>
      <Box className="container">
        <Box className="content">
          <Box>
            <Text fontSize={"26px"} mb={4} fontWeight={600}>
              Terms of Use
            </Text>
          </Box>
          <Text fontSize={"18px"} mb={4} fontWeight={500}>
            Last Updated Date: 3 November 2023
          </Text>
          <Box className="data">
            <Text className={"contentClass"} mb={4}>
              Please review these Terms of Use of Persistence products (the “
              <b>Terms</b>”) carefully, as they set forth legally binding terms
              and conditions between you and the Company (as defined below) that
              govern your access and/or use of: (a) the website located at
              https://persistence.one/ and its associated domains (collectively,
              the “<b>Website</b>”); (b) the Persistence Supported Products (as
              defined below); and (c) the Persistence Chain (as defined below),
              including related trademarks, and other intellectual property (all
              the products collectively described in the foregoing of this
              Paragraph, including the Website and Supported Wallet (as defined
              herein), the “<b>Persistence Products</b>”), whether such access
              and/or use is via (i) the Website (“<b>Website Access</b>”) or
              (ii) command line, locally installed programs, Software
              Development Kits (“SDK”), software code and blockchain and smart
              contract explorers (collectively “<b>Direct Access</b>”). These
              Terms are to be read together with the provisions set forth in our
              privacy policy found at{" "}
              <a
                href="https://persistence.one/privacy "
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3e73f0]"
              >
                https://persistence.one/privacy
              </a>{" "}
              (“Privacy Policy”).
            </Text>
            <Text className={"contentClass"} mb={4}>
              By accessing and/or using any Persistence Product or by receiving
              any Communication (as defined herein) related to any Persistence
              Product, you (“<b>you</b>” or the “<b>User</b>”) agree to these
              Terms on behalf of yourself and any entity you represent, and you
              represent and warrant that you have the right and authority to do
              so.
            </Text>
            <Text className={"contentClass"} mb={4}>
              <b>
                The Persistence Products are not intended for (a) access and/or
                use by Excluded Persons (as defined below); or (b) access and/or
                use by any person or entity in, or accessing or using the
                Persistence Products from, an Excluded Jurisdiction.
                Accordingly, Excluded Persons (as defined below) should not
                access and/or use the Persistence Products.
              </b>
            </Text>
            <Text className={"contentClass"} mb={4}>
              You are entering into these Terms with Persistence Enterprise
              Solutions Pte. Ltd. (“Company”), an entity formed under the laws
              of the Republic of Singapore and the Persistence Products are
              copyrighted works belonging to the Company and/or its Affiliate(s)
              (each of User and Company, a “<b>Party</b>”, and collectively, the
              “<b>Parties</b>”).
            </Text>
            <Text className={"contentClass"} mb={4}>
              You acknowledge that you shall be deemed to have accepted these
              Terms by accessing and/or using Persistence Products–whether by
              Website Access or Direct Access.
            </Text>
            <Text className={"contentClass"} mb={4}>
              Company reserves the right to change these Terms in its sole
              discretion from time to time. The “Date Last Revised” specified on
              these Terms indicates the date on which the Terms were last
              changed. You will be notified of those changes and given the
              opportunity to review and accept the updated Terms when you next
              access and/or use Persistence Products. Your acceptance of, and/or
              your continued access and/or use of Persistence Products following
              notice of, the updated Terms shall indicate your acknowledgement
              of, and agreement to be bound by, such updated Terms.
            </Text>
            <Text className={"contentClass"} mb={4}>
              By using Persistence Products (which for the purposes hereof
              includes but is not limited to accessing the Website), you
              acknowledge and agree that you are dealing solely with the Company
              as counterparty in respect of your use of Persistence Products,
              which shall supersede and replace all prior agreements and
              counterparty relationships entered into with any of the Company’s
              Affiliates in respect of such use.
            </Text>
            <Text className={"subHeading"}>
              <b>1. Overview of Persistence Products</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                1.1 Persistence Chain is a decentralised open-source layer one
                blockchain network that is maintained by a network of
                decentralised nodes (including validators).
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.2 For purposes hereof, any software, application, integration,
                token (including but not limited to Supported Wallet, the
                Token(s)) or infrastructure which allows for interaction with
                the Persistence Chain that is supported by the Company shall for
                the purposes hereof be referred to as a “Persistence Supported
                Product” and “Persistence Supported Products” shall be construed
                accordingly.
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.3 For purposes of these Terms:{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Affiliates</b>” of an entity means the owners, directors,
                  officers, employees, advisors, and agents of such entity and
                  companies in which such entity has an interest;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Communication</b>” refers to any communication you may
                  receive by agreeing or accessing any of the public channels
                  associated with the Persistence Products, including but not
                  limited to the Persistence Products’ official Telegram,
                  Twitter, Discord or other social media channels;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Persistence Chain</b>” means the blockchain known as
                  Persistence Core-1 chain developed based on the Cosmos SDK;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Persistence Supported Products</b>” has the meaning
                  ascribed to it in Clause 1.2;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Persistence Documentation</b>” means the document
                  repository accessible at{" "}
                  <a
                    href="https://docs.persistence.one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3e73f0]"
                  >
                    https://docs.persistence.one
                  </a>{" "}
                  and all its associated links;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Persistence Associated Entities</b>” refers to the Company
                  and its Affiliates and its respective Affiliates;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Token</b>” refers to the proof-of-stake utility and
                  governance token of Persistence Chain called Persistence token
                  or XPRT, which purpose and function is to secure the
                  Persistence Chain network and to facilitate decentralised
                  decision-making in respect of Persistence Chain; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  “<b>Supported Wallet</b>” in relation to XPRT and the
                  Persistence Chain, means the digital wallet application as
                  referred to as such in Clause 2.1;
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                a reference to:{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  a “person” includes a reference to any inBoxidual, body
                  corporate, unincorporated association or partnership;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  an agreement or other document is a reference to that
                  agreement or document as from time to time supplemented or
                  amended;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  the masculine gender includes the feminine and neuter genders
                  and vice versa;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  the singular includes the plural and vice versa; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any law or regulation is a reference to that law or regulation
                  as amended from time to time and, where the same has been
                  repealed, to any re-enactment or replacement of the same.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                1.4 Website Access :{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  The Website (being itself a Persistence Product) is a user
                  interface designed by Company to facilitate use of the
                  Persistence Products in general by providing a user-friendly
                  interface to access, use and/or interact with the Persistence
                  Chain, although the Persistence Chain is also accessible / can
                  be used via Direct Access. Company may modify or discontinue
                  support for the Website at any time, in its sole discretion.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  You are hereby granted a non-exclusive, non-transferable,
                  revocable, limited licence to electronically access and use
                  the Website in the manner described in these Terms. You do not
                  have the right, and nothing in these Terms shall be construed
                  as granting you the right, to sub-license any rights in
                  connection with the access and/or use of the Website. Company
                  may revoke or terminate this licence at any time if you use,
                  or attempt to use, the Website in a manner prohibited by these
                  Terms, or if your rights under these Terms are terminated
                  pursuant to Section 7.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                1.5 <b>Direct Access.</b> With the necessary technical
                expertise, it is possible for a User to generate transaction
                messages to interact with the Persistence Chain via Direct
                Access directly without use of the Website. Company is not
                involved in and has no oversight of any Direct Access and
                expressly disclaims all responsibility, and User acknowledges
                that Company and its Affiliates shall have no responsibility for
                any loss occasioned to a User by or attributable to Direct
                Access.
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.6 <b>Persistence Chain</b>.
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  Apart from Website Access and Direct Access, the Persistence
                  Chain may also be accessible now or in the future through
                  other applications or integrations built on the Persistence
                  Chain.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  Persistence Chain is an open-source software accessible at the
                  Github Page, and is maintained and modifiable by the Company
                  (and/or its Affiliates) subject to Token governance processes
                  from time to time. You agree that save for the right to access
                  and/or use the Persistence Products on the terms expressly
                  provided herein, you shall not acquire and/or own any legal
                  right, title and/or interest in the Persistence Products or
                  any intellectual property rights associated thereto, which
                  shall be wholly owned by the Company (and/or its Affiliates).
                </ListItem>
              </UnorderedList>{" "}
              <Text className={"contentClass"} mb={4}>
                1.7 Transaction Fees.{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  As the context may apply, Transaction fees (“Transaction
                  Fees”) in the form of “gas fees” (generally denominated in the
                  Token) are applicable when certain on-chain transactions are
                  execution (including but not limited to making Token
                  transfers, staking Tokens etc.) (each, a “Persistence On-Chain
                  Transaction”). Please refer to the Website or the Persistence
                  Documentation for more details.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User hereby consents to such fees (if applicable) being
                  debited from such User’s Persistence Chain-compatible wallet
                  that such User connects to the Persistence Chain for purposes
                  of effecting a Persistence On-Chain Transaction, at the time
                  such Persistence On-Chain Transaction is processed. Similar
                  transaction fees may also be levied on Users accessing and
                  using the Persistence Chain via Direct Access.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                Non-circumvention. You agree not to do anything, including the
                use of any technology such as virtual private networks (VPN) for
                the purposes of circumventing these Terms.
              </Text>
              <Text className={"contentClass"} mb={4}>
                Sole and exclusive use of IP address: You shall not use another
                person’s IP address and neither will you allow another person to
                use your IP address associated with your use of Persistence
                Products. You hereby declare and represent that the IP address
                associated with your use of Persistence Products is unique and
                exclusive to you and shall remain as such.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>2. Using Persistence Products</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                2.1 Persistence Chain{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  Any User can interact with the Persistence Chain for various
                  purposes, including but not limited to the following, which
                  shall be non-exhaustive: (i) running a validator node to
                  participate in the securing the network and participating in
                  network consensus; (ii) staking Tokens or delegating Tokens
                  for staking; (iii) integrating software with the Persistence
                  Chain; (iv) claiming staking rewards; (v) voting on governance
                  proposals pertaining to Persistence Chain; (vii) accessing the
                  Persistence Chain using a wallet application (including
                  <a
                    href="https://wallet.persistence.one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3e73f0]"
                  >
                    https://wallet.persistence.one
                  </a>{" "}
                  (“Supported Wallet”) or other third party wallet solutions
                  like Keplr), among other things (collectively, the
                  “Activities”).
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  A User accessing and/or using Persistence Products for any of
                  the Activities or for any other purpose is deemed to have read
                  and understood the Persistence Documentation, and acknowledges
                  and accepts all risks and fees relating to the same, including
                  but not limited to:
                  <br />
                  i) all Transaction Fees incurred in connection with use of
                  Persistence Chain; <br />
                  ii) all risks associated with holding or handling of Tokens,
                  including the Tokens having no secondary market or liquidity
                  or any inherent value to others; and <br />
                  iii) technological risks associated with blockchain
                  technology, smart contracts, on basis of which Persistence
                  Products is developed, which may be subject of potential
                  hacks, exploits and compromise (including risks associated
                  with third-party integrations available for use in association
                  with Persistence Chain e.g. Keplr, etc.).
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                <b>
                  The Company and its Affiliates shall have no responsibility
                  for any loss occasioned to such User who shall have no claim
                  against Company and its Affiliates in respect thereof.
                </b>
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>3. Representations and Warranties</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                3.1 In accessing and/or using any Persistence Product (including
                interacting with the Persistence Chain using Supported Wallet),
                User makes the following representations and warranties:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  User is at least eighteen (18) years of age, and has the full
                  right, power and authority to access and/or use Persistence
                  Products (including the tools made available in respect
                  thereof), and to enter into and comply with these Terms;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User is not prohibited and/or restricted under the laws of any
                  jurisdiction applicable to User from accessing and/or using
                  Persistence Products, and/or from using the Supported Wallet
                  in connection with User’s use of Persistence Products;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User is compliant with all laws of any jurisdiction applicable
                  to User in relation to User’s access and/or use of Persistence
                  Products and acknowledges and agrees that the Persistence
                  Associated Entities are not liable for User’s compliance or
                  non-compliance with any such laws;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User’s access and/or use of Persistence Products does not
                  require the Company or any other entity associated with
                  Persistence Products to be registered, licensed or granted
                  approval in order for User to use or continue using
                  Persistence Products;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User is not an Excluded Person (as defined below), and User is
                  not accessing and/or using Persistence Products from an
                  Excluded Jurisdiction (as defined below);
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User has not had User’s access or use of Persistence Products
                  previously terminated or revoked for any reason whatsoever;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User will not, and will not attempt to, authorize anyone other
                  than User to access and/or use Persistence Products using a
                  Supported Wallet or Persistence Chain-compatible blockchain
                  address owned by User, or otherwise engage in Prohibited Use
                  (as defined below) of such Supported Wallet Persistence
                  Chain-compatible blockchain address;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  where User is using Supported Wallet or Token in connection
                  with Persistence Products, such User is the legal and
                  beneficial owner of, or is authorized by the owner of such
                  Supported Wallet or Token (as the case may be) and/or to hold
                  and/or deploy, the Token; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User is knowledgeable in using and evaluating blockchain
                  technologies and related blockchain-based digital assets,
                  including Persistence Products, Tokens and Supported Wallet,
                  and User has evaluated and understands the use of Persistence
                  Products and has not relied on any information, statement,
                  representation, or warranty, express or implied, made by or on
                  behalf of Persistence Associated Entities with respect to
                  Persistence Products whether as regards the suitability,
                  reliability, security or otherwise of Persistence Products
                  and/or Persistence Chain.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                {" "}
                Each and all of User’s above representations and warranties are
                true, complete, accurate and not misleading from the time of
                User’s acceptance of these Terms and are deemed repeated each
                time User uses Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.2{" "}
                <b>
                  By accessing and/or using Persistence Products, User
                  acknowledges and accepts that the Persistence Associated
                  Entities shall not be liable to User for the deployment and
                  maintenance of Persistence Products and/or any malfunction
                  thereof.
                </b>
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.3 Company may, in its sole discretion, modify or discontinue
                support (to the extent it is able to or practically able to) for
                Persistence Products at any time.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.4 User shall be responsible for obtaining the data network
                access necessary to use and/or access Persistence Products, and
                for acquiring compatible hardware or device necessary to access
                and use Persistence Products and any updates thereto.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.5 Use of Persistence Products may be disrupted as a result of
                malfunction and/or delays which are inherent to the use of the
                internet and electronic communications, and User agrees that the
                Persistence Associated Entities shall not be responsible for any
                such disruption, malfunction and/or delay, and any loss which
                may arise therefrom.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.6 The Website and its contents are our property or the
                property of our licensors and are protected by copyright,
                trademark, patent and other applicable laws. User is permitted
                to download and print content from the Website solely for such
                User’s own personal use to the extent required to access and use
                the tools and information made available via the Website. Unless
                with our prior written consent, the Website and its contents
                must not be reproduced, modified, redistributed or otherwise
                used for any other reason.{" "}
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.7 User shall not modify, adapt or hack the Website and/or
                Persistence Products, or modify any other website and/or
                protocol so as to falsely imply that such other website and/or
                protocol is associated with the Website and/or Persistence
                Products and/or its Affiliates (as defined below) in any way.
                User shall not crawl, scrape, cache or otherwise access any
                content from the Website via automated means, and User shall not
                use automated data collection, data mining, robots or any other
                data gathering methods of any kind on the Website and/or
                Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.8 User may, through hyperlinks displayed on the Website, gain
                access to websites operated by persons other than the Company.
                Such hyperlinks are displayed only for User’s convenience, and
                we assume no responsibility for the use of any third-party
                software or other materials on the Website.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>4. Excluded Person and Excluded Jurisdiction</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                For purposes of these Terms:{" "}
              </Text>
              <Text className={"contentClass"} mb={4}>
                4.1 “<b>Excluded Jurisdiction</b>” means any of the following
                jurisdictions:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  the United States of America and its territories and
                  possessions (collectively “United States”);
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  the People’s Republic of China;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  a jurisdiction identified by the Financial Action Task Force
                  (FATF) for strategic AML/CFT deficiencies and included in
                  FATF’s listing of “High-risk and Other Monitored
                  Jurisdictions” accessible at{" "}
                  <a
                    href=" https://www.fatf-gafi.org/en/countries/black-and-grey-lists.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3e73f0]"
                  >
                    https://www.fatf-gafi.org/en/countries/black-and-grey-lists.html
                  </a>{" "}
                  (as may be updated from time to time); and/or
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  a jurisdiction in which Persistence Products and the use of
                  which are prohibited or would be subject of licensing,
                  permissions or approvals.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                4.2 “<b>Excluded Persons</b>” refers to the following:
              </Text>
              <Text className={"contentClass"} mb={4}>
                4.2.1 a person who is:{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  a citizen of an Excluded Jurisdiction (which for purposes of
                  this Section 4.2.1(a) shall not include United States);
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  domiciled in, resident of, or physically present / located in
                  an Excluded Jurisdiction;
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                4.2.2 a body corporate:{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  which is incorporated in, or operates out of, an Excluded
                  Jurisdiction; or
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  which is under the control of one or more inBoxiduals who
                  is/are citizen(s) of, domiciled in, residents of, or
                  physically present / located in, an Excluded Jurisdiction;
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                4.2.3 an inBoxidual or body corporate accessing and/or using
                Persistence Products from within an Excluded Jurisdiction;
              </Text>
              <Text className={"contentClass"} mb={4}>
                4.2.4 an inBoxidual or body corporate included in United Nations
                Consolidated List (accessible at
                <a
                  href="https://www.un.org/securitycouncil/content/un-sc-consolidated-list);"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e73f0]"
                >
                  https://www.un.org/securitycouncil/content/un-sc-consolidated-list);
                </a>{" "}
              </Text>
              <Text className={"contentClass"} mb={4}>
                4.2.5 an inBoxidual or body corporate which is otherwise
                prohibited or ineligible in any way, whether in full or in part,
                under any laws applicable to such inBoxidual or body corporate
                from accessing and/or using Persistence Products; and/or
              </Text>
              <Text className={"contentClass"} mb={4}>
                4.2.6 a U.S. person.{" "}
              </Text>
              <Text className={"contentClass"} mb={4}>
                4.3 “U.S. person” means:{" "}
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  any natural person resident in the United States;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any partnership or corporation organized or incorporated under
                  the laws of the United States;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any estate of which any executor or administrator is a U.S.
                  person;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any trust of which any trustee is a U.S. person;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any agency or branch of a foreign entity located in the United
                  States;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any non-discretionary account or similar account (other than
                  an estate or trust) held by a dealer or other fiduciary for
                  the benefit or account of a U.S. person;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any discretionary account or similar account (other than an
                  estate or trust) held by a dealer or other fiduciary
                  organized, incorporated, or (if an inBoxidual) resident in the
                  United States;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any partnership or corporation if: <br />
                  a) organized or incorporated under the laws of any foreign
                  jurisdiction; and <br />
                  b) formed by a U.S. person principally for the purpose of
                  investing in securities not registered under the Act, unless
                  it is organized or incorporated, and owned, by accredited
                  investors (as defined in Regulation D of the Securities Act of
                  1933 of the United States of America) who are not natural
                  persons, estates or trusts; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any citizen of United States who is a military personnel of
                  United States who is not resident in or outside of the United
                  States,
                </ListItem>
                <Text className={"contentClass"} mb={4}>
                  but does not include :{" "}
                </Text>
                <ListItem className={"contentClass"} mb={4}>
                  any discretionary account or similar account (other than an
                  estate or trust) held for the benefit or account of a non-U.S.
                  person by a dealer or other professional fiduciary organized,
                  incorporated, or (if an inBoxidual) resident in the United
                  States;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any estate of which any professional fiduciary acting as
                  executor or administrator is a U.S. person if:
                  <br />
                  a) an executor or administrator of the estate who is not a
                  U.S. person has sole or shared investment discretion with
                  respect to the assets of the estate; and <br />
                  b) the estate is governed by foreign law;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any trust of which any professional fiduciary acting as
                  trustee is a U.S. person, if a trustee who is not a U.S.
                  person has sole or shared investment discretion with respect
                  to the trust assets, and no beneficiary of the trust (and no
                  settlor if the trust is revocable) is a U.S. person;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  an employee benefit plan established and administered in
                  accordance with the law of a country other than the United
                  States and customary practices and documentation of such
                  country;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any agency or branch of a U.S. person located outside the
                  United States if:
                  <br />
                  a) agency or branch operates for valid business reasons; and
                  <br />
                  b) the agency or branch is engaged in the business of
                  insurance or banking and is subject to substantive insurance
                  or banking regulation, respectively, in the jurisdiction where
                  located; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  The International Monetary Fund, the International Bank for
                  Reconstruction and Development, the Inter-American Development
                  Bank, the Asian Development Bank, the African Development
                  Bank, the United Nations, and their agencies, affiliates and
                  pension plans, and any other similar international
                  organizations, their agencies, affiliates and pension plans.
                </ListItem>
              </UnorderedList>
            </Box>
            <Text className={"subHeading"}>
              <b>5. Prohibited Use</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                User shall not, directly or indirectly:
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.1 access and/or use Persistence Products:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  in violation of any law, rule, or regulation of any
                  jurisdiction that is applicable to User; and/or
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  in violation or breach of these Terms and/or any other
                  document from time-to-time governing User access and/or use of
                  Persistence Products;
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                5.2 apermit others to access Persistence Products through User’s
                wallet or a blockchain address User controls or otherwise engage
                in transactions using Persistence Products for any person other
                than the wallet owner;
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.3 disrupt, interfere with, or otherwise adversely affect the
                normal flow or function of Persistence Products or otherwise act
                in a manner that may negatively affect other users’ experience
                when using Persistence Products, and User shall not take
                advantage of software vulnerabilities and any other act that
                intentionally abuses or exploits the design and functions of
                Persistence Products;
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.4 engage in, or knowingly facilitate, any fraudulent,
                deceptive, or manipulative transaction activity in connection
                with User’s use of Persistence Products;
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.5 engage in, or knowingly facilitate, any money laundering,
                terrorist financing, or other illegal activities using
                Persistence Products;
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.6 access or attempt to access non-public systems, programs,
                data, or services using Persistence Products;
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.7 copy, reproduce, republish, upload, post, transmit, resell,
                or distribute in any way, any data, content, or any part of
                Persistence Products except as expressly permitted by applicable
                laws; and
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.8 reverse engineer or attempt to reverse engineer Persistence
                Products except as expressly permitted by applicable law,
                (collectively, “Prohibited Uses”).
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>6. Waivers</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                6.1 User agrees and acknowledges that neither the Company nor
                any of our Affiliates (as defined below) shall be liable to User
                for any direct, indirect, special, incidental, consequential or
                other losses of any kind, in tort, contract or otherwise
                (including but not limited to loss of revenue, income or
                profits, and loss of use or data), arising out of or in
                connection with User’s access and/or use of Persistence
                Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                6.2 User undertakes not to initiate or participate, and waives
                the right to participate in, any class action lawsuit or a
                class-wide arbitration against Company and/or our Affiliates in
                relation to User’s access and/or use of Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                6.3 By accepting these Terms, User waives all rights, claims
                and/or causes of action (present or future) under law (including
                any tortious claims) or contract against the Persistence
                Associated Entities and its Affiliates in connection with User’s
                access and/or use of Persistence Products.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>7. Termination</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                7.1 These Terms shall remain in full force and effect and be
                legally binding on User for so long as User accesses and/or uses
                Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                7.2 The Persistence Associated Entities may restrict, suspend
                and/or terminate User’s access and/or use of Persistence
                Products at any time for any reason and to such extent at
                Persistence Associated Entities’ sole discretion.
              </Text>
              <Text className={"contentClass"} mb={4}>
                7.3 Neither the Company nor any of our Affiliates will have any
                liability whatsoever to User for any such restriction,
                suspension and/or termination or for any action taken by the
                Company and/or any of our Affiliates to implement such
                restriction, suspension and/or termination which can include
                blacklisting User’s Supported Wallet which User uses to access
                and/or use Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                7.4 Sections 3 to 10 of these Terms shall remain in effect in
                favour of the Company and its Affiliates (as the case may be)
                notwithstanding any such restriction, suspension and/or
                termination.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>8. Disclaimer</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                8.1 In accessing and/or using Persistence Products, User
                acknowledges and agrees that:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  PERSISTENCE PRODUCTS ARE PROVIDED ON AN “AS-IS” AND “AS
                  AVAILABLE” BASIS BY THE COMPANY, AND THE PERSISTENCE
                  ASSOCIATED ENTITIES EXPRESSLY DISCLAIMS ANY AND ALL
                  REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND,
                  WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL
                  WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE
                  QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET
                  ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  THE PERSISTENCE ASSOCIATED ENTITIES HAS NOT MADE AND MAKES NO
                  REPRESENTATION, WARRANTY AND/OR CONDITION OF ANY KIND THAT
                  PERSISTENCE PRODUCTS WILL MEET USER’S REQUIREMENTS, WILL BE
                  AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE
                  BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER
                  HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  NEITHER THE COMPANY NOR ANY OF ITS AFFILIATES IS USER’S
                  BROKER, AGENT, TAX OR LEGAL ADVISOR, AND HAS NO FIDUCIARY
                  RELATIONSHIP WITH OR OBLIGATION TO USER. NO COMMUNICATION OR
                  INFORMATION PROVIDED BY PERSISTENCE ASSOCIATED ENTITIES OR ANY
                  OF ITS AFFILIATES IS INTENDED AS OR SHALL BE CONSTRUED AS
                  INVESTMENT, FINANCIAL, TAX, LEGAL OR ANY OTHER KIND OF ADVICE.
                  THE PERSISTENCE ASSOCIATED ENTITIES SHALL NOT BE LIABLE FOR
                  ANY DECISIONS USER MAKES TO ACCESS AND/OR USE PERSISTENCE
                  PRODUCTS.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  TO THE EXTENT THAT APPLICABLE LAW REQUIRES OR IMPOSES ANY
                  REPRESENTATION, WARRANTY AND/OR CONDITION WITH RESPECT TO
                  USER’S ACCESS AND/OR USE OF PERSISTENCE PRODUCTS, ALL SUCH
                  REPRESENTATION, WARRANTY AND/OR CONDITION ARE LIMITED IN
                  DURATION TO NINETY (90) DAYS FROM THE DATE OF FIRST ACCESS
                  AND/USE BY USER OF PERSISTENCE PRODUCTS.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                8.2 THE PERSISTENCE ASSOCIATED ENTITIES DOES NOT ENDORSE ANY
                THIRD PARTY AND SHALL NOT BE RESPONSIBLE IN ANY WAY FOR ANY
                TRANSACTIONS YOU ENTER INTO WITH ANY OTHER THIRD PARTY.
              </Text>
              <Text className={"contentClass"} mb={4}>
                8.3 YOU ACKNOWLEDGE AND AGREE THAT NEITHER THE COMPANY NOR ANY
                OF ITS AFFILIATES WILL BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES
                OF ANY SORT INCURRED AS THE RESULT OF ANY INTERACTIONS BETWEEN
                YOU AND ANY THIRD PARTY.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>9. Limitation of Liability</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                9.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                THE COMPANY AND/OR ANY OF OUR AFFILIATES BE LIABLE TO USER OR
                ANY THIRD PARTY FOR ANY LOST PROFITS, LOST DATA, OR ANY
                INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR
                PUNITIVE DAMAGES ARISING OUT OF USER’S ACCESS AND/OR USE OF
                PERSISTENCE PRODUCTS, EVEN IF THE COMPANY AND/OR ANY OF ITS
                AFFILIATES HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </Text>
              <Text className={"contentClass"} mb={4}>
                9.2 USER’S ACCESS TO AND/OR USE OF PERSISTENCE PRODUCTS IS AT
                USER’S OWN DISCRETION AND RISK, AND USER WILL BE SOLELY
                RESPONSIBLE FOR ANY DAMAGE TO USER’S DEVICE OR COMPUTER SYSTEM,
                OR LOSS OF DATA RESULTING THEREFROM.
              </Text>
              <Text className={"contentClass"} mb={4}>
                9.3 NEITHER THE COMPANY NOR ANY OF ITS AFFILIATES SHALL BE
                LIABLE TO USER FOR ANY LOSS OR DAMAGE ARISING OUT OF USER’S
                FAILURE TO KEEP USER’S PRIVATE KEYS OR LOGIN CREDENTIALS TO
                USER’S WALLET SECURE OR ANY OTHER UNAUTHORIZED ACCESS TO OR
                TRANSACTIONS INVOLVING USER’S WALLET.
              </Text>
              <Text className={"contentClass"} mb={4}>
                9.4 TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE
                LIABILITY OF THE COMPANY AND/OR ANY OF OUR AFFILIATES TO USER
                FOR ANY CLAIM BY USER FOR DAMAGES ARISING FROM OR RELATED TO
                USER’S ACCESS AND/OR USE OF PERSISTENCE PRODUCTS:
              </Text>{" "}
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  WHETHER PURSUANT TO THESE TERMS; AND/OR
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  WHETHER FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF
                  THE ACTION,
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                {" "}
                WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF USD100. THE
                EXISTENCE OF MORE THAN ONE CLAIM BY USER WILL NOT ENLARGE THIS
                LIMIT.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>10. Indemnification</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                10.1 User shall indemnify and hold the Company and/or any of our
                Affiliates, each of their respective employees, officers,
                directors and representatives (collectively, “Indemnified
                Party”), harmless, including costs and attorneys’ fees, from any
                loss, claim or demand made due to or arising out of:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  User’s access and/or use of Persistence Products;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User’s violation of these Terms;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  acquisition, holding or disposal of Tokens and or the use of
                  Tokens; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  User’s violation of laws or regulations applicable to User’s
                  access and/or use of Tokens.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                10.2 The relevant Indemnified Party reserves the right, at
                User’s expense, to assume the exclusive defence and control of
                any matter for which User is required to provide
                indemnification, and User agrees to cooperate in the defence of
                these claims. User shall not settle any matter without the prior
                written consent of the relevant Indemnified Party. The relevant
                Indemnified Party will use reasonable efforts to notify User of
                any such claim, action or proceeding upon becoming aware of it.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>11. Tax Implications</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                User is solely responsible for determining the tax implications
                and tax reporting requirements associated with transactions User
                engages in using Persistence Products, and for paying any
                applicable taxes in each applicable jurisdiction. Neither the
                Company nor any of our Affiliates shall be responsible for
                determining whether there are tax implications in connection
                with transactions involving User’s use of Persistence Products,
                for reporting any such transactions, or for paying any
                applicable taxes.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>
                12. Potential Risks Associated with Use of Persistence Products
              </b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                User acknowledges and agrees to the following:
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.1 Persistence Products allows User access to the Persistence
                Chain to engage in aforementioned activities on User’s own
                account and at User’s own risk.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.2 Using digital assets, staking, running nodes, providing
                liquidity and/or other forms of interfacing with digital assets
                entails a high financial risk. User has necessary experience and
                knowledge to understand the risks involved. User should
                carefully assess User’s financial circumstances and risk
                tolerance and where appropriate, seek third party financial
                advice before engaging in the aforementioned activities.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.3 Nothing in these Terms or the Website shall be construed
                as:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  financial or investment advice. We do not provide any view on
                  the merits of any particular investment. Any information
                  provided is for educational purposes and to keep investors
                  informed of prices, ranges, and volatility of digital assets
                  and derivatives thereof. No person in the Persistence
                  Associated Entities acts as your broker, intermediary, agent
                  or advisor in any capacity; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any marketing, promotion or offer for any product or
                  investment to User or any third party. User shall be solely
                  responsible for any losses, damages or costs resulting from
                  User’s reliance on any data or information on the Website or
                  otherwise. User shall be responsible for User’s decisions
                  relating to Persistence Products which are User’s own.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                12.4 Like all software, Persistence Products may be subject to
                exploits, accordingly, neither the Company nor any of its
                Affiliates shall be responsible to User any such exploits or
                loss to User as a result of such exploits, whether foreseeable
                or not.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.5 While the Company has taken a number of precautions to
                ensure the security of Persistence Products including obtaining
                or procuring the obtaining of third-party security audits, the
                technology constituting Persistence Products, and their
                interaction, is relatively new and it is not possible to
                guarantee that the code is completely free from bugs or errors.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.6 User accepts all risks that arise from User’s access and/or
                use of Persistence Products, including and not limited to, the
                risk of any of Tokens being lost due to a failure or exploit of
                Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.7 User is solely responsible for securing the private keys
                associated with any Supported Wallet which User uses when
                accessing and/or using Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.8 User understands that anyone who obtains User’s private
                keys to User’s Supported Wallet and/or access to User’s device
                containing such private keys, may access User’s Supported Wallet
                controlled with those private keys with or without User’s
                authorisation and may transfer any Tokens accessible through
                User’s Supported Wallet.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.9 In choosing to access and/or use Persistence Products, User
                does so on User’s own initiative and at User’s own risk, and
                User is responsible for complying with all applicable local
                laws, rules and regulations relating to User’s access and/or use
                of Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.10 Support for the Persistence Products may be modified or
                discontinued at any time in Persistence Associated Entities’
                sole discretion.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.11 In the event of a change in the operating rules or other
                features of the relevant code (“Fork”) that may result in more
                than one version of a network (“Forked Network”) and more than
                one version of a digital asset (“Forked Asset”), Persistence
                Products may not support activity related to any Forked Assets.
                Forked Networks and the available supply of any Forked Assets
                are wholly outside Persistence Associated Entities’ control. In
                the event of a Fork, Persistence Associated Entities may
                temporarily suspend certain services on the Website (with or
                without advance notice to User) while it is determined which
                Forked Network(s) to support. Persistence Associated Entities
                shall not be responsible for a lack of support for any Forked
                Asset.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.12 By using Persistence Products, User is using Persistence
                Products “as is” and “as available” with no representations or
                warranties whatsoever. To the maximum extent permitted by law,
                neither the Company nor any of its Affiliates makes any express
                or implied representations and warranties, including implied
                representations or warranties of accuracy, merchantability,
                fitness for a particular purpose and non-infringement in
                relation to Persistence Products. Neither the Company nor any of
                its Affiliates is responsible or liable for any error, delay or
                interruption in or lack of access to Persistence Products or for
                any loss of digital assets (including but not limited to Tokens)
                occasioned by or attributable to Persistence Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.13 Any acquisition, holding or disposal by you of Tokens is
                solely in relation to your participation in governance of
                Persistence Chain and not for any other purpose, including
                investments. You further acknowledge and agree not to acquire,
                hold, and/or dispose Tokens if doing so is prohibited or subject
                of compliance in the relevant jurisdiction applicable including
                circumstances where your interaction in Tokens results in Tokens
                and/or your activities associated with Tokens be construed by
                applicable laws and regulations (including but not limited to
                securities laws) as a regulated activity, whether or not such
                regulations require the Company and/or its Affiliates be
                registered, licensed or approved in connection with the
                activities described in the foregoing of this Section 12.13 or
                the Activities.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.14 There are inherent risks associated with distributed
                ledger technologies and blockchain-based networks which are
                experimental in nature. Transactions based on such technologies
                are generally immutable, which means that any error may result
                in transactions being irreversible.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.15 Support for the Activities whether provided by the Company
                or otherwise, may be impacted by regulatory actions which may
                disrupt, limit or cease the provision of such support.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.16 The disclaimers and warnings contained in these Terms do
                not constitute all possible risks associated with the use of
                Persistence Products. They also do not represent an on-going
                obligation to alert you to all the potential risks associated
                with the Activities.
              </Text>
              <Text className={"contentClass"} mb={4}>
                12.17 While the intent is to provide timely and accurate
                information, you acknowledge that the Website and any other
                web-landing page or interface associated with Persistence
                Products, including the Persistence Documentation may not always
                be accurate, complete, or up to date. You acknowledge that it is
                your responsibility to verify all information before relying on
                it. No representation in respect of such information is made as
                to the constant accuracy, completeness or appropriateness for
                any particular purpose.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>13. Electronic Communications</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                13.1 The communications between User and the Company shall be
                via electronic means, either through the Website or electronic
                mail.
              </Text>
              <Text className={"contentClass"} mb={4}>
                13.2 For contractual purposes, User:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  consents to receive communications from the Company in any
                  electronic form; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  acknowledges and agrees that all terms and conditions,
                  agreements, notices, disclosures, and other communications
                  that the Company provides to User electronically satisfy any
                  legal requirement that would also be satisfied if such
                  communications were to be in a hardcopy writing.
                </ListItem>
              </UnorderedList>
            </Box>
            <Text className={"subHeading"}>
              <b>14. General</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                14.1 <b>Entire Terms</b> These Terms (read together with our
                Privacy Policy) constitute the entire agreement between User and
                the Company regarding User’s access and/use of Persistence
                Products.
              </Text>
              <Text className={"contentClass"} mb={4}>
                14.2 <b>Relationship of Parties</b>: Nothing contained in these
                Terms will be deemed to be construed as creating a partnership
                or an agency relationship or joint venture between User, the
                Company and/or any of our Affiliates.
              </Text>
              <Text className={"contentClass"} mb={4}>
                14.3 <b>Assignment</b>: These Terms, and User’s rights
                thereunder, may not be assigned, without the Company’s prior
                written consent, and any attempted assignment, subcontract,
                delegation, or transfer in violation of the foregoing will be
                null and void. The Company may freely assign these Terms and our
                respective rights thereunder.
              </Text>
              <Text className={"contentClass"} mb={4}>
                14.4 <b>Waiver</b>: A waiver by the Company of any right or
                remedy under these Terms shall only be effective if it is in
                writing, executed by a duly authorized representative of the
                Company and shall apply only to the circumstances for which it
                is given. Failure of the Company to exercise or enforce any
                right or remedy under these Terms shall not operate as a waiver
                of such right or remedy, nor shall it prevent any future
                exercise or enforcement of such right or remedy, and no single
                or partial exercise of any right or remedy shall preclude or
                restrict the further exercise of any such right or remedy or
                other rights or remedies.
              </Text>
              <Text className={"contentClass"} mb={4}>
                14.5 <b>No Third-Party Rights</b>: Save for the Company’s
                Affiliates who shall have the rights and benefits to the extent
                accorded thereto under these Terms, any person who is not a
                Party shall have no right under the Contracts (Rights of Third
                Parties) Act 2001 of Singapore to enforce any of these Terms.
              </Text>
              <Text className={"contentClass"} mb={4}>
                14.6 <b>Governing Law and Jurisdiction</b>: The agreement as
                shall be constituted by User’s acceptance of these Terms, and
                any dispute or claim arising out of or in connection with the
                subject matter or formation (including non-contractual disputes
                or claims) of such agreement, shall be governed by and construed
                in accordance with the law of Singapore. The Parties agree that
                any dispute or claim arising out of or in connection with the
                subject matter or formation (including non-contractual disputes
                or claims) of these Terms shall be by arbitration, and judgment
                upon the award may be entered by any court having jurisdiction
                thereof or having jurisdiction over the relevant Party or its
                assets. The arbitration shall be conducted under the rules of
                the Singapore International Arbitration Centre (“SIAC”). The
                arbitral tribunal shall consist of a sole arbitrator to be
                appointed by the President of the SIAC. The seat of the
                arbitration shall be Singapore. The language of the arbitration
                shall be English. The arbitration agreement shall be governed by
                Singapore law.
              </Text>
              <Text className={"contentClass"} mb={4}>
                14.7 <b>Severability</b>: If any provisions of these Terms are
                found by any court or tribunal of competent jurisdiction to be
                invalid, void, unlawful or unenforceable under any applicable
                law, such unenforceability or invalidity shall not render these
                Terms unenforceable or invalid as a whole, and such provisions
                shall be deleted without affecting the remaining provisions
                herein.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Terms;

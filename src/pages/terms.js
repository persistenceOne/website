import React from "react";
import Footer from "../1components/molecules/Footer";
import { useTranslation } from "next-export-i18n";

const Terms = () => {
  const { t } = useTranslation("common");
  const mainHeading = "font-semibold text-4xl text-light-high mb-4 md:text-xl";
  const subHeading =
    "font-normal text-lg text-light-emphasis mb-4 md:text-base";
  const contentClass = "font-normal text-base text-light-mid mb-4 md:text-sm";
  return (
    <div className="container-fluid p-0 terms-sections">
      <div className="sectionContainer pb-8">
        <div className="pt-[200px] pb-[50px]">
          <h1 className={`${mainHeading} text-center`}>Terms of Use</h1>
        </div>
        <p className="text-red mb-4">Last Updated Date: 3 November 2023</p>
        <div>
          <p className={contentClass}>
            Please review these Terms of Use of pSTAKE (the <b>“Terms”</b>)
            carefully, as they set forth legally binding terms and conditions
            between you and the Company (as defined below) that govern your
            access and/or use of: (a) the website located at{" "}
            <a
              href="https://pstake.finance/"
              target="_blank"
              rel="noreferrer"
              className="text-[#3e73f0]"
            >
              https://pstake.finance/
            </a>{" "}
            and (the “Website”); (b) the pSTAKE Protocols (as defined below);
            and (c) the Persistence Chain (as defined below) and other chains on
            which the pSTAKE Protocols (as defined below) are deployed
            (collectively, the “<b>pSTAKE Deployed Chains</b>”) in respect of
            pSTAKE, including related trademarks, and other intellectual
            property, whether such access and/or use is via (i) the Website (“
            <b>Website Access</b>”) or (ii) command line, locally installed
            programs, Software Development Kits (“SDK”), software code and
            blockchain and smart contract explorers (collectively “
            <b>Direct Access</b>”). These Terms are to be read together with the
            provisions set forth in our privacy policy found at{" "}
            <a
              href="https://pstake.finance/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-[#3e73f0]"
            >
              https://pstake.finance/privacy
            </a>{" "}
            (“<b>Privacy Policy</b>”).
          </p>
          <p className={contentClass}>
            For purposes of these Terms, the Website, the pSTAKE Protocols and
            pSTAKE Deployed Chains (to the extent pSTAKE is deployed or
            integrated to such pSTAKE Deployed Chains) shall be collectively
            referred to as “<b>pSTAKE</b>”. By accessing and/or using pSTAKE,
            you (“<b>you</b>” or the “<b>User</b>”) agree to these Terms on
            behalf of yourself and any entity you represent, and you represent
            and warrant that you have the right and authority to do so.
          </p>
          <p className={contentClass}>
            pSTAKE is not intended for (a) access and/or use by Excluded Persons
            (as defined below); or (b) access and/or use by any person or entity
            in, or accessing or using the Website from, an Excluded
            Jurisdiction. Accordingly, Excluded Persons (as defined below)
            should not access and/or use pSTAKE.
          </p>
          <p className={contentClass}>
            The Website is owned and operated by PSTAKE Sub One Ltd (“
            <b>Company</b>”), an entity formed under the laws of the British
            Virgin Islands and the pSTAKE Protocols (as defined below) are
            copyrighted works belonging to the Company and/or its Affiliate(s)
            (each of User and Company, a “<b>Party</b>”, and collectively, the “
            <b>Parties</b>”).
          </p>
          <p className={contentClass}>
            You acknowledge that you shall be deemed to have accepted these
            Terms by accessing and/or using pSTAKE–whether by Website Access or
            Direct Access.
          </p>
          <p className={contentClass}>
            Company reserves the right to change these Terms in its sole
            discretion from time to time. The “<b>Date Last Revised</b>”
            specified on these Terms indicates the date on which the Terms were
            last changed. You will be notified of those changes and given the
            opportunity to review and accept the updated Terms when you next
            access and/or use pSTAKE. Your acceptance of, and/or your continued
            access and/or use of pSTAKE following notice of, the updated Terms
            shall indicate your acknowledgement of, and agreement to be bound
            by, such updated Terms.
          </p>
          <p className={contentClass}>
            By accessing the Website, you acknowledge and agree that you are
            dealing solely with the Company as counterparty in respect of your
            use of pSTAKE, which shall supersede and replace all prior
            agreements and counterparty relationships entered into with any of
            the Company’s Affiliates in respect of such use.
          </p>

          <p className={subHeading}>
            <b>1. Overview of pSTAKE</b>
          </p>
          <div>
            <p className={contentClass}>
              1.1 pSTAKE has been developed by Company to enable Users to
              undertake any one or more of the following (“
              <b>pSTAKE Activities</b>”):
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                to deploy certain digital tokens supported by pSTAKE (“
                <b>pSTAKE Supported Tokens</b>”) towards staking on the relevant
                pSTAKE Deployed Chain (including IBC-enabled blockchains, and
                other supported blockchains which are Ethereum Virtual
                Machine-compatible) on a non-custodial basis whilst retaining
                control of liquidity of the underlying staked digital token; and
              </li>
              <li className={contentClass}>
                such other functions or features as may be provided through
                pSTAKE.
              </li>
            </ul>

            <p className={contentClass}>
              1.2 pSTAKE enables Users to undertake pSTAKE Activities through
              the use computer code written based on various blockchain standard
              and programming languages (collectively, “<b>pSTAKE Protocols</b>
              ”) as developed and published by Company or its Affiliate(s) at
              pSTAKE’s official Github page (“<b>Github Page</b>”).
            </p>

            <p className={contentClass}>1.3 For purposes of these Terms:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                “<b>Affiliates</b>” of an entity means the owners, directors,
                officers, employees, advisors, and agents of such entity and
                companies in which such entity has an interest;
              </li>
              <li className={contentClass}>
                “<b>Persistence Chain</b>” means the blockchain known as
                Persistence Core-1 chain developed based on the Cosmos SDK;
              </li>
              <li className={contentClass}>
                “<b>pSTAKE Documentation</b>” means the document repository
                accessible at{" "}
                <a
                  href="https://docs.pstake.finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                >
                  https://docs.pstake.finance/
                </a>{" "}
                and all its associated links;
              </li>
              <li className={contentClass}>
                “<b>pSTAKE Group</b>” refers to the Company and its Affiliates
                and its respective Affiliates;
              </li>
              <li className={contentClass}>
                “<b>PSTAKE Token</b>” refers to the governance token of pSTAKE,
                which purpose and function is to facilitate decentralised
                decision-making in respect of pSTAKE;
              </li>
              <li className={contentClass}>
                “<b>IBC</b>” means the Inter-Blockchain Communication Protocol;
                and
              </li>
              <li className={contentClass}>
                “<b>Supported Wallet</b>” in relation to pSTAKE, means such
                digital wallet of User as may be supported by pSTAKE;
              </li>
            </ul>
            <p className={contentClass}>a reference to:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                a “person” includes a reference to any individual, body
                corporate, unincorporated association or partnership;
              </li>
              <li className={contentClass}>
                an agreement or other document is a reference to that agreement
                or document as from time to time supplemented or amended;
              </li>
              <li className={contentClass}>
                the masculine gender includes the feminine and neuter genders
                and vice versa;
              </li>
              <li className={contentClass}>
                the singular includes the plural and vice versa; and
              </li>
              <li className={contentClass}>
                any law or regulation is a reference to that law or regulation
                as amended from time to time and, where the same has been
                repealed, to any re-enactment or replacement of the same.
              </li>
            </ul>
            <p className={contentClass}>1.4 Website Access</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                The Website is a user interface designed by Company to
                facilitate use of the pSTAKE Protocols by providing a
                user-friendly interface to access and/or use the pSTAKE
                Protocols, although the pSTAKE Protocols are also accessible /
                can be used via Direct Access. Company may modify or discontinue
                support for the Website at any time, in its sole discretion.
              </li>
              <li className={contentClass}>
                You are hereby granted a non-exclusive, non-transferable,
                revocable, limited licence to electronically access and use the
                Website in the manner described in these Terms. You do not have
                the right, and nothing in these Terms shall be construed as
                granting you the right, to sub-license any rights in connection
                with the access and/or use of the Website. Company may revoke or
                terminate this licence at any time if you use, or attempt to
                use, the Website in a manner prohibited by these Terms, or if
                your rights under these Terms are terminated pursuant to Section
                7.
              </li>
            </ul>
            <p className={contentClass}>1.5 Direct Access</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                With the necessary technical expertise, it is possible for a
                User to generate transaction messages to interact with the
                pSTAKE Protocols via Direct Access directly without use of the
                Website. Company is not involved in and has no oversight of any
                Direct Access and expressly disclaims all responsibility, and
                User acknowledges that Company and its Affiliates shall have no
                responsibility for any loss occasioned to a User by or
                attributable to Direct Access.
              </li>
            </ul>
            <p className={contentClass}>1.6 pSTAKE Protocols.</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                Apart from Website Access and Direct Access, the pSTAKE
                Protocols may also be accessible now or in the future through
                other applications built on the pSTAKE Deployed Chains.
              </li>
              <li className={contentClass}>
                The pSTAKE Protocols are open-source software accessible at the
                Github Page, and are maintained and modifiable by the Company
                (and/or its Affiliates). You agree that save for the right to
                access and/or use the pSTAKE Protocols on the terms expressly
                provided herein, you shall not acquire and/or own any legal
                right, title and/or interest in the pSTAKE Protocols or any
                intellectual property rights associated thereto, which shall be
                wholly owned by the Company (and/or its Affiliates).
              </li>
            </ul>
            <p className={contentClass}>1.7 Transaction Fees.</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                Transaction fees (“<b>Transaction Fees</b>”) shall be chargeable
                to a User for certain pSTAKE-related transactions (each, a “
                <b>pSTAKE Transaction</b>”) – whether in relation to liquid
                staking or unstaking – whether executed through the pSTAKE
                Protocols, or otherwise. Please refer to the Website or the
                pSTAKE Documentation for the relevant fees which may change from
                time to time.
              </li>
              <li className={contentClass}>
                User hereby consents to such fees (if applicable) being debited
                from such User’s pSTAKE Deployed Chain-compatible wallet that
                such User connects to the pSTAKE Protocols for purposes of
                effecting a pSTAKE Transaction, at the time such pSTAKE
                Transaction is processed. Similar transaction fees may also be
                levied on Users accessing and using the pSTAKE Protocols via
                Direct Access.
              </li>
              <li className={contentClass}>
                Such Transaction Fees are subject to variation through
                decentralised on-chain governance with such variation
                implemented by Company via variations to the pSTAKE Protocols.
              </li>
            </ul>
            <p className={contentClass}>
              1.8 <b>Non-circumvention</b>: You agree not to do anything,
              including the use of any technology such as virtual private
              networks (VPN) for the purposes of circumventing these Terms.
            </p>
            <p className={contentClass}>
              <b>Sole and exclusive use of IP address:</b> You shall not use
              another person’s IP address and neither will you allow another
              person to use your IP address associated with your use of pSTAKE.
              You hereby declare and represent that the IP address associated
              with your use of pSTAKE is unique and exclusive to you and shall
              remain as such.
            </p>
          </div>
          <p className={subHeading}>
            <b>2. Using pSTAKE</b>
          </p>
          <div>
            <p className={contentClass}>2.1 Liquid Staking</p>
            <ul>
              <li className={contentClass}>
                Liquid staking may be effected via the “Stake” feature
                accessible through the Website or Direct Access, subject to the
                unbonding parameters of the relevant pSTAKE Deployed Chain which
                the liquid staked token is native and the pSTAKE Protocols’
                parameters;
              </li>
              <li className={contentClass}>
                Liquid staked tokens can be unstaked via the “Unstake” feature
                accessible through the Website or Direct Access, subject to the
                unbonding parameters of the relevant blockchain which the liquid
                staked token is native and the pSTAKE Protocols’ parameters;
                <br />
                for purposes of these Terms, “<b>Liquid Staking</b>” shall
                broadly refer to the activities described in Sections 2.1(a) and
                2.1(b) and all other activities ancillary in respect thereof
                through the use of the pSTAKE Protocols;
              </li>
              <li className={contentClass}>
                A User accessing and/or using pSTAKE to effect Liquid Staking is
                deemed to have read and understood the pSTAKE Documentation, and
                acknowledges and accepts all risks and fees relating to Liquid
                Staking, including but not limited to:
                <ul className={"list-decimal pl-5"}>
                  <li className={contentClass}>
                    all Transaction Fees incurred in connection with Liquid
                    Staking;
                  </li>
                  <li className={contentClass}>
                    risks associated with slippage and/or lack of liquidity
                    available in respect of liquid staked tokens; and
                  </li>
                  <li className={contentClass}>
                    technological risks associated with blockchain technology,
                    smart contracts, on which pSTAKE is developed, which may be
                    subject of potential hacks, exploits and compromise
                    (including risks associated with third-party integrations
                    available for use in association with pSTAKE e.g. Metamask,
                    Keplr, etc.).
                  </li>
                </ul>
                <b>
                  {" "}
                  The Company and its Affiliates shall have no responsibility
                  for any loss occasioned to such User who shall have no claim
                  against Company and its Affiliates in respect thereof.
                </b>
              </li>
            </ul>
          </div>
          <p className={subHeading}>
            <b>3. Representations and Warranties</b>
          </p>
          <div>
            <p className={contentClass}>
              3.1 In accessing and/or using pSTAKE and/or connecting a Supported
              Wallet to pSTAKE, User makes the following representations and
              warranties:
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                User is at least eighteen (18) years of age, and has the full
                right, power and authority to access and/or use pSTAKE
                (including the tools made available via pSTAKE), and to enter
                into and comply with these Terms;
              </li>
              <li className={contentClass}>
                User is not prohibited and/or restricted under the laws of any
                jurisdiction applicable to User from accessing and/or using
                pSTAKE, and/or from using the Supported Wallet in connection
                with User’s use of pSTAKE;
              </li>
              <li className={contentClass}>
                User is compliant with all laws of any jurisdiction applicable
                to User in relation to User’s access and/or use of pSTAKE and
                acknowledges and agrees that the pSTAKE Group is not liable for
                User’s compliance or non-compliance with any such laws;
              </li>
              <li className={contentClass}>
                User’s access and/or use of pSTAKE does not require the Company
                or any other entity associated with pSTAKE to be registered,
                licensed or granted approval in order for User to use or
                continue using pSTAKE;
              </li>
              <li className={contentClass}>
                User is not an Excluded Person (as defined below), and User is
                not accessing and/or using pSTAKE from an Excluded Jurisdiction
                (as defined below);
              </li>
              <li className={contentClass}>
                User has not had User’s access or use of pSTAKE previously
                terminated or revoked for any reason whatsoever;
              </li>
              <li className={contentClass}>
                User will not, and will not attempt to, authorize anyone other
                than User to access and/or use pSTAKE using a Supported Wallet
                owned by User, or otherwise engage in Prohibited Use (as defined
                below) of such Supported Wallet;
              </li>
              <li className={contentClass}>
                User is the legal and beneficial owner of, or is authorized by
                the owner of the Supported Wallet to hold and/or deploy, the
                pSTAKE Supported Token; and
              </li>
              <li className={contentClass}>
                User is knowledgeable in using and evaluating blockchain
                technologies and related blockchain-based digital assets,
                including pSTAKE, pSTAKE Supported Tokens and Supported Wallets,
                and User has evaluated and understands the use of pSTAKE and has
                not relied on any information, statement, representation, or
                warranty, express or implied, made by or on behalf of pSTAKE
                Group with respect to pSTAKE whether as regards the suitability,
                reliability, security or otherwise of pSTAKE and/or pSTAKE
                Protocols.
              </li>
            </ul>
            <p className={contentClass}>
              Each and all of User’s above representations and warranties are
              true, complete, accurate and not misleading from the time of
              User’s acceptance of these Terms and are deemed repeated each time
              User uses pSTAKE.
            </p>
            <p className={contentClass}>
              3.2{" "}
              <b>
                By accessing and/or using pSTAKE, User acknowledges and accepts
                that the pSTAKE Group shall not be liable to User for the
                deployment and maintenance of pSTAKE and/or any malfunction
                thereof.
              </b>
            </p>
            <p className={contentClass}>
              3.3 Company may, in its sole discretion, modify or discontinue
              support (to the extent it is able to or practically able to) for
              pSTAKE and/or access to the pSTAKE Protocols at any time.{" "}
            </p>
            <p className={contentClass}>
              3.4 User shall be responsible for obtaining the data network
              access necessary to use and/or access pSTAKE, and for acquiring
              compatible hardware or device necessary to access and use pSTAKE
              and any updates thereto.{" "}
            </p>
            <p className={contentClass}>
              3.5 Use of pSTAKE may be disrupted as a result of malfunction
              and/or delays which are inherent to the use of the internet and
              electronic communications, and User agrees that the pSTAKE Group
              shall not be responsible for any such disruption, malfunction
              and/or delay, and any loss which may arise therefrom.{" "}
            </p>
            <p className={contentClass}>
              3.6 The Website and its contents are our property or the property
              of our licensors and are protected by copyright, trademark, patent
              and other applicable laws. User is permitted to download and print
              content from the Website solely for such User’s own personal use
              to the extent required to access and use the tools and information
              made available via the Website. Unless with our prior written
              consent, the Website and its contents must not be reproduced,
              modified, redistributed or otherwise used for any other reason.
            </p>
            <p className={contentClass}>
              3.7 User shall not modify, adapt or hack the Website and/or
              pSTAKE, or modify any other website and/or protocol so as to
              falsely imply that such other website and/or protocol is
              associated with the Website and/or pSTAKE and/or its Affiliates
              (as defined below) in any way. User shall not crawl, scrape, cache
              or otherwise access any content from the Website via automated
              means, and User shall not use automated data collection, data
              mining, robots or any other data gathering methods of any kind on
              the Website and/or pSTAKE.{" "}
            </p>
            <p className={contentClass}>
              3.8 User may, through hyperlinks displayed on the Website, gain
              access to websites operated by persons other than pSTAKE. Such
              hyperlinks are displayed only for User’s convenience, and we
              assume no responsibility for the use of any third-party software
              or other materials on the Website.
            </p>
          </div>
          <p className={subHeading}>
            <b>4. Excluded Person and Excluded Jurisdiction</b>
          </p>
          <div>
            <p className={contentClass}>
              {" "}
              <b>For purposes of these Terms:</b>
            </p>
            <p className={contentClass}>
              4.1 “<b>Excluded Jurisdiction</b>” means any of the following
              jurisdictions:
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                the United States of America and its territories and possessions
                (collectively “<b>United States</b>”);
              </li>
              <li className={contentClass}>the People’s Republic of China;</li>
              <li className={contentClass}>
                a jurisdiction identified by the Financial Action Task Force
                (FATF) for strategic AML/CFT deficiencies and included in FATF’s
                listing of “High-risk and Other Monitored Jurisdictions”
                accessible at{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                  href={
                    "http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions;"
                  }
                >
                  http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions;
                </a>{" "}
                and/or
              </li>
              <li className={contentClass}>
                a jurisdiction in which pSTAKE and the use of which are
                prohibited or would be subject of licensing, permissions or
                approvals.
              </li>
            </ul>
            <p className={contentClass}>
              4.2 “<b>Excluded Persons</b>” refers to the following:
            </p>
            <ul className="list-disc pl-5">
              <li className={contentClass}>
                a person who is:
                <ul className={"list-decimal pl-5"}>
                  <li className={contentClass}>
                    a citizen of an Excluded Jurisdiction (which for purposes of
                    this Section 4.2.1(a) shall not include United States);
                  </li>
                  <li className={contentClass}>
                    domiciled in, resident of, or physically present / located
                    in an Excluded Jurisdiction;
                  </li>
                </ul>
              </li>
              <li className={contentClass}>
                a body corporate:{" "}
                <ul className={"list-decimal pl-5"}>
                  <li className={contentClass}>
                    which is incorporated in, or operates out of, an Excluded
                    Jurisdiction; or
                  </li>
                  <li className={contentClass}>
                    which is under the control of one or more individuals who
                    is/are citizen(s) of, domiciled in, residents of, or
                    physically present / located in, an Excluded Jurisdiction;
                  </li>
                </ul>
              </li>
              <li className={contentClass}>
                an individual or body corporate accessing and/or using pSTAKE
                from within an Excluded Jurisdiction;
              </li>
              <li className={contentClass}>
                an individual or body corporate included in United Nations
                Consolidated List (accessible at{" "}
                <a
                  href="https://www.un.org/securitycouncil/content/un-sc-consolidated-list)"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                >
                  https://www.un.org/securitycouncil/content/un-sc-consolidated-list)
                </a>
              </li>
              <li className={contentClass}>
                an individual or body corporate which is otherwise prohibited or
                ineligible in any way, whether in full or in part, under any
                laws applicable to such individual or body corporate from
                accessing and/or using pSTAKE; and/or
              </li>
              <li className={contentClass}>a U.S. person.</li>
            </ul>
            <p className={contentClass}>4.3 “U.S. person” means:</p>
            <ul className="list-disc pl-5">
              <li className={contentClass}>
                any natural person resident in the United States;
              </li>
              <li className={contentClass}>
                any partnership or corporation organized or incorporated under
                the laws of the United States;
              </li>
              <li className={contentClass}>
                any estate of which any executor or administrator is a U.S.
                person;
              </li>
              <li className={contentClass}>
                any trust of which any trustee is a U.S. person;
              </li>
              <li className={contentClass}>
                any agency or branch of a foreign entity located in the United
                States;
              </li>
              <li className={contentClass}>
                any non-discretionary account or similar account (other than an
                estate or trust) held by a dealer or other fiduciary for the
                benefit or account of a U.S. person;
              </li>
              <li className={contentClass}>
                any discretionary account or similar account (other than an
                estate or trust) held by a dealer or other fiduciary organized,
                incorporated, or (if an individual) resident in the United
                States;{" "}
              </li>
              <li className={contentClass}>
                any partnership or corporation if:
                <ul className="list-decimal pl-5">
                  <li className={contentClass}>
                    organized or incorporated under the laws of any foreign
                    jurisdiction; and
                  </li>
                  <li className={contentClass}>
                    formed by a U.S. person principally for the purpose of
                    investing in securities not registered under the Act, unless
                    it is organized or incorporated, and owned, by accredited
                    investors (as defined in Regulation D of the Securities Act
                    of 1933 of the United States of America) who are not natural
                    persons, estates or trusts; and
                  </li>
                </ul>
              </li>
              <li className={contentClass}>
                any citizen of United States who is a military personnel of
                United States who is not resident in or outside of the United
                States,
              </li>
              <p className={contentClass}>but does not include :</p>
              <li className={contentClass}>
                any discretionary account or similar account (other than an
                estate or trust) held for the benefit or account of a non-U.S.
                person by a dealer or other professional fiduciary organized,
                incorporated, or (if an individual) resident in the United
                States;
              </li>
              <li className={contentClass}>
                any estate of which any professional fiduciary acting as
                executor or administrator is a U.S. person if:
                <ul className="list-decimal pl-5">
                  <li className={contentClass}>
                    an executor or administrator of the estate who is not a U.S.
                    person has sole or shared investment discretion with respect
                    to the assets of the estate; and
                  </li>
                  <li className={contentClass}>
                    the estate is governed by foreign law;
                  </li>
                </ul>
              </li>
              <li className={contentClass}>
                any trust of which any professional fiduciary acting as trustee
                is a U.S. person, if a trustee who is not a U.S. person has sole
                or shared investment discretion with respect to the trust
                assets, and no beneficiary of the trust (and no settlor if the
                trust is revocable) is a U.S. person;
              </li>
              <li className={contentClass}>
                an employee benefit plan established and administered in
                accordance with the law of a country other than the United
                States and customary practices and documentation of such
                country;
              </li>
              <li className={contentClass}>
                any agency or branch of a U.S. person located outside the United
                States if:
                <ul className="list-decimal pl-5">
                  <li className={contentClass}>
                    agency or branch operates for valid business reasons; and
                  </li>
                  <li className={contentClass}>
                    the agency or branch is engaged in the business of insurance
                    or banking and is subject to substantive insurance or
                    banking regulation, respectively, in the jurisdiction where
                    located; and
                  </li>
                </ul>
              </li>
              <li className={contentClass}>
                The International Monetary Fund, the International Bank for
                Reconstruction and Development, the Inter-American Development
                Bank, the Asian Development Bank, the African Development Bank,
                the United Nations, and their agencies, affiliates and pension
                plans, and any other similar international organizations, their
                agencies, affiliates and pension plans.
              </li>
            </ul>
          </div>
          <p className={subHeading}>
            <b>5. Prohibited Use</b>
          </p>
          <div>
            <p className={contentClass}>
              {" "}
              <b>User shall not, directly or indirectly:</b>
            </p>
            <p className={contentClass}>5.1 access and/or use pSTAKE:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                in violation of any law, rule, or regulation of any jurisdiction
                that is applicable to User; and/or
              </li>
              <li className={contentClass}>
                in violation or breach of these Terms and/or any other document
                from time-to-time governing User access and/or use of pSTAKE;
              </li>
            </ul>
            <p className={contentClass}>
              5.2 permit others to access pSTAKE through User’s wallet or a
              blockchain address User controls or otherwise engage in
              transactions using pSTAKE for any person other than the wallet
              owner;
            </p>
            <p className={contentClass}>
              5.3 disrupt, interfere with, or otherwise adversely affect the
              normal flow or function of pSTAKE or otherwise act in a manner
              that may negatively affect other users’ experience when using
              pSTAKE, and User shall not take advantage of software
              vulnerabilities and any other act that intentionally abuses or
              exploits the design and functions of pSTAKE;
            </p>
            <p className={contentClass}>
              5.4 engage in, or knowingly facilitate, any fraudulent, deceptive,
              or manipulative transaction activity in connection with User’s use
              of pSTAKE;
            </p>
            <p className={contentClass}>
              5.5 engage in, or knowingly facilitate, any money laundering,
              terrorist financing, or other illegal activities using pSTAKE;
            </p>
            <p className={contentClass}>
              5.6 access or attempt to access non-public systems, programs,
              data, or services using pSTAKE;
            </p>
            <p className={contentClass}>
              5.7 copy, reproduce, republish, upload, post, transmit, resell, or
              distribute in any way, any data, content, or any part of pSTAKE
              except as expressly permitted by applicable laws; and
            </p>
            <p className={contentClass}>
              5.8 reverse engineer or attempt to reverse engineer pSTAKE except
              as expressly permitted by applicable law, (collectively,
              “Prohibited Uses”)
            </p>
          </div>
          <p className={subHeading}>
            <b>6. Waivers</b>
          </p>
          <div>
            <p className={contentClass}>
              6.1 User agrees and acknowledges that neither pSTAKE nor any of
              our Affiliates (as defined below) shall be liable to User for any
              direct, indirect, special, incidental, consequential or other
              losses of any kind, in tort, contract or otherwise (including but
              not limited to loss of revenue, income or profits, and loss of use
              or data), arising out of or in connection with User’s access
              and/or use of pSTAKE.
            </p>
            <p className={contentClass}>
              6.2 User undertakes not to initiate or participate, and waives the
              right to participate in, any class action lawsuit or a class-wide
              arbitration against pSTAKE and/or our Affiliates in relation to
              User’s access and/or use of pSTAKE.
            </p>
            <p className={contentClass}>
              6.3 By accepting these Terms, User waives all rights, claims
              and/or causes of action (present or future) under law (including
              any tortious claims) or contract against the pSTAKE Group and its
              Affiliates in connection with User’s access and/or use of pSTAKE.
            </p>
          </div>
          <p className={subHeading}>
            <b>7. Termination</b>
          </p>
          <div>
            <p className={contentClass}>
              7.1 These Terms shall remain in full force and effect and be
              legally binding on User for so long as User accesses and/or uses
              pSTAKE.
            </p>
            <p className={contentClass}>
              7.2 The pSTAKE Group may restrict, suspend and/or terminate User’s
              access and/or use of pSTAKE at any time for any reason and to such
              extent at pSTAKE Group’s sole discretion.
            </p>
            <p className={contentClass}>
              7.3 Neither the Company nor any of our Affiliates will have any
              liability whatsoever to User for any such restriction, suspension
              and/or termination or for any action taken by the Company and/or
              any of our Affiliates to implement such restriction, suspension
              and/or termination which can include blacklisting User’s Supported
              Wallet which User uses to access and/or use pSTAKE.
            </p>
            <p className={contentClass}>
              7.4 Sections 3 to 10 of these Terms shall remain in effect in
              favour of the Company and its Affiliates (as the case may be)
              notwithstanding any such restriction, suspension and/or
              termination.
            </p>
          </div>
          <p className={subHeading}>
            <b>8. Disclaimer</b>
          </p>
          <div>
            <p className={contentClass}>
              8.1 In accessing and/or using pSTAKE, User acknowledges and agrees
              that:
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                PSTAKE IS PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS BY THE
                COMPANY, AND THE pSTAKE GROUP EXPRESSLY DISCLAIMS ANY AND ALL
                REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND,
                WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES
                OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS
                FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR
                NON-INFRINGEMENT.
              </li>
              <li className={contentClass}>
                THE PSTAKE GROUP HAS NOT MADE AND MAKES NO REPRESENTATION,
                WARRANTY AND/OR CONDITION OF ANY KIND THAT PSTAKE WILL MEET
                USER’S REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED,
                TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE,
                RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE,
                LEGAL, OR SAFE.
              </li>
              <li className={contentClass}>
                NEITHER PSTAKE NOR ANY OF ITS AFFILIATES IS USER’S BROKER,
                AGENT, TAX OR LEGAL ADVISOR, AND HAS NO FIDUCIARY RELATIONSHIP
                WITH OR OBLIGATION TO USER. NO COMMUNICATION OR INFORMATION
                PROVIDED BY PSTAKE OR ANY OF ITS AFFILIATES IS INTENDED AS OR
                SHALL BE CONSTRUED AS INVESTMENT, FINANCIAL, TAX, LEGAL OR ANY
                OTHER KIND OF ADVICE. THE pSTAKE GROUP SHALL NOT BE LIABLE FOR
                ANY DECISIONS USER MAKES TO ACCESS AND/OR USE PSTAKE.
              </li>
              <li className={contentClass}>
                TO THE EXTENT THAT APPLICABLE LAW REQUIRES OR IMPOSES ANY
                REPRESENTATION, WARRANTY AND/OR CONDITION WITH RESPECT TO USER’S
                ACCESS AND/OR USE OF PSTAKE, ALL SUCH REPRESENTATION, WARRANTY
                AND/OR CONDITION ARE LIMITED IN DURATION TO NINETY (90) DAYS
                FROM THE DATE OF FIRST ACCESS AND/USE BY USER OF PSTAKE.
              </li>
            </ul>
            <p className={contentClass}>
              8.2 THE PSTAKE GROUP DOES NOT ENDORSE ANY THIRD PARTY AND SHALL
              NOT BE RESPONSIBLE IN ANY WAY FOR ANY TRANSACTIONS YOU ENTER INTO
              WITH ANY OTHER THIRD PARTY.
            </p>
            <p className={contentClass}>
              8.3 YOU ACKNOWLEDGE AND AGREE THAT NEITHER THE COMPANY NOR ANY OF
              ITS AFFILIATES WILL BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES OF
              ANY SORT INCURRED AS THE RESULT OF ANY INTERACTIONS BETWEEN YOU
              AND ANY THIRD PARTY.
            </p>
          </div>
          <p className={subHeading}>
            <b>9. Limitation of Liability</b>
          </p>
          <div>
            <p className={contentClass}>
              9.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
              PSTAKE AND/OR ANY OF OUR AFFILIATES BE LIABLE TO USER OR ANY THIRD
              PARTY FOR ANY LOST PROFITS, LOST DATA, OR ANY INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES
              ARISING OUT OF USER’S ACCESS AND/OR USE OF PSTAKE, EVEN IF THE
              COMPANY AND/OR ANY OF ITS AFFILIATES HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className={contentClass}>
              9.2 USER’S ACCESS TO AND/OR USE OF PSTAKE IS AT USER’S OWN
              DISCRETION AND RISK, AND USER WILL BE SOLELY RESPONSIBLE FOR ANY
              DAMAGE TO USER’S DEVICE OR COMPUTER SYSTEM, OR LOSS OF DATA
              RESULTING THEREFROM.
            </p>
            <p className={contentClass}>
              9.3 NEITHER THE COMPANY NOR ANY OF ITS AFFILIATES SHALL BE LIABLE
              TO USER FOR ANY LOSS OR DAMAGE ARISING OUT OF USER’S FAILURE TO
              KEEP USER’S PRIVATE KEYS OR LOGIN CREDENTIALS TO USER’S WALLET
              SECURE OR ANY OTHER UNAUTHORIZED ACCESS TO OR TRANSACTIONS
              INVOLVING USER’S WALLET.
            </p>
            <p className={contentClass}>
              9.4 TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE
              LIABILITY OF THE COMPANY AND/OR ANY OF OUR AFFILIATES TO USER FOR
              ANY CLAIM BY USER FOR DAMAGES ARISING FROM OR RELATED TO USER’S
              ACCESS AND/OR USE OF PSTAKE:
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                WHETHER PURSUANT TO THESE TERMS; AND/OR
              </li>
              <li className={contentClass}>
                WHETHER FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF
                THE ACTION,
              </li>
            </ul>
            <p className={contentClass}>
              WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF USD100. THE EXISTENCE
              OF MORE THAN ONE CLAIM BY USER WILL NOT ENLARGE THIS LIMIT.
            </p>
          </div>
          <p className={subHeading}>
            <b>10. Indemnification</b>
          </p>
          <div>
            <p className={contentClass}>
              10.1 User shall indemnify and hold the Company and/or any of our
              Affiliates, each of their respective employees, officers,
              directors and representatives (collectively, “
              <b>Indemnified Party</b>”), harmless, including costs and
              attorneys’ fees, from any loss, claim or demand made due to or
              arising out of:
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                User’s access and/or use of pSTAKE;
              </li>
              <li className={contentClass}>
                User’s violation of these Terms;{" "}
              </li>
              <li className={contentClass}>
                acquisition, holding or disposal of PSTAKE Tokens and or the use
                of PSTAKE Tokens; and
              </li>
              <li className={contentClass}>
                User’s violation of laws or regulations applicable to User’s
                access and/or use of pSTAKE.
              </li>
            </ul>
            <p className={contentClass}>
              10.2 The relevant Indemnified Party reserves the right, at User’s
              expense, to assume the exclusive defence and control of any matter
              for which User is required to provide indemnification, and User
              agrees to cooperate in the defence of these claims. User shall not
              settle any matter without the prior written consent of the
              relevant Indemnified Party. The relevant Indemnified Party will
              use reasonable efforts to notify User of any such claim, action or
              proceeding upon becoming aware of it.
            </p>
          </div>
          <p className={subHeading}>
            <b>11. Tax Implications</b>
          </p>
          <div>
            <p className={contentClass}>
              User is solely responsible for determining the tax implications
              and tax reporting requirements associated with transactions User
              engages in using pSTAKE, and for paying any applicable taxes in
              each applicable jurisdiction. Neither pSTAKE nor any of our
              Affiliates shall be responsible for determining whether there are
              tax implications in connection with transactions involving User’s
              use of pSTAKE, for reporting any such transactions, or for paying
              any applicable taxes.
            </p>
          </div>
          <p className={subHeading}>
            <b>12. Potential Risks Associated with Use of pSTAKE</b>
          </p>
          <div>
            <p className={contentClass}>
              User acknowledges and agrees to the following:
            </p>
            <p className={contentClass}>
              12.1 pSTAKE allows User access to the pSTAKE Smart Contract to
              engage in aforementioned activities on User’s own account and at
              User’s own risk.
            </p>
            <p className={contentClass}>
              12.2 Using digital assets, staking, providing liquidity and/or
              other forms of interfacing with digital assets entails a high
              financial risk. User has necessary experience and knowledge to
              understand the risks involved. User should carefully assess User’s
              financial circumstances and risk tolerance and where appropriate,
              seek third party financial advice before engaging in the
              aforementioned activities.
            </p>
            <p className={contentClass}>
              12.3 Nothing in these Terms or the Website shall be construed as:
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                inancial or investment advice. We do not provide any view on the
                merits of any particular investment. Any information provided is
                for educational purposes and to keep investors informed of
                prices, ranges, and volatility of digital assets and derivatives
                thereof. No person in the pSTAKE Group acts as your broker,
                intermediary, agent or advisor in any capacity; and{" "}
              </li>
              <li className={contentClass}>
                any marketing, promotion or offer for any product or investment
                to User or any third party. User shall be solely responsible for
                any losses, damages or costs resulting from User’s reliance on
                any data or information on the Website or otherwise. User shall
                be responsible for User’s decisions relating to pSTAKE which are
                User’s own.
              </li>
            </ul>
            <p className={contentClass}>
              12.4 Like all software, pSTAKE may be subject to exploits,
              accordingly, neither the Company nor any of its Affiliates shall
              be responsible to User any such exploits or loss to User as a
              result of such exploits, whether foreseeable or not.
            </p>
            <p className={contentClass}>
              12.5 While the Company has taken a number of precautions to ensure
              the security of pSTAKE including obtaining third-party security
              audits, the technology constituting pSTAKE, and their interaction,
              is relatively new and it is not possible to guarantee that the
              code is completely free from bugs or errors.
            </p>
            <p className={contentClass}>
              12.6 User accepts all risks that arise from User’s access and/or
              use of pSTAKE, including and not limited to, the risk of any of
              pSTAKE Supported Tokens being lost due to a failure or exploit of
              pSTAKE.
            </p>
            <p className={contentClass}>
              12.7 User is solely responsible for securing the private keys
              associated with any Supported Wallet which User uses when
              accessing and/or using pSTAKE.
            </p>
            <p className={contentClass}>
              12.8 User understands that anyone who obtains User’s private keys
              to User’s Supported Wallet and/or access to User’s device
              containing such private keys, may access User’s Supported Wallet
              controlled with those private keys with or without User’s
              authorisation and may transfer any pSTAKE Supported Tokens
              accessible through User’s Supported Wallet.
            </p>
            <p className={contentClass}>
              12.9 In choosing to access and/or use pSTAKE, User does so on
              User’s own initiative and at User’s own risk, and User is
              responsible for complying with all applicable local laws, rules
              and regulations relating to User’s access and/or use of pSTAKE.
            </p>
            <p className={contentClass}>
              12.10 Support for the pSTAKE may be modified or discontinued at
              any time in pSTAKE Group’s sole discretion.
            </p>
            <p className={contentClass}>
              12.11 In the event of a change in the operating rules or other
              features of the relevant code (“Fork”) that may result in more
              than one version of a network (“Forked Network”) and more than one
              version of a digital asset (“Forked Asset”), pSTAKE may not
              support activity related to any Forked Assets. Forked Networks and
              the available supply of any Forked Assets are wholly outside
              pSTAKE Group’s control. In the event of a Fork, pSTAKE Group may
              temporarily suspend certain services on the Website (with or
              without advance notice to User) while it is determined which
              Forked Network(s) to support. pSTAKE Group shall not be
              responsible for a lack of support for any Forked Asset.
            </p>
            <p className={contentClass}>
              12.12 By using pSTAKE, User is using pSTAKE “as is” and “as
              available” with no representations or warranties whatsoever. To
              the maximum extent permitted by law, neither the Company nor any
              of its Affiliates makes any express or implied representations and
              warranties, including implied representations or warranties of
              accuracy, merchantability, fitness for a particular purpose and
              non-infringement in relation to pSTAKE. Neither the Company nor
              any of its Affiliates is responsible or liable for any error,
              delay or interruption in or lack of access to pSTAKE or for any
              loss of digital assets (including but not limited to pSTAKE
              Supported Tokens) occasioned by or attributable to the pSTAKE.
            </p>
            <p className={contentClass}>
              12.13 Any acquisition, holding or disposal by you of PSTAKE Tokens
              is solely in relation to your participation in governance of
              pSTAKE and not for any other purpose, including investments. You
              further acknowledge and agree not to acquire, hold, and/or dispose
              PSTAKE Tokens if doing so is prohibited or subject of compliance
              in the relevant jurisdiction applicable including circumstances
              where your interaction in PSTAKE Tokens results in PSTAKE Tokens
              and/or your activities associated with PSTAKE Tokens be construed
              by applicable laws and regulations (including but not limited to
              securities laws) as a regulated activity, whether or not such
              regulations require the Company and/or its Affiliates be
              registered, licensed or approved in connection with the activities
              described in the foregoing of this Section 12.13 or the pSTAKE
              Activities.{" "}
            </p>
          </div>
          <p className={subHeading}>
            <b>13. Electronic Communications</b>
          </p>
          <div>
            <p className={contentClass}>
              13.1 The communications between User and the Company shall be via
              electronic means, either through the Website or electronic mail.
            </p>
            <p className={contentClass}>13.2 For contractual purposes, User:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                consents to receive communications from the Company in any
                electronic form; and
              </li>
              <li className={contentClass}>
                acknowledges and agrees that all terms and conditions,
                agreements, notices, disclosures, and other communications that
                the Company provides to User electronically satisfy any legal
                requirement that would also be satisfied if such communications
                were to be in a hardcopy writing.
              </li>
            </ul>
          </div>
          <p className={subHeading}>
            <b>14. General</b>
          </p>
          <div>
            <p className={contentClass}>
              14.1 <b>Entire Terms</b> - These Terms (read together with our
              Privacy Policy) constitute the entire agreement between User and
              the Company regarding User’s access and/use of pSTAKE.
            </p>
            <p className={contentClass}>
              14.2 <b>Severability</b>- If any provision of these Terms is, for
              any reason, held to be invalid or unenforceable, the other
              provisions of these Terms will be unimpaired and the invalid or
              unenforceable provision will be deemed modified so that it is
              valid and enforceable to the maximum extent permitted by law.
            </p>
            <p className={contentClass}>
              14.3 <b>Relationship of Parties</b> - Nothing contained in these
              Terms will be deemed to be construed as creating a partnership or
              an agency relationship or joint venture between User, the Company
              and/or any of our Affiliates.
            </p>
            <p className={contentClass}>
              14.4 <b>Assignment</b>- These Terms, and User’s rights thereunder,
              may not be assigned, without the Company’s prior written consent,
              and any attempted assignment, subcontract, delegation, or transfer
              in violation of the foregoing will be null and void. The Company
              may freely assign these Terms and our respective rights
              thereunder.
            </p>
            <p className={contentClass}>
              14.5 <b>Waiver</b>- A waiver by the Company of any right or remedy
              under these Terms shall only be effective if it is in writing,
              executed by a duly authorized representative of the Company and
              shall apply only to the circumstances for which it is given.
              Failure of the Company to exercise or enforce any right or remedy
              under these Terms shall not operate as a waiver of such right or
              remedy, nor shall it prevent any future exercise or enforcement of
              such right or remedy, and no single or partial exercise of any
              right or remedy shall preclude or restrict the further exercise of
              any such right or remedy or other rights or remedies.
            </p>
            <p className={contentClass}>
              14.6 <b>No Third-Party Rights</b> - Save for the Company’s
              Affiliates who shall have the rights and benefits to the extent
              accorded thereto under these Terms, any person who is not a Party
              shall have no right under the Contracts (Rights of Third Parties)
              Act 2001 of Singapore to enforce any of these Terms.
            </p>
            <p className={contentClass}>
              14.7 <b>Governing Law and Jurisdiction</b>- The agreement as shall
              be constituted by User’s acceptance of these Terms, and any
              dispute or claim arising out of or in connection with the subject
              matter or formation (including non-contractual disputes or claims)
              of such agreement, shall be governed by and construed in
              accordance with the law of Singapore. The Parties agree that any
              dispute or claim arising out of or in connection with the subject
              matter or formation (including non-contractual disputes or claims)
              of these Terms shall be by arbitration, and judgment upon the
              award may be entered by any court having jurisdiction thereof or
              having jurisdiction over the relevant Party or its assets. The
              arbitration shall be conducted under the rules of the Singapore
              International Arbitration Centre (“SIAC”). The arbitral tribunal
              shall consist of a sole arbitrator to be appointed by the
              President of the SIAC. The seat of the arbitration shall be
              Singapore. The language of the arbitration shall be English. The
              arbitration agreement shall be governed by Singapore law.
            </p>
            <p className={contentClass}>
              14.8 <b>Severability</b> - If any provisions of these Terms are
              found by any court or tribunal of competent jurisdiction to be
              invalid, void, unlawful or unenforceable under any applicable law,
              such unenforceability or invalidity shall not render these Terms
              unenforceable or invalid as a whole, and such provisions shall be
              deleted without affecting the remaining provisions herein.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;

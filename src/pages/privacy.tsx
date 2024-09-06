import {
  ListItem,
  UnorderedList,
  Text,
  Box,
  Container
} from "@chakra-ui/react";
import React from "react";

const Privacy = () => {
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "30px", md: "70px" }}
      transition={"all 0.3s"}
      pt={"200px"}
      pb={"100px"}
    >
      <Box className="container">
        <Box className="content">
          <Box>
            <Text fontSize={"26px"} mb={4} fontWeight={600}>
              Privacy Policy
            </Text>
          </Box>
          <Text fontSize={"18px"} mb={4} fontWeight={500}>
            Date Last Revised: 11th June 2024
          </Text>
          <Box className="data">
            <Text className={"subHeading"}>
              <b>1. ABOUT THIS POLICY</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                1.1 This is the Privacy Policy for Persistence Sub One Ltd.
                (collectively referred to herein as “<b>PRS1</b>”, “<b>us</b>”,
                “<b>we</b>” or “<b>our</b>”).
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.2 This Privacy Policy describes how we may collect, use,
                disclose and process your personal data when you:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  access or use our websites and applications (including mobile
                  and web-based applications) (collectively, “
                  <b>Applications</b>”), and services; and/or
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  provide us with your personal data.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                1.3 We will only use your personal data where you have given us
                your consent or where we have other lawful basis for doing so,
                and in the manner set out in this Privacy Policy.
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.4 By providing us with personal data, you acknowledge that our
                collection, use, disclosure and processing of personal data will
                be in accordance with this Policy, including, for the avoidance
                of doubt, the cross-jurisdictional transfer of your data. DO NOT
                provide any personal data to us if you do not accept this
                Privacy Policy.
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.5 This Privacy Policy supplements but does not supersede or
                replace any consents you may have provided to us, or any other
                agreements or arrangements that you may have with us, in respect
                of your personal data.
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.6 Our Applications may contain links to other websites that
                are not owned or maintained by us. These links are provided only
                for your convenience. You may also be accessing our Applications
                through third party websites and/or platforms. This Privacy
                Policy only applies to our Applications. When visiting these
                third party websites, their privacy policies apply.
              </Text>
              <Text className={"contentClass"} mb={4}>
                1.7 If you have any feedback or issues in relation to your
                personal data, or about this Privacy Policy, or wish to make a
                complaint to us, you may contact our Data Protection Officer at
                : Email : hello@persistence.one This does not affected your
                statutory rights. For example, if the GDPR applies to you, you
                may also have a right to lodge a complaint with a European
                supervisory authority, in particular in the Member State in the
                European Union where you are habitually resident, where you work
                or where an alleged infringement of Data Protection law has
                taken place. When you contact us, we may require that you submit
                certain forms or provide certain information, including
                verification of your identity, before we are able to respond.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>2. AMENDMENTS TO THIS PRIVACY POLICY</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                We may amend this Privacy Policy from time to time without
                notice to you, in compliance with applicable laws or as we
                update our data usage and handling processes. The updated policy
                will supersede earlier versions and will apply to personal data
                provided to us. The updated Privacy Policy will take effect when
                made available on{" "}
                <a
                  href="https://persistence.one/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e73f0]"
                >
                  https://persistence.one/privacy
                </a>{" "}
                (“<b>Privacy Policy</b>”).
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>3. WHAT PERSONAL DATA WE COLLECT</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                3.1 <b>What is personal data.</b> “Personal data” is data that
                can be used to identify a natural person. Examples of personal
                data include wallet addresses, and user-specific information for
                analytical purposes, email addresses and any other information
                of a personal nature.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.2 <b> Voluntary provision of personal data.</b> We may collect
                personal data (1) that you voluntarily provide to us; or (2)
                from third parties; or (3) through your use of our (or our
                services provider’s) digital technologies and services (Please
                see Section 4 How We Collect Personal Data for further details).
                What personal data we collect depends on the purposes for which
                the personal data is collected and what you have chosen to
                provide. When our collection is based on consent, you can choose
                not to provide us with personal data. You also have the right to
                withdraw your consent for us to continue collecting, using,
                disclosing and processing your personal data, by contacting us
                in accordance with paragraph 1.7. However, if you do so, it may
                not be possible for us to fulfil the purposes for which we
                require the personal data, including processing your
                transactions or providing you with the products and services
                that you require.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.3 <b>Providing personal data</b> belonging to others. In
                certain circumstances, you may also provide us with personal
                data of persons other than yourself (such as your team members,
                family members and next-of-kin). If you do so, you represent and
                warrant that you have brought this Privacy Policy to his/her
                attention, informed him/her of the purposes for which we are
                collecting his/her personal data and that he/she has consented
                to your disclosure of his/her personal data to us for those
                purposes and accepts this Privacy Policy. You agree to indemnify
                and hold us harmless from and against any and all claims by such
                inBoxiduals relating to our collection, use and disclosure of
                such personal data in accordance with the terms of this Privacy
                Policy.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.4<b> Accuracy and completeness of personal data.</b> You are
                responsible for ensuring that all personal data that you provide
                to us is true, accurate and complete. You are responsible for
                informing us of any changes to your personal data.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.5 <b>Minors.</b> Our Applications and/or services are not
                intended to be accessed or used by children, minors or persons
                who are not of legal age. If you are a parent or guardian and
                you have reason to believe your child or ward has provided us
                with their personal data without your consent, please contact
                us.
              </Text>
              <Text className={"contentClass"} mb={4}>
                3.6 <b>Excluded Persons and Excluded Jurisdictions.</b> Our
                Applications and/or services are also not intended for Excluded
                Persons, and/or access and/or use in Excluded Jurisdictions.
                Please refer to the relevant terms (including the Foundation
                Delegation Program Terms and Conditions) for the specific
                excluded persons and jurisdictions.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>4. HOW WE COLLECT PERSONAL DATA</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                4.1 Personal data you provide. We collect personal data that is
                relevant to our relationship with you. We may collect your
                personal data directly or indirectly through various channels,
                such as when:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  you download, access or use our Applications and services;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  you authorise us to obtain your personal data from a third
                  party;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  you enter into agreements with us;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  you transact with us, contact us or request that we contact
                  you through various communication channels, for example,
                  through social media platforms (such as Discord), messenger
                  platforms (such as Telegram and Slack), face-to-face meetings,
                  telephone calls, emails, fax and letters;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  your request to be included in an e-mail or our mailing list;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  we seek information about you and receive your personal data
                  in connection with your relationship with us; and/or
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  when you submit your personal data to us for any other reason.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                4.2 Personal data provided by others. Depending on your
                relationship with us, we may also collect your personal data
                from third party sources, for example, from:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  any third parties whom you have authorised us to obtain your
                  personal data from;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  entities in which you (or a party connected to you) have an
                  interest;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  our business partners such as third parties providing services
                  to us;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  your family members or friends who provide your personal data
                  to us on your behalf; and/or
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  public agencies or other public sources.
                </ListItem>
              </UnorderedList>
            </Box>
            <Text className={"subHeading"}>
              <b>5. WHAT WE DO WITH YOUR PERSONAL DATA</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                5.1 What we do. We collect, use, disclose and process your
                personal data where:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  you have given us consent;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  necessary to comply with our legal or regulatory obligations,
                  e.g. responding to valid requests from public authorities;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  necessary to support our legitimate business interests,
                  provided that this does not override your interests or rights;
                  and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  necessary to perform a transaction you have entered into with
                  us, or provide a service that you have requested or require
                  from us.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                5.2 <b>General purposes.</b> We collect, use, disclose and
                process your personal data for purposes connected or relevant to
                our business, to manage your relationship with us. Such purposes
                would include:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  carrying out your transactions with us and our business
                  partners, taking steps as may be directed by you, or to
                  provide products and/or services to you;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  facilitating your use of our Applications, including verifying
                  and establishing your identity, and authenticating, operating
                  and maintaining user accounts;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  facilitating business asset transactions;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  communicating with you, and assisting you with your queries,
                  requests, applications, complaints, and feedback;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  resolving any disputes, investigating any complaint, claim or
                  dispute or any actual or suspected illegal or unlawful
                  conduct;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  administrative purposes, including finance, IT and HR
                  purposes, quality assurance and staff training, and compliance
                  with internal policies and procedures, including audit,
                  accounting, risk management and record keeping;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  carrying out research and statistical analysis, including
                  development of new products and services or evaluation and
                  improvement of our existing products and services;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  security purposes, e.g. protecting our Applications and
                  services from unauthorised access or usage and to monitor for
                  security threats;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  compliance with any legal or regulatory obligations,
                  applicable laws, regulations, codes of practices, guidelines,
                  or rules (including anti-money laundering and countering the
                  financing of terrorism laws), or to assist in law enforcement
                  and investigations conducted by any governmental and/or
                  regulatory authority;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  performing data analytics and related technologies on data, to
                  enable us to deliver relevant content and information to you,
                  and to improve our Applications and services;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  managing and engaging third parties or data processors that
                  provide services to us, e.g. IT services, technological
                  services, delivery services, and other professional services;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  carrying out our legitimate business interests;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  such purposes that may be informed to you when your personal
                  data is collected; and/or
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  any other reasonable purposes related to the aforesaid.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                Where personal data is used for a new purpose and where required
                under applicable law, we shall obtain your consent.
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.3 Legitimate business interests. We may also collect, use,
                disclose and process your personal data for the following
                purposes to support our legitimate business interests, provided
                that this does not override your interests or rights, which
                include:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  managing our business and relationship with you, and providing
                  services to our customers;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  assistance of carrying out corporate restructuring plans;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  complying with internal policies, and procedures;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  protecting our rights and interests, and those of our
                  customers;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  enforcing our terms and conditions, and obligations owed to
                  us, or protecting ourselves from legal liability;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  managing our investor and shareholder relations; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  process or share your personal data to facilitate
                  acquisitions, mergers, or transfers of our business.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                5.4 <b>Marketing purposes.</b> In order for us to market
                products, updates, events and services which are of specific
                interest and relevance to you, we may analyse and rely on your
                personal data provided to us, or data collected from your
                interactions with us However, no marketing, using your personal
                data in non-aggregated and/or identifiable form would be carried
                out unless you have provided us with your consent to use your
                personal data for such marketing purposes. If you do not want us
                to use your personal data for the purposes of marketing you can
                withdraw your consent at any time by contacting us in accordance
                with paragraph 1.7.
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.5 <b>Use permitted under applicable laws.</b> We may also
                collect, use, disclose and process your personal data for other
                purposes, without your knowledge or consent, where this is
                required or permitted by law. Your personal data may be
                processed if it is necessary on reasonable request by a law
                enforcement or regulatory authority, body or agency or in the
                defence of a legal claim. We will not delete personal data if
                relevant to an investigation or a dispute. It will continue to
                be stored until those issues are fully resolved.
              </Text>
              <Text className={"contentClass"} mb={4}>
                5.6 <b> Contacting you.</b> When we contact or send you
                information for the above purposes and purposes for which you
                have consented, we may do so by post, e-mail, SMS, telephone or
                such other means provided by you. If you do not wish to receive
                any communication or information from us, or wish to restrict
                the manner by which we may contact or send you information, you
                may contact us in accordance with paragraph 1.7 above.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>6. USE OF AUTOMATED DATA COLLECTION TECHNOLOGIES</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                6.1 <b>Cookies. </b> In order to improve our products or
                services, we collect data by way of “cookies”. A cookie is a
                small file of letters and numbers that we store via your browser
                on the hard drive of your computer or mobile device. There are
                three main types of cookies:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Session cookies:</b> specific to a particular visit and
                  limited to sending session identifiers (random numbers
                  generated by the server) so you don&apos;t have to re-enter
                  information when you navigate to a new page or check out.
                  Session cookies are not permanently stored on your device and
                  are deleted when the browser closes;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Persistent cookies:</b> record information about your
                  preferences and are stored in your browser cache or mobile
                  device (if applicable); and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Third party cookies:</b> placed by someone other than us
                  which may gather data across multiple websites or sessions.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                6.2 How we use cookies. We use cookies for the following
                purposes:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Strictly necessary:</b> These cookies are essential for you
                  to browse our Applications and use its features. The
                  information collected relates to the operation of the
                  Applications (e.g. website scripting language and security
                  tokens) and enables us to provide you with the service you
                  have requested.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Functionality:</b> These cookies remember the choices you
                  have made, for example the country you visit our Website from,
                  your language and any changes you have made to text size and
                  other parts of the web pages that you can customise to improve
                  your user experience and to make your visits more tailored and
                  enjoyable.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Performance/analytics:</b> These cookies collect
                  information on how users use our Website, for example which
                  pages you visit most often, whether you receive any error
                  messages and how you arrived at our Applications. Information
                  collected by these cookies is used only to improve your use of
                  our Applications. These cookies are sometimes placed by third
                  party providers of web traffic and analysis services. We use
                  Google Analytics. For information on how Google processes and
                  collects your information and how you can opt out, please
                  click here.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                We may also automatically collect and store certain information
                about your interaction with our Applications including IP
                address, browser type, internet service provider, referring/exit
                pages, operating system, date/time stamps and related data.
              </Text>
              <Text className={"contentClass"} mb={4}>
                6.3 <b>Other technologies.</b> In addition to cookies, we may
                use some other similar technologies as follows (as and where
                applicable):
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Web Beacons:</b> small graphic images included on our
                  Applications or emails or those of third parties to provide
                  analytics information.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Social widgets:</b> buttons or icons provided by third
                  party social media networks which may collect browsing data
                  and will be received by the third party and are controlled by
                  the third party.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b> SDKs:</b> these are mobile application third party
                  software development kits used in our apps. They enable us to
                  collect information about app activity and the device it runs
                  on.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Local shared objects:</b> these are sometimes called flash
                  cookies and can be stored on your browser. They are used to
                  maintain preferences and usage records.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                6.4 <b>Refusing or deleting cookies.</b> Most internet browsers
                are set up by default to accept cookies. However if you want to
                refuse or delete them (or similar technologies) please refer to
                the help and support area on your browser for instructions on
                how to block or delete cookies (for example: Internet Explorer,
                Google Chrome, Mozilla Firefox and Safari). Please note you may
                not be able to take advantage of all the features of our
                Applications, including certain personalised features, if you
                delete or refuse cookies.
              </Text>
              <Text className={"contentClass"} mb={4}>
                6.5 <b> Mobile Opt-out.</b> Where applicable if we do support a
                mobile version of our product - If you access our Applications
                through mobile devices, you can enable a &quot;do not
                track&quot; feature so as to control interest-based advertising
                on an iOS or Android mobile device by selecting the Limit Add
                Tracking option in the privacy section of your Settings on iOS
                or via advertising preferences on Android devices (e.g. in
                Google Settings). This will not prevent the display of
                advertisements but will mean that they will no longer be
                personalised to your interests.
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  To opt out of Google Analytics, visit
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3e73f0]"
                    href={"https://tools.google.com/dlpage/gaoptout"}
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  For more information on managing cookies, please go to
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3e73f0]"
                    href={"www.allaboutcookies.org"}
                  >
                    www.allaboutcookies.org
                  </a>
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                6.6 <b>If you are a resident in the EU.</b> For more information
                on managing cookies, please visit{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e73f0]"
                  href={" www.youronlinechoices.eu"}
                >
                  www.youronlinechoices.eu
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e73f0]"
                  href={"www.allaboutcookies.org"}
                >
                  www.allaboutcookies.org
                </a>
                . The above links have further information about behavioural
                advertising and online privacy.
              </Text>
              <Text className={"contentClass"} mb={4}>
                6.7 <b>Changes to our uses of Cookies.</b> If we change anything
                important about this Paragraph 6 on cookies, we will notify you
                through a pop-up on the website for a reasonable length of time
                prior to and following the change. You may review this Paragraph
                by visiting the sites and clicking on the “Privacy Policy” link.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>7. DISCLOSURE OF PERSONAL DATA</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                7.1 <b>Disclosure to related parties.</b> We may disclose or
                share your personal data with our related parties in order to
                provide our services to you, manage our shareholder and investor
                returns, for management and compliance purposes, and to utilise
                shared group IT functions.
              </Text>
              <Text className={"contentClass"} mb={4}>
                7.2 <b>Disclosure to third parties.</b> We may also disclose
                your personal data to third parties in connection with purposes
                described in paragraph 5, including without limitation the
                following circumstances:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  disclosing your personal data to third parties who provide
                  services to us (including, but not limited to, data providers,
                  technology providers, insurance providers, and other
                  professional services (including accountants, lawyers and
                  auditors));
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  disclosing your personal data to third parties in order to
                  fulfil such third party products and/or services as may be
                  requested or directed by you;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  disclosing your personal data to third parties that we conduct
                  marketing and cross promotions with;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  disclosing your personal data to authorities, governments, law
                  enforcement agencies or public agencies;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  If we are discussing selling or transferring part or all of
                  our business – the information may be transferred to
                  prospective purchasers under suitable terms as to
                  confidentiality;
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  If we are reorganised or sold, information may be transferred
                  to a buyer who can continue to provide continued relationship
                  with you; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  If we are defending a legal claim your information may be
                  transferred as required in connection with defending such
                  claim.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                When disclosing personal data to third parties, we will (where
                appropriate and permissible) enter into contracts with these
                third parties to protect your personal data in a manner that is
                consistent with all applicable laws and/or ensure that they only
                process your personal data in accordance with our instructions.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>8. TRANSFER OF PERSONAL DATA TO OTHER COUNTRIES</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                Transfers. We may transfer your personal data to different
                jurisdictions in connection with the purposes described in
                paragraph 5:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  from the jurisdiction where it is collected (or where you are
                  located) to any other jurisdictions that we operate in; and
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  to third parties in other jurisdictions.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                <b>Safeguards.</b> Where we transfer your personal data across
                jurisdictions, we will ensure that your personal data is
                protected in accordance with this policy and applicable laws
                regardless of the jurisdictions they are transferred to, but in
                any event to a level that is no less stringent than the
                jurisdiction from which the personal data is transferred. When
                we transfer your personal data internationally and where
                required by applicable law we put in place appropriate
                safeguards including EU Model Clauses or rely on EU Commission
                adequacy decisions. You may obtain details of these safeguards
                by contacting us.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>9. SECURITY AND RETENTION OF PERSONAL DATA</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                9.1 <b>Unauthorised access.</b> While we take reasonable
                precautions to safeguard your personal data in our possession or
                under our control, you agree not to hold us liable or
                responsible for any loss or damage resulting from unauthorised
                or unintended access that is beyond our control, such as hacking
                or cybercrimes.
              </Text>
              <Text className={"contentClass"} mb={4}>
                9.2 <b>Vulnerabilities.</b> We do not make any warranty,
                guarantee, or representation that your use of our systems or
                applications is safe and protected from malware, and other
                vulnerabilities. We also do not guarantee the security of data
                that you choose to send us electronically. Sending such data is
                entirely at your own risk.
              </Text>
              <Text className={"contentClass"} mb={4}>
                9.3 <b> Period of retention.</b> We retain your personal data
                only for as long as is necessary to fulfil the purposes we
                collected it for, and to satisfy our business and/or legal
                purposes, including data analytics, audit, accounting or
                reporting purposes. How long we keep your personal data depends
                on the nature of the data, e.g. we keep personal data for at
                least the duration of the limitation period for bringing claims
                if the personal data may be required to commence or defend legal
                proceedings. Some information may also be retained for longer,
                e.g. where we are required to do so by law.
              </Text>
              <Text className={"contentClass"} mb={4}>
                9.4 <b>Anonymised data.</b> In some circumstances we may
                anonymise your personal data so that it can no longer be
                associated with you, in which case we are entitled to retain and
                use such data without restriction.
              </Text>
            </Box>
            <Text className={"subHeading"}>
              <b>10. YOUR RIGHTS</b>
            </Text>
            <Box>
              <Text className={"contentClass"} mb={4}>
                10.1 <b> Rights you may enjoy.</b> Depending on the jurisdiction
                that you are in or where we operate, you may enjoy certain
                rights under applicable law in relation to our collection, use,
                disclosure and processing of your personal data. Such rights may
                include:
              </Text>
              <UnorderedList className={"list-disc pl-5"}>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Access:</b> you may ask us if we hold your personal data
                  and, if we are, you can request access to your personal data.
                  This enables you to receive a copy of and information on the
                  personal data we hold about you.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Correction:</b> you may request that any incomplete or
                  inaccurate personal data we hold about you is corrected.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b> Erasure:</b> you may ask us to delete or remove personal
                  data that we hold about you in certain circumstances.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Restriction:</b> you may withdraw consent for our use of
                  your personal data, or ask us to suspend the processing of
                  certain of your personal data about you, for example if you
                  want us to establish its accuracy.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Portability:</b> you may request the transfer of certain of
                  your personal data to another party under certain conditions.
                </ListItem>
                <ListItem className={"contentClass"} mb={4}>
                  <b>Objection:</b> where we are processing your personal data
                  based on a legitimate interest (or those of a third party) you
                  may object to processing on this ground.
                </ListItem>
              </UnorderedList>
              <Text className={"contentClass"} mb={4}>
                If you wish to exercise any of your rights, you may contact us
                in accordance with paragraph 1.7. We may require that you submit
                certain forms or provide certain information to process your
                request. Where permitted by law, we may also charge you a fee to
                process your request.
              </Text>
              <Text className={"contentClass"} mb={4}>
                10.2 <b>Limitations.</b> We may be permitted under applicable
                laws to refuse a request, for example, we may refuse (a) a
                request for erasure where the personal data is required for in
                connection with claims; or (b) an objection request and continue
                processing your personal data based on compelling legitimate
                grounds for the processing.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Privacy;

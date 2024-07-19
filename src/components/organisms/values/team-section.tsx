import TeamMemberCard, {
  TeamMemberCardInterface
} from "@/components/atoms/team-member-card";
import { Flex, Heading, Container, Box, Text } from "@chakra-ui/react";
import React from "react";

const teamMembers: TeamMemberCardInterface[] = [
  {
    image: "/images/team/tushar-aggarwal.png",
    name: "Tushar Aggarwal",
    role: "Founder and CEO",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/Tushar307",
        icon: "x",
        color: "#000000"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/tushar-aggarwal-2823b02b/",
        icon: "linkedin",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/jeroen-develter.png",
    name: "Jeroen Develter",
    role: "Chief Operating Officer",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/dneorej",
        icon: "x",
        color: "#000000"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/jeroendevelter/",
        icon: "linkedin",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/zhi-hao.png",
    name: "Zhi Hao Loy",
    role: "Chief Legal Officer",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/loyzhihao",
        icon: "x",
        color: "#000000"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/loyzhihao/",
        icon: "linkedin",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/sukriti-taneja.png",
    name: "Sukriti Taneja",
    role: "Marketing",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/Sukriti2108",
        icon: "x",
        color: "#000000"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/sukriti-taneja-b624731a0/",
        icon: "linkedin",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/pranjal-paliwal.png",
    name: "Pranjal Paliwal",
    role: "Engineering",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/betterclever",
        icon: "x",
        color: "#000000"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/betterclever/",
        icon: "linkedin",
        color: "#0077B5"
      }
    ]
  }
];

const TeamSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "50px" }}>
      <Heading
        textAlign={"center"}
        color={"#633C0D"}
        fontSize={{ base: "26px", md: "48px" }}
        lineHeight={{ base: "32px", md: "72px" }}
        mb={{ base: "20px", md: "60px" }}
      >
        Meet Fellow Persisters
      </Heading>
      <Flex justify={"center"} flexWrap={"wrap"} rowGap={10} w={"100%"}>
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            image={member.image}
            name={member.name}
            role={member.role}
            socialLinks={member.socialLinks}
          />
        ))}
        <Box
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          borderRadius={"100%"}
          bg={"#633C0D"}
          ml={"20px"}
        >
          <Box>
            <Text
              alignSelf={"center"}
              color="text.whiteMid"
              fontSize={"70px"}
              fontWeight={600}
              lineHeight={"60px"}
            >
              +17
            </Text>
            <Text
              alignSelf={"center"}
              color="text.whiteMid"
              fontSize={"22px"}
              fontWeight={600}
            >
              Persisters
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default TeamSection;

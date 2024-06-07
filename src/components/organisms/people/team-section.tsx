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
  // {
  //   image: "/images/team/mikhil-pandey.png",
  //   name: "Mikhil Pandey",
  //   role: "Chief Strategy Officer",
  //   socialLinks: [
  //     {
  //       name: "Twitter",
  //       link: "https://twitter.com/PandeyMikhil",
  //       icon: "x",
  //       color: "#000000"
  //     },
  //     {
  //       name: "Linkedin",
  //       link: "https://www.linkedin.com/in/mikhilpandey/",
  //       icon: "linkedin",
  //       color: "#0077B5"
  //     }
  //   ]
  // },
  {
    image: "/images/team/jeroen-develter.png",
    name: "Jeroen Develter",
    role: "COO",
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
    role: "CLO",
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

  // {
  //   image: "/images/team/rajesh-iyer.png",
  //   name: "Rajesh Iyer",
  //   role: "Product",
  //   socialLinks: [
  //     {
  //       name: "Twitter",
  //       link: "https://twitter.com/LNarayanIyer_",
  //       icon: "x",
  //       color: "#000000"
  //     },
  //     {
  //       name: "Linkedin",
  //       link: "https://www.linkedin.com/in/rajeshiyer17/",
  //       icon: "linkedin",
  //       color: "#0077B5"
  //     }
  //   ]
  // },

  // {
  //   image: "/images/team/bart-van-der-voort.png",
  //   name: "Bart Van Der Voort",
  //   role: "Head of Strategy",
  //   socialLinks: [
  //     {
  //       name: "Twitter",
  //       link: "https://twitter.com/unimonkey21",
  //       icon: "x",
  //       color: "#000000"
  //     },
  //     {
  //       name: "Linkedin",
  //       link: "https://www.linkedin.com/in/bartvandervoort/",
  //       icon: "linkedin",
  //       color: "#0077B5"
  //     }
  //   ]
  // },
  {
    image: "/images/team/puneet-mahajan.png",
    name: "Puneet Mahajan",
    role: "Engineering",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/puneet_m_",
        icon: "x",
        color: "#000000"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/puneet-mahajan-/",
        icon: "linkedin",
        color: "#0077B5"
      }
    ]
  },
  // {
  //   image: "/images/team/marc-puig-torres.png",
  //   name: "Marc Puig Torres",
  //   role: "Engineering",
  //   socialLinks: [
  //     {
  //       name: "Twitter",
  //       link: "https://twitter.com/krusspy",
  //       icon: "x",
  //       color: "#000000"
  //     },
  //     {
  //       name: "Linkedin",
  //       link: "https://www.linkedin.com/in/marcpt/",
  //       icon: "linkedin",
  //       color: "#0077B5"
  //     }
  //   ]
  // },
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

  // {
  //   image: "/images/team/aditya-vandkar.png",
  //   name: "Aditya Vandkar",
  //   role: "Growth",
  //   socialLinks: [
  //     {
  //       name: "Twitter",
  //       link: "https://twitter.com/VandkarAditya",
  //       icon: "x",
  //       color: "#000000"
  //     },
  //     {
  //       name: "Linkedin",
  //       link: "https://www.linkedin.com/in/aditya-vandkar-9a9675177/",
  //       icon: "linkedin",
  //       color: "#0077B5"
  //     }
  //   ]
  // }
];

const TeamSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "50px" }}>
      <Heading
        variant={"main"}
        textAlign={"center"}
        fontSize={{ base: "26px", md: "58px" }}
        mb={{ base: "32px", md: "60px" }}
        color={"text.headingSemiBlack"}
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
          bg={"#252424"}
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

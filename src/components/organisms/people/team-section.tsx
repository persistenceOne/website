import TeamMemberCard, {
  TeamMemberCardInterface
} from "@/components/atoms/team-member-card";
import { Flex, Heading, Container, Box } from "@chakra-ui/react";
import React from "react";

const teamMembers: TeamMemberCardInterface[] = [
  {
    image: "/images/team/tushar-aggarwal.png",
    name: "Tushar Aggarwal",
    role: "Founder and Chief Executive Officer",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/Tushar307",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/tushar-aggarwal-2823b02b/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/mikhil-pandey.png",
    name: "Mikhil Pandey",
    role: "Chief Strategy Officer",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/PandeyMikhil",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/mikhilpandey/",
        icon: "/icons/linkedin.svg",
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
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/jeroendevelter/",
        icon: "/icons/linkedin.svg",
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
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/loyzhihao/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },

  {
    image: "/images/team/rajesh-iyer.png",
    name: "Rajesh Iyer",
    role: "Product",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/LNarayanIyer_",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/rajeshiyer17/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },

  {
    image: "/images/team/bart-van-der-voort.png",
    name: "Bart",
    role: "Strategy",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/unimonkey21",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/bartvandervoort/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/aditya-vandkar.png",
    name: "Aditya Vandkar",
    role: "Growth",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/Tushar307",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/tushar-aggarwal-2823b02b/?originalSubdomain=sg",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/kevin-poh.png",
    name: "Kevin Poh",
    role: "Business Development",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/kevinnnpoh",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/kevinpohchengen/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/marc-puig-torres.png",
    name: "Marc Puig Torres",
    role: "Engineering",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/krusspy",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/marcpt/",
        icon: "/icons/linkedin.svg",
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
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/sukriti-taneja-b624731a0/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/puneet-mahajan.png",
    name: "Puneet Mahajan",
    role: "Engineering",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/puneet_m_",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/puneet-mahajan-/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  },
  {
    image: "/images/team/maksim-kupriianov.png",
    name: "Maksim Kupriianov",
    role: "Engineering",
    socialLinks: [
      {
        name: "Twitter",
        link: "https://twitter.com/xlab_gg",
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/mkupriianov/",
        icon: "/icons/linkedin.svg",
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
        icon: "/icons/twitter.svg",
        color: "#0077B5"
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/betterclever/",
        icon: "/icons/linkedin.svg",
        color: "#0077B5"
      }
    ]
  }
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
      </Flex>
    </Container>
  );
};

export default TeamSection;

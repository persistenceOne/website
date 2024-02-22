import TeamMemberCard, {
  TeamMemberCardInterface
} from "@/components/atoms/team-member-card";
import { Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

const teamMembers: TeamMemberCardInterface[] = [
  {
    image: "/images/team/tushar-aggarwal.png",
    name: "Tushar Aggarwal",
    role: "Founder",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/mikhil-pandey.png",
    name: "Mikhil Pandey",
    role: "Chief Strategy Officer",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/jeroen-develter.png",
    name: "Jeroen Develter",
    role: "Chief Operating Officer",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/zhi-hao.png",
    name: "Zhi Hao Loy",
    role: "General Counsel",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    role: "Head of BD",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/rajesh-iyer.png",
    name: "Rajesh Iyer",
    role: "Product Manager",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/bart-van-der-voort.png",
    name: "Bart Van Der Voort",
    role: "Head of Strategy",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/puneet-mahajan.png",
    name: "Puneet Mahajan",
    role: "Engineering",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/marc-puig-torres.png",
    name: "Marc Puig Torres",
    role: "Engineering",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/maksim-kupriianov.png",
    name: "Maksim Kupriianov",
    role: "Engineering",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/pranjal-paliwal.png",
    name: "Pranjal Paliwal",
    role: "Engineering",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/sukriti-taneja.png",
    name: "Sukriti Taneja",
    role: "Marketing",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
    image: "/images/team/aditya-vandkar.png",
    name: "Aditya Vandkar",
    role: "Growth",
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/tusharaggarwal",
        icon: "/icons/telegram.svg",
        color: "#0077B5"
      },
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
  }
];

const TeamSection = () => {
  return (
    <VStack align={"center"} py={12} gap={16}>
      <Heading variant={"main"} fontSize={58} color={"text.headingSemiBlack"}>
        Meet Fellow Persisters
      </Heading>
      <Flex justify={"center"} flexWrap={"wrap"} rowGap={8} w={"1140px"}>
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
    </VStack>
  );
};

export default TeamSection;
